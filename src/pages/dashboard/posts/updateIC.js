import React, {Component, useState} from 'react';
import { Form, Input, Button, DatePicker, Gender, Checkbox } from 'antd';
import './style.css';
import 'react-phone-input-2/lib/style.css'
import {TagAnimal} from '../../../components/tagAnimal'
import classes from '../../../data/classes.json'
import {getTagsFollowing} from '../../../api/api'
import { connect } from "react-redux";
class TagFollowing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arrTag: [],
            arrObj: [],
            allowRender: false
        }
      };
    async componentDidMount(){
        // console.log(this.props.user)
        const response = await getTagsFollowing(this.props.user.idUser)
        const {followingtag} = response.data
        const arr = []
        for( var item of followingtag){
            arr.push(item.animal)
        }
        this.setState({
            arrTag: arr,
            arrObj: followingtag,
            allowRender: true
        })
        console.log(response)
    }
    render(){
        console.log(this.state.arrTag)
        const {arrObj, arrTag} = this.state
        return(
            this.state.allowRender ? 
            <div className="edit-contact-info">
                {
                    classes.map((obj, index) =>(
                        index != 0 ?
                            arrTag.includes(index) ?
                            <TagAnimal idFollow = {arrObj[arrTag.indexOf(index)].id} key ={index}
                            idTag={index} name = {obj.name} isFollow = {true}/> :
                            <TagAnimal idFollow = {null} key ={index}
                            idTag={index} name = {obj.name} isFollow = {false}/>
                        : ''
                    ))
                }
            </div>
            : 
            <>
            </>
            
            
        );
    }

}

const mapStateToProps = (state) => ({
    user: state.currentUser
});

export default connect(mapStateToProps)(TagFollowing);
import React, {Component} from 'react';

import { Form, Input, Button, DatePicker, Gender, Checkbox } from 'antd';
import './style.css';
import TagFollowing from './updateIC'
import {UpdateInforPersonal} from './updateIP'
import {UpdatePassword} from './updatePW'
import {SetTheme} from './setTheme'
export default class SetProFile extends Component {
    constructor(props){
        super(props);
        this.state ={
            index: 1,
            type: 1,
        };
        this.handleOnclick = this.handleOnclick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleOnclick = (e, index) =>{ 
        this.setState({
            type: parseInt(index)
        })
        console.log(index);
        
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render(){

    
    return(
    <div className="container-setting">
        <div className = "row">
            <div className="col-md-3">
                <ul className="el-menu">
                    <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 1)}>
                        <a href="#">
                        <span>Change personal information</span>
                        </a>
                    </li>
                    <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 2)}>
                        <a href="#">
                        <span>Change password</span>
                        </a>
                    </li>
                    <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 3)}>
                        <a href="#">
                        <span>Following Tag</span>
                        </a>
                    </li>
                    <li className="el-menu-item" onClick = {(e) => this.handleOnclick(e, 4)}>
                        <a href="#">
                        <span>Theme</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-md-9">
                {
                    this.state.type == 1 ? <UpdateInforPersonal/> : 
                    this.state.type == 2 ? <UpdatePassword/> :
                    this.state.type == 3 ? <TagFollowing/> : <SetTheme/>
                }
            </div>
        </div>
    </div>
    );
}
}

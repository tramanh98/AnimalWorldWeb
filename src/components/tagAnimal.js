import { Button, Tooltip } from 'antd';
import { PlusOutlined, CheckOutlined} from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import './style.css';
import {apiFollowTag, apiUnfollowTag } from '../api/api'
import classes from '../data/classes.json'
export const TagAnimal = (props) => {
    const [follow, setFollow] = useState(props.isFollow)
    const [idfollow, setIdfollow] = useState(props.idFollow)

    const handleFollowAnimal = async () =>{
        const response = await apiFollowTag(props.idTag)
        const {data} = response
        if(response.status == 201) // create success
        {
            setFollow(true)
            setIdfollow(data.id)
        }
        console.log(response)
    }
    const handleUnfollowAnimal = async () =>{
        const response = await apiUnfollowTag(idfollow)
        if(response.status == 204)  // delete success
        {
            setFollow(false)
            setIdfollow(null)
            console.log('deleted')
        }

    }

    return(
        <div className= "pr-5 pb-5 p-0 col-md-6">
            <div className="d-flex flex-row">
                <div className="col-md-5">
                    <img src = {props.img} style={{width: "100%"}}/>
                </div>
                <div className="p-0 col-md-7">
                    <h6>{props.name}</h6>
                    {
                        follow ? 
                        <Button type="primary" onClick={handleUnfollowAnimal} icon ={<CheckOutlined />}>Following</Button> :
                        <Button type="primary" onClick={handleFollowAnimal} ghost icon ={<PlusOutlined />}>Follow</Button> 
                    }    
                </div>
            </div>
            
        </div>
    
    );
}
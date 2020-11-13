import { Button, Tooltip } from 'antd';
import { PlusOutlined, CheckOutlined} from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import './style.css';
import {apiFollowTag, apiUnfollowTag } from '../api/api'
export const TagAnimal = (props) => {
    const [follow, setFollow] = useState(props.isFollow)
    const handleFollowAnimal = async () =>{
        setFollow(true)
        // API 
        console.log(props.id)
        const response = await apiFollowTag(props.id)
        console.log(response)
    }
    const handleUnfollowAnimal = () =>{
        setFollow(false)
    }

    return(
        <div className= "d-inline-flex mr-5 mb-5 p-0" style={{width: "25%"}}>
            <div>
                <img src = "../images/avt1.jpg" style={{width: "90%"}}/>
            </div>
            <div className="p-0">
                <h4>Bò sát</h4>
                {
                    follow ? 
                    <Button type="primary" onClick={handleUnfollowAnimal} icon ={<CheckOutlined />}>Following</Button> :
                    <Button type="primary" onClick={handleFollowAnimal} ghost icon ={<PlusOutlined />}>Follow</Button> 
                }    
            </div>
        </div>
    
    );
}
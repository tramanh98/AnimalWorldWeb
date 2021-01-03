import './style.css';
import React, { Component, useEffect, useState, useRef } from 'react';
import { Collapse, Tabs, message, Avatar, Pagination, Empty  } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import {PrivateFramePost} from '../../../components/framePost'
import {ApiDeleteArticle, GetInforUser, GetAllUserArticle, getTagsFollowing} from '../../../api/api'
import { useSelector, useDispatch } from 'react-redux';
import {TagAnimal} from '../../../components/tagAnimal'
import classes from '../../../data/classes.json'
const { TabPane } = Tabs;
const { Panel } = Collapse;


const FollowingTag = (props) =>{
    const user = useSelector((state) => state.currentUser);
    const [arrTag, setArrTag] = useState(null)
    const [arrObj, setArrObj] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect( async () => {
        setLoading(true)
        const response = await getTagsFollowing(props.match.params.idUser)
        const {followingtag} = response.data
        const arr = []
        if(response.status === 200)
        {
            for( var item of followingtag){
                arr.push(item.animal)
            }
            setArrTag(arr)
            setArrObj(followingtag)
        }
        else{
            message.error(response.error)
        }
        setLoading(false)
      }, []);

      return(
          loading ? '' :
          arrObj.length === 0 ? 
            <div className="my-5">
                <Empty description={'There is nothing here.'}/>
            </div> 
            :
            <div className="row">
                {
                    classes.map((obj, index) =>(
                        index != 0 ?
                            arrTag.includes(index) ?
                                <TagAnimal idFollow = {arrObj[arrTag.indexOf(index)].id} key ={index}
                                idTag={index} name = {obj.name} img={obj.avt} isFollow = {true}/> : ''
                            
                        :''
                    ))
                    
                }
            </div>
      );
}

export const ManageAccount = (props) => {
    const user = useSelector((state) => state.currentUser);
    const [profile, setProfile] = useState(null)
    const [allArticles, setAllarticles] = useState(null)
    const [isOwner, setIsOwner] = useState(null)
    const [countResult, setCountResult] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const callback = (key) => {
        console.log(key);
    }
    useEffect( async () => {
        // call API

        setLoading(true)
        const res1 = await GetInforUser(props.match.params.idUser)
        console.log(res1)
        if(res1.status === 200){
            setProfile(res1.data)
            if(user.idUser === res1.data.id){
                setIsOwner(true)
            }
            else{
                setIsOwner(false)
            }
        }else{
            message.error(res1.error)
        }
        const res2 = await GetAllUserArticle(1, props.match.params.idUser)
        console.log(res2)
        if(res2.status === 200){
            setAllarticles(res2.data.results)
            setCountResult(res2.data.count)
        }else{
            message.error(res2.error)
        }
        setLoading(false)
      }, []);

    const handleDeleteArticle = async (id) =>{
        const response = await ApiDeleteArticle(id)
        console.log(response)
        if(response.status == 204){
            message.success('Deleted Success');
        }
    }

    const handleRouteToUpdate = (id) =>{
        props.history.push(`/update/${id}`)
    }
    const editProfile = () =>{
        props.history.push('/setting')
    }

    const changePage = async (page, pagesize)=>{
        setLoading(true)
        const res = await GetAllUserArticle(page, props.match.params.idUser)
        if(res.status === 200){
            console.log(res)
            const {data} = res
            setAllarticles(data.results)
        }else{
            message.error(res.error)
        }
        setCurrentPage(page)
        setLoading(false)
    }

    return (
        <div>
            <div className="d-flex my-4">
                {
                    profile ? 
                    <>
                        <div className="avt">
                            { 
                                profile.avatar ? 
                                <Avatar src = {profile.avatar} size={100}/> : 
                                <Avatar style={{ verticalAlign: 'middle' }} icon={<UserOutlined />} size={100}/> 
                                    
                            }
                        </div>
                        <div className="ml-3 mt-1">
                            <h3 className="d-inline-block">{`${profile.first_name} ${profile.last_name}`}</h3>
                            {
                                isOwner ? <button className="edit" onClick={editProfile}>Edit Profile</button> :''
                            }
                            <p className="text-muted d-block">@{profile.username}</p>
                        </div> 
                    </>
                    : ''
                }
            </div>

            <div className = "row">
                <div className="col-md-9">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Post" key="1">
                        {
                            loading ? "" :
                            <div>
                                {
                                    allArticles.length === 0 ?  
                                    <div className="my-5">
                                        <Empty description={'There is nothing here.'}/>
                                    </div> :
                                    allArticles.map((obj, index) =>(
                                        <>
                                            <PrivateFramePost 
                                                isOwner = {isOwner}
                                                idArticle = {obj.id}
                                                onClickDelete = {handleDeleteArticle}
                                                onClickUpdate = {handleRouteToUpdate}
                                                {...obj}
                                            />
                                            {
                                                (index + 1)%10 !==0 ?  
                                                    (index + 1) !== allArticles.length ? 
                                                    <hr/> :''  
                                                : ''
                                            }
                                        </>
                                    )) 
                                }
                                
                                {

                                    countResult == 0 ? '' :  
                                    <div className="my-5">
                                        <Pagination onChange = {changePage} defaultCurrent={currentPage} total={countResult} />
                                    </div>
                                }
                            </div>
                        }
                    </TabPane>
                    <TabPane tab="Tag" key="2">
                        <FollowingTag {...props}/>
                    </TabPane>
                </Tabs>

                </div>
                <div className = "col-md-3">
                        
                </div>

            </div>
        </div>
    );
}
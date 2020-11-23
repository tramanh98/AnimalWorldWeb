import './style.css';
import React, { Component, useEffect, useState, useRef } from 'react';
import { Collapse, Tabs, message, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import {PrivateFramePost} from '../../../components/framePost'
import {ApiDeleteArticle, GetInforUser, GetAllUserArticle} from '../../../api/api'
const { TabPane } = Tabs;
const { Panel } = Collapse;
export const ManageAccount = (props) => {
    const [profile, setProfile] = useState(null)
    const [allArticles, setAllarticles] = useState(null)
    const callback = (key) => {
        console.log(key);
    }
    useEffect( async () => {
        // call API
        const res1 = await GetInforUser(props.match.params.idUser)
        console.log(res1)
        if(res1.status === 200){
            setProfile(res1.data)
        }
        const res2 = await GetAllUserArticle(props.match.params.idUser)
        console.log(res2)
        if(res2.status === 200){
            setAllarticles(res2.data.results)
        }
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
                            <button className="edit" onClick={editProfile}>Edit Profile</button>
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
                        <div>
                            {
                                allArticles ? 
                                allArticles.map((obj, index) =>(
                                    <>
                                    <PrivateFramePost 
                                        idArticle = {obj.id}
                                        onClickDelete = {handleDeleteArticle}
                                        onClickUpdate = {handleRouteToUpdate}
                                        {...obj}
                                    />
                                    <hr/>
                                    </>
                                )) : ''
                            }
                            
                        </div>
                    </TabPane>
                    <TabPane tab="Following" key="2">
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="Chân khớp (1/51)" key="1">
                                    Chuồn chuồn <button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Có vú (3/157)" key="2">
                                    <a>Sư Tử </a><button className="follow">Follow</button>
                                    <a>Chó </a><button className="follow">Follow</button>
                                    <a>Báo </a><button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Cá" key="3">
                                    Cá mập <button className="follow">Follow</button>
                                </Panel>
                            </Collapse>
                    </TabPane>
                    
                </Tabs>
                </div>
                <div className = "col-md-3">
                        
                </div>

            </div>

            {/* <div className="container mt-2">
                <br />
                
                <ul className=" nav nav-tabs ">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="tab-post"> <i className="fas fa-pen" style={{ fontSize: "70%" }}></i> Post</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-follow">Follow</a>
                    </li>
                </ul>


                <div className="tab-content">
                    <div id="tab-post" className="container tab-pane active">
                        <div>No post.</div>
                    </div>

                    <div id="tab-follow" className="container tab-pane fade">

                        <div>

                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="Chân khớp (1/51)" key="1">
                                    Chuồn chuồn <button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Có vú (3/157)" key="2">
                                    <a>Sư Tử </a><button className="follow">Follow</button>
                                    <a>Chó </a><button className="follow">Follow</button>
                                    <a>Báo </a><button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Cá" key="3">
                                    Cá mập <button className="follow">Follow</button>
                                </Panel>
                            </Collapse>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, HeartOutlined, EyeOutlined, CommentOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Divider, Tag  } from 'antd';
import "antd/dist/antd.css"
import ReactHtmlParser from 'react-html-parser'
{/*** đây là frame cho các bài viết, chứa thông tin cơ bản****/ }
const FramePost1 = (props) =>{
    const {user} = props
    const res = Date.parse(props.created_at)
    const d = new Date(res);
    return(
        <div className = "row frameInforBasic">  
            <div className = "col-md-6">
               <Link to ={`/detail/${props.id}`}><img src={props.image} alt="Notebook" style={{width: "100%"}}/></Link>
            </div>
            <div className = "col-md-6 sumtp1">
                {/* <Tag color="default">default</Tag>
                <Tag color="default">default</Tag> */}
                <Link to ={`/detail/${props.id}`}><h4 className="fontANW">{props.title}</h4></Link>
                <div className="my-2 fontIcon">
                    <span> <i class="far fa-user"></i></span> {user.username}
                    <Divider type="vertical" style = {{color: "black"}} />
                    <span> <i class="far fa-comments"></i> </span> {props.comment}
                    <Divider type="vertical" style = {{color: "black"}} />
                    <span> <i class="far fa-clock"></i> </span> {d.toLocaleDateString()}
                </div>
                <p className = "description">{ReactHtmlParser(props.content)}</p>
            </div>
        </div>
    )
}

const FramePost2 = (props) =>{
    const {user} = props
    const res = Date.parse(props.created_at)
    const d = new Date(res);
    return(
        <div className = "framepost-type2">
            <Link to ={`/detail/${props.id}`}><img src={props.image} alt="Notebook" style={{width: "100%"}}/></Link>

            <Link to ={`/detail/${props.id}`}><h5 className="fontANW">{props.title}</h5></Link>
            <div className="my-2 fontIcon">
                <span> <i class="far fa-user"></i></span> {user.username}
                <Divider type="vertical" style = {{color: "#ccc"}}/>
                <span> <i class="far fa-comments"></i> </span> {props.comment}
                <Divider type="vertical" style = {{color: "#ccc"}} />
                <span> <i class="far fa-clock"></i> </span> {d.toLocaleDateString()}
            </div>
            <p className = "description">
                    {ReactHtmlParser(props.content)}
            </p>
        </div>
    )
}

const FramePost3 = (props) =>{
    const {user} = props
    const res = Date.parse(props.created_at)
    const d = new Date(res);
    return(
        <div className = "frameInforBasic row">  {/*** đây là frame cho các bài viết, chứa thông tin cơ bản****/ }
            <div className = "col-md-4">
                <Link to ={`/detail/${props.id}`}><img src={props.image} alt="Notebook" style={{width: "100%"}}/></Link>
            </div>
            <div className = "col-md-8 pl-3">
                <Link to ={`/detail/${props.id}`}><h6  className="fontANW">{props.title}</h6></Link>
                <div className="my-2 fontIcon">
                    <span> <i class="far fa-clock"></i> </span> {d.toLocaleDateString()}
                </div>
            </div>
        </div>
    )
}
const FramePost4 = (props) =>{
    const {user} = props
    const res = Date.parse(props.created_at)
    const d = new Date(res);
    return (
        <div className = " ">
            <Link to ={`/detail/${props.id}`}><img src={props.image} alt="Notebook" style={{width: "100%"}}/></Link>
            <Link to ={`/detail/${props.id}`}><h5 className="fontANW">{props.title}</h5></Link>
            <div className="my-2 fontIcon">
                <span> <i class="far fa-user"></i></span> {user.username}
                <Divider type="vertical" style = {{color: "#ccc"}}/>
                <span> <i class="far fa-comments"></i> </span> {props.comment}
                <Divider type="vertical" style = {{color: "#ccc"}}/>
                <span> <i class="far fa-clock"></i> </span> {d.toLocaleDateString()}
            </div>
            <p className = "description">
                {ReactHtmlParser(props.content)}
            </p>
        </div>
    )
}

export const PrivateFramePost = (props) =>{
    const onClickDelete = () =>{
        props.onClickDelete(props.idArticle)
    }
    const onclickEdit = () =>{
        props.onClickUpdate(props.idArticle)
    }
    
    return(
        <div className = "row frameInforBasic">  
            <div className = "col-md-4">
                <Link to ={`/detail/${props.id}`}>
                    <img src={props.image} alt="Notebook" style={{width: "100%"}}/>
                </Link>
            </div>
            <div className = "col-md-7 px-3">
                <Link to ={`/detail/${props.id}`}><h4>{props.title}</h4></Link>
                <p className = "description">
                    {ReactHtmlParser(props.content)}
                </p>
                <div className="mt-4">
                    <span className ="mr-3"><EyeOutlined style={{ fontSize: '14px' }}/> {props.view} </span>
                    <span className ="mr-3"><HeartOutlined style={{ fontSize: '14px' }}/> {props.like} </span>
                    <span><CommentOutlined style={{ fontSize: '14px' }}/> {props.comment} </span>
                </div>
            </div>
            {
                props.isOwner ? 
                <div className = "col-md-1 m-0 p-0 delete-edit">
                    <div >
                        <Button shape="circle" icon={<EditOutlined />} onClick = {onclickEdit}/>
                    </div>
                    <div className = "mt-3">
                        <Popconfirm
                            title="Are you sure to delete this article?"
                            onConfirm={onClickDelete}
                            onCancel={()=>{ console.log("cancle")}}
                            okText="Yes"
                            cancelText="No"
                        > 
                            <Button shape="circle" icon={<DeleteOutlined />} />
                        </Popconfirm>
                    </div>
                </div> : ''
            }
            
        </div>
    );
}

export{
    FramePost1, FramePost2, FramePost3, FramePost4

}

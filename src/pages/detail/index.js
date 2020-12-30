import React, {Component} from 'react';
import AllComments from './comment'
import { TrendingPost, FavoritePost } from '../../components/rightcol'
import {NameTag} from '../../components/badge'
import {EyeOutlined} from '@ant-design/icons';
import { Avatar, Affix, Button, Tooltip } from 'antd';
import { UserOutlined, EditOutlined, HeartOutlined, HeartFilled, CommentOutlined } from '@ant-design/icons';
import {getDetailBlog, GetCommentsArticle, VoteArticle, UnvoteArticle} from '../../api/api'
import ReactHtmlParser from 'react-html-parser'
import '../style.css'
import { Link } from "react-router-dom";
import { connect} from "react-redux";



class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: false,
            idVote: null, // idVote mà user đã vote cho bài viết đó 
            results: {},
            user: {},
            comments: [],
            visibleComment: false,
            ownerArticle: {},
            date: ''
        } 
        this.handleVoteArticle = this.handleVoteArticle.bind(this)
        this.handleUnvoteArticle = this.handleUnvoteArticle.bind(this)

    };

    handleVoteArticle = async () =>{
        const response = await VoteArticle(this.props.match.params.idBlog)
        console.log(response)
        const {data} = response
        if(response.status === 201){
            this.setState({
                vote: true, 
                idVote: data.id
            })
        }
    }

    handleUnvoteArticle = async () =>{
        const response = await UnvoteArticle(this.state.idVote)
        console.log(response)
        if(response.status === 204){
            this.setState({
                vote: false
            })
        } 
    }
    async componentDidMount() {
        const res1 = await getDetailBlog(this.props.match.params.idBlog)
        const res2 = await GetCommentsArticle(this.props.match.params.idBlog)
        
        console.log(res1)
        console.log(res2)
        const {votes} = res1.data
        const {user} = res1.data
        console.log(user)

        if(res1.status === 200 && res2.status === 200){
            for(var x of votes){
                if(x.user == this.props.user.idUser){
                    this.setState({
                        vote: true,
                        idVote: x.id
                    })
                    break;
                }
            }
            this.setState({
                results: res1.data,
                comments: res2.data.results,
                visibleComment: true,
                ownerArticle: user,
                date: new Date(Date.parse(res1.data.created_at)).toLocaleDateString()
            })
        }   
    }

    render(){
        const {ownerArticle} = this.state
        return(
            <div className = "row my-5">

                <div className="col-md-1 vote-article p-0">
                    <Affix offsetTop={200} >
                        {this.state.vote  ? 
                            <Tooltip title="Unvote">
                                <Button shape="circle"  onClick = {this.handleUnvoteArticle}
                                icon={<HeartFilled />} size='large' danger></Button>
                            </Tooltip>
                            :
                            <Tooltip title="Vote">
                                <Button shape="circle"  onClick = {this.handleVoteArticle}
                                icon={<HeartOutlined />} size='large' danger></Button>
                            </Tooltip>
                        }
                    </Affix>
                </div>

                <div className = "col-md-7 pr-4">
                    <div className = "d-flex justify-content-between ">
                        <div className="p-2 my-auto" style={{width: '30%'}}>
                            <div className= "d-flex">
                                <div className ="p-2" >
                                    <Link to = {`/manage/account/${ownerArticle.id}`}>
                                    {
                                        ownerArticle.avatar ? 
                                        <Avatar size={50} src={ownerArticle.avatar} />
                                        : 
                                        <Avatar size={50} icon={<UserOutlined />} />
                                    }
                                    </Link>
                                </div>
                                <div className ="pl-3" >
                                    <Link to = {`/manage/account/${ownerArticle.id}`}>
                                        {`${ownerArticle.first_name} ${ownerArticle.last_name}`}
                                    </Link>
                                    <div>
                                        <EditOutlined style={{ fontSize: '14px' }}/> {ownerArticle.posts}
                                        {/* <span>{this.state.results.user.email}</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            Published on {this.state.date}
                            <div className = "d-flex justify-content-end">
                                <div className = "ml-3">
                                    <HeartOutlined style={{ fontSize: '14px' }}/> {this.state.results.like} 
                                </div>
                                <div className ="ml-3">
                                    <EyeOutlined style={{ fontSize: '15px' }}/> {this.state.results.view} 
                                </div>
                                <div className = "ml-3">
                                    <CommentOutlined style={{ fontSize: '15px' }}/> {this.state.results.comment}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-3">{this.state.results.title}</h2>
                    <div className="contentBlog">
                        {ReactHtmlParser(this.state.results.content)}
                    </div>
                    {
                        this.state.visibleComment ? 
                        <AllComments comment = {this.state.comments} idPost = {this.state.results.id}/> :
                        ''
                    }
                </div>

                <div className = "col-md-4 pr-3">
                    <TrendingPost/>
                    <FavoritePost/>
                </div>
                
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    user: state.currentUser
});

export default connect(mapStateToProps)(Detail);

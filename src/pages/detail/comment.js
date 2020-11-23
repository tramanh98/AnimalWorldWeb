import { Comment, Avatar, Tooltip, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React,  {createElement, useState, useEffect } from 'react'
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import {apiComment, likeComment, dislikeComment} from '../../api/api'
import { useSelector, useDispatch } from 'react-redux';
import '../style.css'
const { TextArea } = Input;

const EachComment = (props) =>{
    const [likes, setLikes] = useState(props.like);
    const [action, setAction] = useState('disliked');
    const [idVotecmt, setIdVotecmt] = useState(null);
    const user = useSelector((state) => state.currentUser);
    useEffect(() => {
      for( var x of props.votes){
        if(x.user === user.idUser){
          console.log(user.idUser)
          setIdVotecmt(x.id)
          setAction('liked')
          break;
        }
      }
    }, []);
    const handleLDL = async () => {
        if(action === 'liked')
        {
          const response = await dislikeComment(idVotecmt)
          console.log(response)
          setIdVotecmt(null)
          setLikes(likes - 1);
          setAction('disliked');       
        }
        else if(action === 'disliked')
        {
          const response = await likeComment(props.id)
          console.log(response)
          const {data} = response
          setIdVotecmt(data.id)
          setLikes(likes + 1);
          setAction('liked');       
        }
    };
    
    
      const actions = [
        <Tooltip  key="comment-basic-like" title={action === 'liked' ? "Dislike" : 'Like'}>
          <span className= "pb-2" onClick={handleLDL}>
            <span>
              {createElement(action === 'liked' ? HeartFilled : HeartOutlined)}
            </span>
            <span className="px-2" >{likes}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" className = "mx-2">Reply to</span>,
      ];

      return (
        <Comment
          actions={actions}
          {...props}
        />
      );
}


const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <EachComment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default class AllComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments:  this.props.comment,
      submitting: false,
      value: '',
      idPost: this.props.idPost,
    } 
  };

  componentDidMount(){
    const cmt = this.props.comment 
    const lst = []
    for( var x of this.props.comment){
      var {user} = x
      var eachcmt = {
          author: user.first_name + " " + user.last_name,
          avatar: user.avatar,
          content: <p>{x.content}</p>,
          datetime: x.updated_at,
          id: x.id,
          votes: x.votes,
          like: x.like
      }
      lst.push(eachcmt)
    }
    console.log(lst)
    this.setState({
      comments: lst
    })
  }

  handleSubmit = async () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    const response = await apiComment(this.state.idPost, this.state.value ) 
    console.log(response)
    const {data} = response
    const {user} = data
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: user.first_name + " " + user.last_name,
            avatar: user.avatar,
            content: <p>{data.content}</p>,
            datetime: moment().fromNow(),
            id: data.id,
            votes: data.votes,
            like: data.like
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        
        <Comment
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
                />
            }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </>
    );
  }
}

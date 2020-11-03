import { Comment, Avatar, Tooltip, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React,  {createElement, useState} from 'react'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
const { TextArea } = Input;

const EachComment = (props) =>{
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
      };
    
      const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
      };
    
      const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={dislike}>
            {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
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
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
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

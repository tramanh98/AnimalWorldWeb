import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
import '../style.css';
import If from '../../services/if'
// import { NavAvatar } from '../Avatar';
import { Badge, Popover, Button, Avatar } from 'antd';
import { BellFilled, SearchOutlined } from '@ant-design/icons';
// import { AuthContext, useAuthContext } from "../../others/contexts/auth.context";
// import { logout } from '../../api/api'


const ThongBao = () => {
    const text = <span>Thông báo</span>;
    const content = (
        <div>
            <p>Không có thông báo nào</p>

        </div>
    );
    return (
        <Popover placement="bottom" title={text} content={content} trigger="click">
            <Button type="link">
                <Badge count={5} dot>
                    <BellFilled style={{ fontSize: '25px', color: '#212529', padding: '0' }} />
                </Badge>
            </Button>
        </Popover>
    );
};


const Profile = (props) => {
    // const { onLogout } = useAuthContext();
    // const history = useHistory();
    // const logoutAPI = async () =>{
    //     const res = await logout()
    //     console.log(res)
    // }
    const qltk = () =>{
        props.history.push('/manage/account')
    }
    const qlbd = () =>{
        props.history.push('/manage/posts')
    }

    const content = (
        <div>
            <Button type="link" onClick={() => qltk()}>
                Quản lý tài khoản
            </Button>
            
            <br />
            <Button type="link" onClick={() => qlbd()}>
                Quản lý bài đăng
            </Button>
            <br />
            <Button type="link">
                Thoát
            </Button>
        </div>
    );
    return (
        <Popover placement="bottom" content={content} trigger="click">
            <Button type="link">
                <Avatar style={{ backgroundColor: "#f56a00", verticalAlign: 'middle' }} size="large">
                    U
                </Avatar>
            </Button>
        </Popover>
    );
};

class NavHead extends Component  {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.getPermission = this.getPermission.bind(this);
        this.home = this.home.bind(this);
      };
    // static contextType = AuthContext;

    handlePost = () => {
        this.props.history.push('/posting');
        // const { user } = this.context;
        // console.log(user)
        // if(user){
        //     console.log(this.props.history)
        //     this.props.history.push('/posting');
        // }
        // else {
        //     this.setState({visible: true})
        // }
    }

    home = () =>{
        this.props.history.push('/home');
    }
    getPermission = () =>{
        this.props.history.push('/permission');
    }
    render() {
        // const { user } = this.context;
        // const { visible } = this.state;

    return (
        <div className="container navhead">
            <div className="d-flex align-items-center">
                <div className="mr-auto p-2" style={{width: "300px"}}>
                    {/* <Link className="navbar-brand" to="/home" style={{width: "fit-content"}}>
                        <img src="../img/logo/logo2.png" style={{width: "60%"}}/>
                    </Link> */}
                    <button onClick={this.home} style={{width: "fit-content"}} type="button" className="btn">ANIMAL WORLD</button>
                </div>
                <div className="p-2">
                    <button onClick={this.handlePost} style={{width: "fit-content"}} type="button" className="btn btn-outline-dark">Đăng bài của bạn</button>
                </div>
                <div className="p-2">
                    {/* <button onClick={this.getPermission} style={{width: "fit-content"}} type="button" className="btn">Đăng nhập</button> */}
                    <ThongBao/>
                    {/* <If condition={!user} component={Loginus} /> */}
                    {/* <If condition={user} component={ThongBao} /> */}
                </div>
                <div className="p-2">
                    {/* <button onClick={this.getPermission} style={{width: "fit-content"}} type="button" className="btn">Đăng ký</button> */}
                    <Profile {...this.props}/>
                    {/* <If condition={!user} component={Registerus} /> */}
                    {/* <If condition={user} component={Profile} /> */}
                </div>
            </div>

        </div>

    );
    }

}

export default withRouter(NavHead);



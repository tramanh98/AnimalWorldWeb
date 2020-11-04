import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
// import '../style.css';
import If from '../../services/if'
// import { NavAvatar } from '../Avatar';
import { Badge, Popover, Button, Avatar } from 'antd';
import { BellFilled, SearchOutlined, EditFilled } from '@ant-design/icons';
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
        <Popover placement="bottom" title={text} content={content} trigger="click" >
            <Button type="link">
                <Badge count={5} dot>
                    <BellFilled style={{ fontSize: '25px', color: '#212529', margin: '0 5px' }} />
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
            <a>
            <Avatar style={{ backgroundColor: "#f56a00", verticalAlign: 'middle' }} size="large">
                U
            </Avatar>
            </a>
        </Popover>
    );
};

class NavHead extends Component  {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.getPermission = this.getPermission.bind(this);
        this.home = this.home.bind(this);
        this.routeToLogin = this.routeToLogin.bind(this);
        this.routeToRegister = this.routeToRegister.bind(this)
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
    routeToLogin = () =>{
        this.props.history.push('/login');
    }
    routeToRegister = () =>{
        this.props.history.push('/register')
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
        <div className="wrap-navbar-head">
            <div className="nav-head">
                <div className="d-flex align-items-center">
                    <div className="mr-auto p-2 flex-grow-1" style={{width: "300px"}}>
                        <a onClick={this.home} >
                            <img src="../images/logo1.png" style={{width: "20%", backgroundColor: "red"}} />
                        </a>
                        {/* <Link className="navbar-brand" to="/home" style={{width: "fit-content"}}>
                            <img src="../img/logo/logo2.png" style={{width: "60%"}}/>
                        </Link> */}
                        {/* <button onClick={this.home} style={{width: "fit-content"}} type="button" className="btn">ANIMAL WORLD</button> */}
                    </div>
                    <div className="p-2">
                        <a onClick={this.handlePost}>
                            <EditFilled style={{ fontSize: '27px', color: '#212529', margin: '0 5px' }}/>
                        </a>
                        {/* <button onClick={this.handlePost} style={{width: "fit-content"}} type="button" className="btn btn-outline-dark">Đăng bài của bạn</button> */}
                    </div>
                    <div className="p-2" >
                        {/* <button onClick={this.getPermission} style={{width: "fit-content"}} type="button" className="btn">Đăng nhập</button> */}
                        {/* <ThongBao/> */}
                        <Button type="link" className="btnlgin" onClick = {this.routeToLogin}>ĐĂNG NHẬP</Button>
                        {/* <If condition={!user} component={Loginus} /> */}
                        {/* <If condition={user} component={ThongBao} /> */}
                    </div>
                    <div className="p-2">
                        {/* <button onClick={this.getPermission} style={{width: "fit-content"}} type="button" className="btn">Đăng ký</button> */}
                        {/* <Profile {...this.props}/> */}
                        <Button type="link" className="btnlgin" onClick = {this.routeToRegister} >ĐĂNG KÍ</Button>
                        {/* <If condition={!user} component={Registerus} /> */}
                        {/* <If condition={user} component={Profile} /> */}
                    </div>
                </div>
            </div>

        </div>

    );
    }

}

export default withRouter(NavHead);



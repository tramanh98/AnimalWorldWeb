import React, { Component, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
// import '../style.css';
import If from '../../services/if'
// import { NavAvatar } from '../Avatar';
import { Badge, Popover, Button, Avatar } from 'antd';
import { BellFilled, UserOutlined, EditTwoTone } from '@ant-design/icons';
import { logout } from '../../api/api'
import { connect, useDispatch, useSelector } from "react-redux";

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

const loginButton = (props) =>{
    const routeToLogin = () =>{
        props.history.push('/login');
    }
    return(
        <Button type="link" className="btnlgin" onClick = {routeToLogin}>ĐĂNG NHẬP</Button>
    );
}

const registerButton = (props) =>{
    const routeToRegister = () =>{
        props.history.push('/register')
    }
    return(

        <Button type="link" className="btnlgin" onClick = {routeToRegister} >ĐĂNG KÍ</Button>
    );
}
const Profile = (props) => {
    // const { onLogout } = useAuthContext();
    const user = useSelector((state) => state.currentUser);
    const [visible, setVisible] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch()
    const logoutAPI = async () =>{
        const res = await logout()
        console.log(res)
        localStorage.removeItem("typetoken")
        localStorage.removeItem("token")
        // do something to redux
        dispatch({
            type: 'LOGOUT'
        })
        setVisible(false)
        history.push('/home')
    }
    const qltk = () =>{
        setVisible(false)
        props.history.push(`/manage/account/${user.idUser}`)
    }
    const qlbd = () =>{
        setVisible(false)
        props.history.push('/setting')
    }

    const content = (
        <div>
            <Button type="link" onClick={() => qltk()}>
                Your blogs
            </Button>
            
            <br />
            <Button type="link" onClick={() => qlbd()}>
                Manage account
            </Button>
            <br />
            <Button type="link" onClick={logoutAPI}>
                Logout
            </Button>
        </div>
    );
    return (
        <Popover placement="bottom" content={content} trigger="click" 
        visible={visible}
        onVisibleChange={visible => setVisible(visible)}
        >
            <a>
                {
                    props.user.avatar ? 
                    <Avatar
                         src={props.user.avatar}
                    /> :
                    <Avatar style={{ verticalAlign: 'middle' }} icon={<UserOutlined />} size="large"/>

                }
            </a>
        </Popover>
    );
};

class NavHead extends Component  {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.home = this.home.bind(this);
      };

    handlePost = () => {
        if(this.props.user){
            console.log(this.props.history)
            this.props.history.push('/posting');
        }
        else {
            this.props.history.push('/login');
        }
    }
    home = () =>{
        this.props.history.push('/home');
    }
    render() {

    return (
        <div className="wrap-navbar-head">
            <div className="nav-head">
                <div className="d-flex align-items-center">
                    <div className="mr-auto p-2 flex-grow-1" style={{width: "300px"}}>
                        <a onClick={this.home} >
                            <img src="../images/logo1.png" style={{width: "20%", backgroundColor: "red"}} />
                        </a>
                    </div>
                    <div className="p-2">
                        <a onClick={this.handlePost}>
                            <EditTwoTone style={{ fontSize: '27px', color: '#212529', margin: '0 5px' }}/>
                        </a>
                    </div>
                    <div className="p-2" >
                        <If condition={!this.props.user} props={this.props} component={loginButton} />
                        <If condition={this.props.user} component={ThongBao} />
                    </div>
                    <div className="p-2">
                        <If condition={!this.props.user} props={this.props} component={registerButton} />
                        <If condition={this.props.user} props={this.props} component={Profile} />
                    </div>
                </div>
            </div>

        </div>

    );
    }

}
const mapStateToProps = (state) => ({
    user: state.currentUser
});

export default connect(mapStateToProps)(withRouter(NavHead));


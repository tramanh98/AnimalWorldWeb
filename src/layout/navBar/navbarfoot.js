import { Drawer} from 'antd';
import { Menu, Row, Col} from 'antd';
import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './style.css'
import { Badge, Popover, Button, Avatar } from 'antd';
import { BellFilled, UserOutlined, EditTwoTone } from '@ant-design/icons';
import { logout } from '../../api/api'
import { connect, useDispatch, useSelector } from "react-redux";
import If from '../../services/if'
import classes from '../../data/classes.json'
import featureFilter from '../../data/featureFilter.json'
const { SubMenu } = Menu;

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
            props.history.push('/login')
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

class NavFoot extends React.Component {
  state = { 
    visible: false, 
    classNm: 'transcl sticky-top navbar navbar-expand-sm ',
    stylepd: "10px 10px",
    stylefz: "35px",
    positionst: 'static',
    topst: '0',
    widthst: '85%',
    mnTop: '132px',
    border_navfoot: "1px solid black",
    box_shadow: "none"
};
//   static contextType = AuthContext;
    componentDidMount() {
        if(this.props.home){
            document.addEventListener("scroll", () => {
                document.scrollingElement.scrollTop > 30 ? 
                    this.setState({
                        stylepd: "5px 10px",
                        stylefz: "25px",
                        positionst: "fixed",
                        topst: '0',
                        widthst: '100%',
                        mnTop: '40px',
                        border_navfoot: "none",
                        box_shadow: "0px 2px 4px 0px rgba(0,0,0,0.2)"

                    })
                : 
                    this.setState({
                        stylepd: "10px 10px",
                        stylefz: "35px",
                        positionst: "static",
                        topst: "auto",
                        widthst: '85%',
                        mnTop: '132px',
                        border_navfoot: "1px solid black",
                        box_shadow: "none"
                    })
                
            });
        }
        else this.setState({ classNm: "navbar navbar-expand-sm sticky-top "})
    }

     showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    handleClick = () =>{
        this.setState({
            visible: false,
            });
    }

    onClickLocal = (e) =>{
        console.log(e.target.value)
    }
    classAnimalSearch = (e, index) =>{
        console.log(index)
        this.props.history.push(`/result?idClass=${index}`);
    }
    animalSearch = (e, ft) =>{
        this.props.history.push(`/result?sa=${ft}`);
    }
    home = () =>{
        this.props.history.push('/home');
    }
    topPost = () =>{
        this.props.history.push(`/result?q=top`);
    }
    followingPost = () =>{
        this.props.history.push(`/result?q=following`);
    }
    render() {
    const { user } = this.context;
    return (
        
        <nav className={this.state.classNm}  >
            <div className="nav-mobile">
                <div onClick={this.showDrawer} className="nav-icon-mobile" >
                    <div className="btn-menu-mobile"></div>
                    <div className="btn-menu-mobile"></div>
                    <div className="btn-menu-mobile"></div>
                </div>
                <div style={{width: "100px"}}>
                    <Link to="/home" style={{width: "fit-content"}}>
                    <img src="../images/logo.png" style={{width: "40%"}}/>
                    </Link>
                </div>
                    
            </div>

            <Drawer
            title="ANIMAlWORLD"
            placement="left"
            onClose={this.onClose}
            visible={this.state.visible}
            getContainer={false}
            bodyStyle={{ padding: 0 }}
            width={300}
            >
                
                <div className="my-account-mobile" onClick={this.handleClick}>
                <If condition={!this.props.user} props={this.props} component={loginButton}  props={{
                        visible: false}
                        }/>
                <If condition={this.props.user} component={ThongBao} />
                <If condition={!this.props.user} props={this.props}  component={registerButton} />
                <If condition={this.props.user} props={this.props} component={Profile} />
                <div className="btnlgin">
                <Link to="/posting" style={{width: "fit-content"}}>
                <EditTwoTone style={{ fontSize: '27px', color: '#212529', margin: '0 5px 0 20px' }}/>
                    </Link>
            </div>
                </div>
                <hr style={{width: "100%"}}></hr>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 300, margin: 0 }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                >
                    <Menu.Item key="1"><Link to="/home">Trang chủ</Link></Menu.Item>
                    <SubMenu key="sub1" title="TÌM HIỂU">
                    {
                        featureFilter.map((obj, index) => (
                            index != 0 ? 
                            <a onClick={(e) => this.animalSearch(e, obj.feature)} className= "nav-foot-item">{obj.name}</a> 
                            : ''
                        ))
                    }
                    </SubMenu>
                    <SubMenu key="sub2" title="LỚP">
                    {
                        classes.map((obj, index) => (
                            index != 0 ? 
                            <Menu.Item>
                                <a onClick={(e) => this.classAnimalSearch(e, index)} className= "nav-foot-item">{obj.name}</a> 
                            </Menu.Item>
                            : ''

                        ))
                    }
                    </SubMenu>
                    <Menu.Item><a onClick={this.topPost} className= "nav-foot-item">TOP BÀI ĐĂNG</a></Menu.Item>
                    <Menu.Item><a onClick={this.followingPost} className= "nav-foot-item">ĐANG THEO DÕI</a></Menu.Item>
                </Menu>
            </Drawer>




            <div className="navother" id="wrap-navbar">
                <div id="navbar-foot" 
                style={{
                    padding: this.state.stylepd,
                    position: this.state.positionst,
                    top: this.state.topst,
                    width: this.state.widthst,
                    borderBottom: this.state.border_navfoot,
                    borderTop: this.state.border_navfoot,
                    boxShadow: this.state.box_shadow
                }} >
                    
                    <a>
                        <i className="fa fa-fw fa-home" style={{color: "black"}}></i>
                    </a>
                    <div className="nav-foot-dropdown" >
                        <a className="dropbtn">
                            TÌM HIỂU
                        </a>
                        <div className="dropdown-menu-nav-foot" style={{top: this.state.mnTop}}>
                        {
                            featureFilter.map((obj, index) => (
                                index !== 0 ? 
                                <>
                                    <a onClick={(e) => this.animalSearch(e, obj.feature)} className= "nav-foot-item">{obj.name}</a> 
                                    <br/>
                                </>
                                : ''
                            ))
                        }
                        </div>
                    </div>
                    <div className="nav-foot-dropdown">
                        <a className="dropbtn">
                            LỚP ĐỘNG VẬT
                        </a>
                        <div className="dropdown-menu-nav-foot" style={{top: this.state.mnTop, textTransform: 'uppercase'}}>
                            {
                                classes.map((obj, index) => (
                                    index !== 0 ? 
                                    <>
                                        <a onClick={(e) => this.classAnimalSearch(e, index)} className= "nav-foot-item">{obj.name}</a> 
                                        <br/>
                                    </>
                                    : ''

                                ))
                            }
                        </div>
                    </div>
                    <a onClick={this.topPost} >TOP BÀI ĐĂNG</a>
                    <a onClick={this.followingPost}>ĐANG THEO DÕI</a>
                </div>
            </div>
        
      </nav>
    );
  }
}

export default withRouter(NavFoot);
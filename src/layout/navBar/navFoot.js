// import { Drawer} from 'antd';
// import { Menu, Row, Col} from 'antd';
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import '../style.css'

// import If from '../../services/if'
// import { AuthContext, useAuthContext } from "../../others/contexts/auth.context";
// const { SubMenu } = Menu;

// const navLogin = props => (
//     <Login {...props} />
// );
// const navRegister = () => (
//     <Register />
// );

// const Profile = () => {
//     const { onLogout } = useAuthContext();

//     const logoutAPI = async () =>{
//         const res = await logout()
//         console.log(res)
//     }
//     const handleClick = () => {
//         logoutAPI();
//         onLogout();
//     };

//     return (
//         <Aux>
//             <h6>Tài khoản của tôi</h6>
//             <div>
//                     <Link to="/profile/index" className="subnav_link">
//                         <Row gutter={[8,8]}>
//                             <Col span={2}><i className="far fa-user"/></Col>
//                             <Col span={21}>Quản lý tài khoản</Col>
//                         </Row>
//                     </Link>
//                     <Link to="/profile/edit" className="subnav_link">
//                         <Row gutter={[8,8]}>
//                             <Col span={2}><i className="fas fa-user-edit"/></Col>
//                             <Col span={21}>Chỉnh sửa tài khoản</Col>
//                         </Row>
//                     </Link>
//                     <Link to="/posting" className="subnav_link">
//                         <Row gutter={[8,8]}>
//                             <Col span={2}><i className="far fa-paper-plane"/></Col>
//                             <Col span={21}>Đăng phòng của bạn</Col>
//                         </Row>
//                     </Link>
//                     <Link className="subnav_link" onClick={() => handleClick()}>
//                         <Row gutter={[8,8]}>
//                             <Col span={2}><i className="fas fa-sign-out-alt"/></Col>
//                             <Col span={21}>Thoát</Col>
//                         </Row>
//                     </Link>
//             </div>
//         </Aux>

//     );
// };
class NavFoot extends React.Component {
  state = { 
    visible: false, 
    classNm: 'transcl sticky-top navbar navbar-expand-sm ',
    classNavf: 'top-style'
};
//   static contextType = AuthContext;
    componentDidMount() {
        if(this.props.home){
            document.addEventListener("scroll", () => {
                document.scrollingElement.scrollTop > 30 ? 
                this.setState({ 
                    classNm: "navbar navbar-expand-sm sticky-top ",
                    classNavf: 'scroll-style'

            }) : 
                this.setState({ 
                    classNm: "transcl sticky-top navbar navbar-expand-sm ",
                    classNavf: 'top-style'
                });
            });
        }
        else this.setState({ classNm: "navbar navbar-expand-sm sticky-top "})
    }

    // showDrawer = () => {
    //     this.setState({
    //     visible: true,
    //     });
    // };

    // onClose = () => {
    //     this.setState({
    //     visible: false,
    //     });
    // };

    // handleClick = () =>{
    //     this.setState({
    //         visible: false,
    //         });

    // }

    // onClickLocal = (e) =>{
    //     console.log(e.target.value)
    // }

    lastestPost = () =>{
        this.props.history.push('/result')
    }
    home = () =>{
        this.props.history.push('/home');
    }

    render() {
    // const { user } = this.context;
    return (
            <nav className={this.state.classNm}  >
                {/* <div className="nav-mobile">
                    <div onClick={this.showDrawer} className="nav-icon-mobile" >
                        <div className="btn-menu-mobile"></div>
                        <div className="btn-menu-mobile"></div>
                        <div className="btn-menu-mobile"></div>
                    </div>
                    <div style={{width: "200px"}}>
                        <Link to="/home" style={{width: "fit-content"}}>
                            <img src="../img/logo/logo2.png" style={{width: "40%"}}/>
                        </Link>
                    </div>
                </div> */}

                    {/* <Drawer
                    title="2HOME"
                    placement="left"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    bodyStyle={{ padding: 0 }}
                    width={300}
                    >
                        <div className="my-account-mobile">
                            <If condition={!user} component={navLogin}  props={{
                                visible: false}
                                }/>
                            <If condition={user} component={Profile}/>
                            <If condition={!user} component={navRegister} />
                        </div>
                        <hr style={{width: "100%"}}></hr>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 300, margin: 0 }}
                            defaultSelectedKeys={['1']}
                            mode="inline"
                        >
                            <Menu.Item key="1"><Link to="/home">Trang chủ</Link></Menu.Item>
                            <SubMenu key="sub1" title="Khu vực">
                            {
                                districts.map((dst, index) => (
                                    index!=0?
                                    <Menu.Item key={`dst` + `${index}`}> 
                                        <Link to={`/results?dst=${dst.type}&ward=0&type=0&prc=0&area=0`}>{dst.name}</Link>
                                    </Menu.Item>
                                    :''
                                    
                                ))
                            }
                            </SubMenu>
                            <SubMenu key="sub2" title="Loại phòng">
                            {
                                type.map((obj, index) => (
                                    index!=0?
                                    <Menu.Item key={`type`+`${index}`}>
                                        <Link to={`/results?dst=0&ward=0&type=${obj.type}&prc=0&area=0`}>{obj.name}</Link>
                                    </Menu.Item>:''
                                ))
                            }
                            </SubMenu>
                            <SubMenu key="sub3" title="Mức giá">
                            {
                                price.map((obj, index) => (
                                    index!=0?
                                    <Menu.Item key={`price`+`${index}`}>
                                        <Link to={`/results?dst=0&ward=0&type=0&prc=${index}&area=0`}>{obj}</Link>
                                    </Menu.Item>:''
                                ))
                            }
                            </SubMenu>
                            <SubMenu key="sub4" title="Diện tích">
                            {
                                dientich.map((obj, index) => (
                                    index!=0?
                                    <Menu.Item key={`area`+`${index}`}>
                                        <Link to={`/results?dst=0&ward=0&type=0&prc=0&area=${index}`}>{obj}</Link>
                                    </Menu.Item>:''
                                ))
                            }
                            </SubMenu>
                            <Menu.Item key="2">
                                <Link to={`/results?q=latest`}>Tin mới nhất</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <a href="https://phongtro123.com/huong-dan-su-dung"> Hướng dẫn </a>
                            </Menu.Item>
                        </Menu>
                    </Drawer> */}
                <div className="container">
                    <div className = {this.state.classNavf}>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link font-navbar" onClick = {this.home}>
                                    <i className="fa fa-fw fa-home"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link font-navbar" href="#" id="navbardrop" data-toggle="dropdown">
                                    TÌM HIỂU
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick = {this.lastestPost}>ĐỘNG VẬT HOANG DÃ</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>ĐỘNG VẬT QUÝ HIẾM</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>ĐỘNG VẬT NGUY HIỂM</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>NƯỚC - ĐẠI DƯƠNG</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>TRÊN CẠN</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>THÚ NUÔI TRONG NHÀ</a>             
                                </div>
                            </li> 

                            <li className="nav-item dropdown">
                                <a className="nav-link font-navbar" href="#" id="navbardrop" data-toggle="dropdown">
                                    LỚP ĐỘNG VẬT
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick = {this.lastestPost}>BÒ SÁT</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>CÁ</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>CHIM</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>CÔN TRÙNG</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>CÓ VÚ</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>CHÂN THÙY</a>
                                    <a className="dropdown-item" onClick = {this.lastestPost}>GIÁP SÁT</a>
                                </div>
                            </li> 

                            <li className="nav-item">
                                <a className="nav-link font-navbar" onClick = {this.lastestPost}>
                                    TOP BÀI ĐĂNG
                                </a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link font-navbar" onClick = {this.lastestPost}>
                                    ĐANG THEO DÕI
                                </a>
                            </li>  
                        </ul> 
                    </div>
                    </div>
                </div>
 
            </nav>
      
    );
  }
}

export default withRouter(NavFoot);
// import { Drawer} from 'antd';
// import { Menu, Row, Col} from 'antd';
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './style.css'

// import If from '../../services/if'
// import { AuthContext, useAuthContext } from "../../others/contexts/auth.context";
// const { SubMenu } = Menu;


class NavFoot extends React.Component {
  state = { 
    visible: false, 
    classNm: 'transcl sticky-top navbar navbar-expand-sm ',
    stylepd: "15px 10px",
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



    render() {
    // const { user } = this.context;
    return (
        <div id="wrap-navbar">
            <div id="navbar-foot" 
            style={{padding: this.state.stylepd,
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
                        <a className= "nav-foot-item">ĐỘNG VẬT HOANG DÃ</a> <br/>
                        <a className= "nav-foot-item">ĐỘNG VẬT QUÝ HIẾM</a> <br/>
                        <a className= "nav-foot-item">ĐỘNG VẬT NGUY HIỂM</a> <br/>
                        <a className= "nav-foot-item">NƯỚC - ĐẠI DƯƠNG</a>        
                    </div>
                </div>
                <div className="nav-foot-dropdown">
                    <a className="dropbtn">
                        LỚP ĐỘNG VẬT
                    </a>
                    <div className="dropdown-menu-nav-foot" style={{top: this.state.mnTop}}>
                        <a className= "nav-foot-item" >BÒ SÁT</a><br/>
                        <a className= "nav-foot-item" >BÒ SÁT</a><br/> 
                        <a className= "nav-foot-item" >BÒ SÁT</a><br/> 
                        <a className= "nav-foot-item" >BÒ SÁT</a><br/>  
                        <a className= "nav-foot-item" >BÒ SÁT</a><br/>  
                    </div>
                </div>
                <a href="#contact">TOP BÀI ĐĂNG</a>
                <a href="#contact">ĐANG THEO DÕI</a>
            </div>
        </div>
        
      
    );
  }
}

export default withRouter(NavFoot);
import React, { useEffect, useState, useRef } from 'react';
import { Tabs, Typography } from 'antd';
import '../style.css'
import { Form, Input, Button, Checkbox, Divider, message, Spin } from 'antd';
import { createFromIconfontCN, GoogleOutlined } from '@ant-design/icons';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Login_Fb, Login_GG, getProfile, updateAvatar, Login_sv} from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { TabPane } = Tabs;
const { Title } = Typography;




export const LoginForm = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();

    const dataToRedux = (data) =>{
        const storetoRedux = {
            isLogin: true,
            idUser: data.id,
            avatar: data.avatar,
            username: data.username, 
            fname: data.first_name,
            lname: data.last_name,
            email: data.email,
        }
        dispatch({
            type: 'LOGIN_USER',
            payload: storetoRedux
        })
    }
    const lgFacebook = async (response) =>{
        console.log(response)
        setLoading(true)
        try{
            const res = await Login_Fb(response.accessToken)  // chuyển đổi token 
            const {data} = res
            localStorage.setItem("token",data.access_token)
            localStorage.setItem("typetoken", data.token_type)
            // lưu riêng avatar của user 
            const avt = await updateAvatar(response.picture.data.url )
            const profiledt = await getProfile(`${data.token_type} ${data.access_token}`)
            // lưu token và loại token xuống local storage 
            if(profiledt.status === 200){
                dataToRedux(profiledt.data)
                history.push("/home");
            }
            else{
                message.error(profiledt.error)
            }
            setLoading(false)
        }
        catch (error){
            message.error(error)
        }
        
    }
    const lgGoogle = async (response) =>{
        console.log(response)
        setLoading(true)
        const res = await Login_GG(response.tokenObj.access_token)
        const {data} = res
        localStorage.setItem("token",data.access_token)
        localStorage.setItem("typetoken", data.token_type)
        const avt = await updateAvatar(response.profileObj.imageUrl )
        const profiledt = await getProfile(`${data.token_type} ${data.access_token}`)
        if(profiledt.status === 200){
            dataToRedux(profiledt.data)
            history.push("/home");
        }
        else{
            message.error(profiledt.error)
        }
        setLoading(false)
    }


    const onFinish = async (values) => {
        console.log('Success:', values);
        setLoading(true)
        const lg = await Login_sv(values.email, values.password)
        console.log(lg)
        if(lg.status === 200){
            const profiledt = await getProfile(`Token ${lg.data.key}`)
            localStorage.setItem("token",lg.data.key)
            localStorage.setItem("typetoken", 'Token')
    
            if(profiledt.status === 200){
                dataToRedux(profiledt.data)
                history.push("/home");
            }
            else{
                message.error(profiledt.error)
            }
        } else
        {
            message.error(lg.error)
        }
        setLoading(false)
        
        

    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    return(
        loading ? <Spin tip="Login..." size="large" style={{textAlign: 'center'}}></Spin> :
        <div className ="lg-rgt-form py-5 px-4" style={{ maxWidth: '500px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} >Login</Title>
            </div>
            <div>
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style = {{width: '100%'}}>
                        Login
                        </Button>
                    </Form.Item>
                    <Divider>Or login with</Divider>
                    <div className = "d-flex justify-content-between">
                        <FacebookLogin
                            appId="2595169840730749"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={lgFacebook} 
                            cssClass="my-facebook-button-class"
                            textButton="Facebook"
                            icon={<i className="fab fa-facebook-f mr-2"></i>}
                        />
                        <GoogleLogin
                            clientId="311307780250-ns2lg1103qoblsnbmklpr3f8c6d1v53e.apps.googleusercontent.com"
                            onSuccess={lgGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="google-button"
                            render={renderProps => (
                                <Button style = {{width: '45%'}} onClick={renderProps.onClick}><GoogleOutlined />Google</Button>
                            )}
                        >
                        </GoogleLogin>
                    </div>
                </Form>
            </div>
            
        </div>

    );
}

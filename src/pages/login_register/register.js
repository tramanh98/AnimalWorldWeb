import { Tabs, Typography } from 'antd';
import '../style.css'
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import {Register_sv, getProfile} from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import {useState, useEffect} from "react"
const { TabPane } = Tabs;
const { Title } = Typography;
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}', 
    },
  };
export const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();
    const onFinish = async (values) => {
        setLoading(true)
        const rgt = await Register_sv(values)
        console.log(rgt)
        if(rgt.status === 201){
            const profiledt = await getProfile(`Token ${rgt.data.key}`)
            if(profiledt.status === 200){
                localStorage.setItem("token",rgt.data.key)
                localStorage.setItem("typetoken", 'Token')
                const {data} = profiledt
                const storetoRedux = {
                    isLogin: true,
                    avatar: data.avatar,
                    username: data.username, 
                    fname: data.first_name,
                    lname: data.last_name,
                    email: data.email,
                }
                // do something to redux
                dispatch({
                    type: 'LOGIN_USER',
                    payload: storetoRedux
                })
                history.push("/home");
            }
            else{
                message.error(profiledt.error)
            }
            
        }
        else{
            message.error(rgt.error)
        }
        setLoading(false)
        
      };
    
    return(
        loading ? <Spin tip="Login..." size="large" style={{textAlign: 'center'}}></Spin> :
        <div className ="lg-rgt-form py-5 px-4" style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} >Register</Title>
            </div>
            <div>
                <Form layout="vertical" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name='fname' label="First name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='lname' label="Last name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='usrname' label="User name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password1"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="password2"
                        label="Confirm Password"
                        dependencies={['password1']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('password1') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                        },
                        ]}
                    >
                        <Checkbox>
                        I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" style={{width: "100%"}}>
                        Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            
        </div>

    );
}

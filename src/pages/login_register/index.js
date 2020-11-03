import { Tabs } from 'antd';
import {LoginForm} from './login'
import {RegisterForm} from './register'
import '../style.css'
const { TabPane } = Tabs;

export const Permission = () => {
    return(
        <div className = "bg-form">
            <img src="../images/login2.jpg" alt="Notebook" style={{width: "100%"}}/>
            <div className = "form-lg-rgt">
                <Tabs type="card">
                    <TabPane tab="Đăng nhập" key="1">
                        <LoginForm/>
                    </TabPane>
                    <TabPane tab="Đăng ký" key="2">
                        <RegisterForm/>
                    </TabPane>
                </Tabs>
            </div>
            
        </div>

    );
}

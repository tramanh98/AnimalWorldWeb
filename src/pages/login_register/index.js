import { Tabs } from 'antd';
import {LoginForm} from './login'
import {RegisterForm} from './register'
const { TabPane } = Tabs;

export const Permission = () => {
    return(
        <Tabs type="card">
            <TabPane tab="Đăng nhập" key="1">
                <LoginForm/>
            </TabPane>
            <TabPane tab="Đăng ký" key="2">
                <RegisterForm/>
            </TabPane>
        </Tabs>
    );
}

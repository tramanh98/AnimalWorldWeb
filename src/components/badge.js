import { Avatar } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import './style.css'
export const NameTag = () =>{
    return(
        <div className= "wrap-nametag d-inline-flex" style={{backgroundColor: "yellow"}}>
            <div className ="p-2 mx-3" style={{backgroundColor: "green"}}>
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div className ="p-2 mx-3" style={{backgroundColor: "red"}}>
                <div>Anh Duong</div>
                <div style={{backgroundColor: "green"}}>
                    <EditOutlined style={{ fontSize: '18px', backgroundColor: "yellow" }}/> <span>81</span>
                </div>
            </div>
        </div>
    );
}
import React, {Component, useState} from 'react';
import { Form, Input, Button, DatePicker, Avatar, Checkbox } from 'antd';
import './style.css';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
export const UpdateInforPersonal = () =>{
    const [gender, setGender] = useState('male');
    const handleChangeGender = (event) =>{
        setGender(event.target.value)
    }
    return(
        <div className="edit-personal-info" >
            <Form layout="vertical" >
                <Input.Group>
                    <Form.Item> 
                        <div className='d-flex justify-content-center' style={{width: "100%"}}>
                            <div style={{width: "fit-content"}} className="change-avatar">
                                <a>
                                    <Avatar size={120} icon={<UserOutlined />} />
                                    <button type="button" className="btn btn-sm btn-visible" style={{width: "100%", backgroundColor: '#42332528'}}>
                                        Change
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item label="Username" rules={[{ required: true  }]} >
                        <Input prefix="@phuongvii" disabled/>
                    </Form.Item>
                    <Form.Item name='name' label="Display Name" rules={[{ required: true, message: 'Name is empty!'  }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item name='birthday' label="Birthday" rules={[{ required: true, message: 'Choose birthday!'  }]} style={{ display: 'inline-block'  , margin: '0px 200px 0px 0px'}}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]} style={{ display: 'inline-block', padding:'3px'}} >
                        <select value={gender} onChange={handleChangeGender}
                            placeholder="Select a option and change input text above"
                            style={{  padding:'4px'}}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </Form.Item>
                    <Form.Item >
                        <div style={{ textAlign: 'right'}}>
                            <Button htmlType="submit" style={{ margin: '5px', }}>
                                Cancel 
                            </Button>
                            <Button htmlType="submit" style={{ margin: '5px', }}>
                                Update
                            </Button>
                        </div>
                    </Form.Item>
                </Input.Group>
            </Form> 
       </div>
    )
}
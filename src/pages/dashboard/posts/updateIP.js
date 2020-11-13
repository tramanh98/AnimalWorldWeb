import React, {Component, useState} from 'react';
import { Form, Input, Button, DatePicker, Avatar, Checkbox } from 'antd';
import './style.css';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const UpdateInforPersonal = () =>{
    // const [gender, setGender] = useState('male');
    const [phone, setPhone] = useState('');
    // const handleChangeGender = (event) =>{
    //     setGender(event.target.value)
    // }
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
                    <Form.Item name='fname' label="First name" style={{ display: 'inline-block', marginRight:'30px'}} rules={[{ required: true, message: 'First name is empty!'  }]} >
                        <Input style={{ width: '300px', }}/>
                    </Form.Item>
                    <Form.Item name='lname' label="Last name" style={{ display: 'inline-block'}} rules={[{ required: true, message: 'Last name is empty!'  }]} >
                        <Input style={{ width: '300px', }}/>
                    </Form.Item>
                    <Form.Item name='phone' label="Number Phone" style={{ display: 'inline-block', marginRight:'30px'}} rules={[{ required: true, message: 'Number phone is empty!'  }]} >
                        <PhoneInput
                            country={'us'}
                            value={phone}
                            onChange={phone => setPhone(phone)}
                            />
                    </Form.Item>
                    <Form.Item name='email'  label="Email" style={{ display: 'inline-block'}}  rules={[{ required: true , type: 'email', message: 'Email is invalid!'  }]}>
                        <Input style={{ width: '300px', }}/>
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
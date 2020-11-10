import React, {Component, useState} from 'react';
import { Form, Input, Button, DatePicker, Gender, Checkbox } from 'antd';
import './style.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
export const UpdateInforContact = () =>{
    const [phone, setPhone] = useState('');
    return(
        <div className="edit-contact-info">
            <Form layout="vertical" >
                <Input.Group>
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
                
                    <Form.Item label="Address" style={{ display: 'inline-block', marginRight:'30px'}}>
                        <Input style={{ width: '300px', }}/>
                    </Form.Item>
                    <Form.Item label="Company" style={{ display: 'inline-block'}} >
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
    );
}
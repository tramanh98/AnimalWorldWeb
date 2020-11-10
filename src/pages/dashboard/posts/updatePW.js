import React, {Component} from 'react';
import { Form, Input, Button, DatePicker, Gender, Checkbox } from 'antd';
import './style.css';
import 'react-phone-input-2/lib/style.css'
export const UpdatePassword = () =>{
    return(
        <div>
            <Form layout="vertical" >
                <Input.Group>
                    <Form.Item
                            name="passwordcurrent"
                            label="Current Password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input current your password!',
                            },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                    </Form.Item>
                    <Form.Item
                            name="password1"
                            label="New Password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input new your password!',
                            },
                            ]}
                            hasFeedback
                        >
                            <Input.Password  />
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
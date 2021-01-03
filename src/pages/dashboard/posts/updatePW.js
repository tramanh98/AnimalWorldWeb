import React, {Component} from 'react';
import { Form, Input, Button, Spin, message, notification  } from 'antd';
import './style.css';
import 'react-phone-input-2/lib/style.css'
import { changePassWord } from '../../../api/api'
export const UpdatePassword =  () =>{
    const onChangePass = async (event) =>{
        const res = await changePassWord(event)
        if(res.status === 200){
            message.success("Changed successfully")
            notification['success']({
                message: 'Changed successfully'
              });
            console.log(res)
        }
        else {
            message.error(res.error)
        }
    }
    return(
        <div>
            <Form layout="vertical" onFinish={onChangePass} >
                <Input.Group>
                    <Form.Item
                            name="oldpass"
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
                            name="pass1"
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
                        name="pass2"
                        label="Confirm Password"
                        dependencies={['pass1']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                            if (!value || getFieldValue('pass1') === value) {
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
                                Update
                            </Button>
                        </div>
                    </Form.Item>
                </Input.Group>
            </Form>
        </div>
    );
}
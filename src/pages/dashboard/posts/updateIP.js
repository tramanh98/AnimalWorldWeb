import React, {Component, useState, useRef, useEffect} from 'react';
import { Form, Input, Button, DatePicker, Avatar, Checkbox, Modal } from 'antd';
import './style.css';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CropperIMG from '../../../components/IMGcropper/cropper'
import {uploadImg, EditProfile, updateAvatar} from '../../../api/api'
import { useSelector, useDispatch } from 'react-redux';
export const UpdateInforPersonal = () =>{
    const user = useSelector((state) => state.currentUser);
    const dispatch = useDispatch()
    const [phone, setPhone] = useState('');
    const [visible, setVisible] = useState(false);
    const [avaImg, setAvaImg] = useState(null)
    const [urlImg, setUrlImg] = useState(user.avatar)
    const [files, setFiles] = useState(null)
    


    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);
    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = event => {
      console.log("image changed")
      console.log(event.target.files[0])
      setFiles(event.target.files[0])
      setAvaImg(event.target.files)
      setVisible(true)
    //   props.handleFile(fileUploaded);
    };
    const handleCancel = () =>{
        setVisible(false)
    }
    const handleCropImg = async (img) =>{
        const file = new File([img], `${files.name}`, { type: img.type })
        const response = await uploadImg(file)
        console.log(response.data.image)
        setUrlImg(`http://127.0.0.1:8000${response.data.image}`)
        setVisible(false)
    }
    const onSubmit = async (event) =>{
        console.log(event)
        const uploadAvatar = await updateAvatar(urlImg)
        const response = await EditProfile(event)
        console.log(response)
        const {data} = response

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
    return(
        <div className="edit-personal-info" >
            <Form layout="vertical" 
                initialValues={{
                    ['fname']: user.fname,
                    ['lname']: user.lname,
                    ['email']: user.email
                }}
                onFinish={onSubmit}
            >
                <Input.Group>
                    <Form.Item> 
                        <div className='d-flex justify-content-center' style={{width: "100%"}}>
                            <div style={{width: "fit-content"}} className="change-avatar">
                                <a>
                                    {
                                        urlImg ? <Avatar size={120} src = {urlImg}/> :
                                        <Avatar size={120} icon={<UserOutlined />} />
                                    }
                                    <button type="button" className="btn btn-sm btn-visible" onClick={handleClick}
                                    style={{width: "100%", backgroundColor: '#42332528'}}>
                                        Change
                                    </button>
                                    <input
                                        type="file"
                                        ref={hiddenFileInput}
                                        onChange={handleChange}
                                        style={{display: 'none'}} 
                                    />
                                    <Modal
                                    title="Avatar"
                                    visible={visible}
                                    footer={null}
                                    z-index={10000}
                                    onCancel={handleCancel}
                                    >
                                        <CropperIMG handleCancel = {handleCancel} avatar = {true}
                                        onHandleCrop = {handleCropImg} src = {avaImg}/>
                                    </Modal>
                                </a>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item label="Username" rules={[{ required: true  }]} >
                        <Input prefix={user.username} disabled/>
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
                        <Input style={{ width: '300px' }} disabled/>
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
    )
}
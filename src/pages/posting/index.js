import React, { Component, useEffect, useState, useRef } from 'react';
import { Typography, Button, Form, message, Select, Input, Modal, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import QuillEditor from '../../components/editor/QuillEditor';
import classes from '../../data/classes.json'
import CropperIMG from '../../components/IMGcropper/cropper'
import {uploadImg, postBlog} from '../../api/api'
const { Title } = Typography;
const { Option } = Select;

export const Posting = () => {
    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])
    const [avaImg, setAvaImg] = useState([])
    const [visible, setVisible] = useState(false);
    const [urlImg, setUrlImg] = useState('')

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


    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }
    const onFilesChange = (files) => {
        console.log("image uploaded")
        // setFiles(files)
    }
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
        const response = await postBlog(event, urlImg, content)
        console.log(response)
    }
        return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} > Đăng bài viết của bạn</Title>
            </div>

            <Form layout="vertical" onFinish={onSubmit} >
                <Input.Group>
                    <Form.Item name='title' label="Tiêu đề" rules={[{ required: true, message: 'Nhập tiêu đề !'}]} >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='typeClass'
                        label="Lớp động vật"
                        rules={[{ required: true, message: 'Chọn lớp động vật!' }]}
                    >
                        <Select placeholder="Lớp" >
                            {
                                classes.map((obj, index) => (
                                    index != 0 ?
                                        <Option key={index} value={index}>{obj.name}</Option> : ''
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item name="dangerous" label="Nguy hiểm" rules={[{ required: true}]}>
                        <Radio.Group>
                            <Radio value={false}>Không</Radio>
                            <Radio value={true}>Có</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="underwater" label="Sống dưới nước" rules={[{ required: true}]}>
                        <Radio.Group>
                            <Radio value={false}>Không</Radio>
                            <Radio value={true}>Có</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="terrestrial" label="Sống trên cạn" rules={[{ required: true}]}>
                        <Radio.Group>
                            <Radio value={false}>Không</Radio>
                            <Radio value={true}>Có</Radio>
                        </Radio.Group>
                    </Form.Item>
                    
                    <Form.Item name="pets" label="Thú nuôi" rules={[{ required: true}]}>
                        <Radio.Group>
                            <Radio value={false}>Không</Radio>
                            <Radio value={true}>Có</Radio>
                        </Radio.Group>
                    </Form.Item>
                    
                    <Form.Item name="wild" label="Hoang dã" rules={[{ required: true}]}>
                        <Radio.Group>
                            <Radio value={false}>Không</Radio>
                            <Radio value={true}>Có</Radio>
                        </Radio.Group>
                    </Form.Item>
                    
                    <Form.Item name="rare" label="Quý hiếm" rules={[{ required: true}]}>
                        <Radio.Group>
                            <Radio value={false}>Không</Radio>
                            <Radio value={true}>Có</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        className="avatar"
                        label="Ảnh đại diện bài viết"
                    >
                        <Button icon={<UploadOutlined />} onClick={handleClick}>Upload</Button>
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{display: 'none'}} 
                        />
                        <div className="my-2">
                            {urlImg ? <img src={urlImg} style={{width: '40%'}}/> : ''}
                        </div>
                        
                        <Modal
                        title="Image"
                        visible={visible}
                        footer={null}
                        z-index={10000}
                        onCancel={handleCancel}
                        >
                            <CropperIMG handleCancel = {handleCancel} avatar = {false}
                            onHandleCrop = {handleCropImg} src = {avaImg}/>

                        </Modal>
                    </Form.Item>
                    <Form.Item label="Nội dung">
                        <QuillEditor
                            placeholder={"Start Posting Something"}
                            onEditorChange={onEditorChange}
                            onFilesChange={onFilesChange}
                        />
                    </Form.Item>
                    

                    <Form.Item >
                        <div style={{ textAlign: 'center', margin: '2rem', }}>
                            <Button size="large" type="primary" htmlType="submit">
                                Đăng bài
                            </Button>
                        </div>
                    </Form.Item>
                </Input.Group>
                
            </Form>
        </div>
        );

}

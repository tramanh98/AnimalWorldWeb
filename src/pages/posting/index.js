import React, { Component, useEffect, useState } from 'react';
import { Typography, Button, Form, message, Select, Input, Modal } from 'antd';
import QuillEditor from '../../components/editor/QuillEditor';
import classes from '../../data/classes.json'
import species from '../../data/species.json'
import FrameImgCropper from '../../components/IMGcropper/index'
const { Title } = Typography;
const { Option } = Select;

export const Posting = () => {
    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])
    const [avaImg, setAvaImg] = useState([])
    const [IDclass, setIDclass] = useState(0);
    const [visible, setVisible] = useState(false);
    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }
    const handleChangeClass = value => {
        setIDclass(value)
    }
    const handleChangeSpecies = value =>{
        console.log(value)
    }
    const onFilesChange = (files) => {
        setFiles(files)
    }
    const handleCancel = () =>{
        setVisible(false)
    }
    const onImageChange = event => {
        console.log("image changed")
        setAvaImg(event.target.files)
        setVisible(true)
        // console.log(event.target.files);
        // var arrFile = [event.target.files]
        // var arrURL = [URL.createObjectURL(event.target.files[0])]
        // setUrlImg(UrlImg => [...UrlImg, arrURL])
        // setFileImg(FileImg => [...FileImg, arrFile ])
        // console.log(FileImg);
        // console.log(UrlImg);

    };
    const onSubmit = (event) =>{
        console.log(event)
    }
        return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <Title level={2} > Đăng bài viết của bạn</Title>
            </div>

            

            <Form layout="vertical" onSubmit={onSubmit} >
                
                <Input.Group>
                    <Form.Item name='title' label="Tiêu đề" rules={[{ required: true, message: 'Nhập tiêu đề !'  }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name='class'
                        label="Lớp động vật"
                        rules={[{ required: true, message: 'Chọn lớp động vật!' }]}
                    >
                        <Select placeholder="Lớp" onChange={handleChangeClass}>
                            {
                                classes.map((obj, index) => (
                                    index != 0 ?
                                        <Option key={index} value={index}>{obj.name}</Option> : ''
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name='species'
                        label="Loài động vật"
                        rules={[{ required: true, message: 'Chọn loài động vật!' }]}
                    >
                        <Select onChange= {handleChangeSpecies} placeholder="Loài">
                            {
                                species[IDclass].loai.map((obj, index) => (
                                    index != 0 ?
                                        <Option key={index} value={index}>{obj}</Option> : ''
                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="avatar"
                        name="image"
                    >
                        <input
                            name="files"
                            type="file"
                            onChange={(e)=>onImageChange(e)}
                            alt="image"
                        />
                        <Modal
                        title="Image"
                        visible={visible}
                        footer={null}
                        z-index={10000}
                        // onOk={this.handleOk}
                        onCancel={handleCancel}
                        >
                            <FrameImgCropper handleCancel = {handleCancel} src = {avaImg}/>
                        </Modal>
                    </Form.Item>

                    <QuillEditor
                        placeholder={"Start Posting Something"}
                        onEditorChange={onEditorChange}
                        onFilesChange={onFilesChange}
                    />

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

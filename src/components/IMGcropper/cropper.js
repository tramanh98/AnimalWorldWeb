import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
import { Button } from 'antd'; 
import {uploadImg} from '../../api/api'
import axios from 'axios';
export default class CropperIMG extends Component {
    _crop() {
        console.log("cutted")
    }
 
    onCropperInit(cropper) {
        this.cropper = cropper;
    }
    onCrop = async () =>{
        const blob = await (await fetch(this.cropper.getCroppedCanvas().toDataURL('image/png'))).blob();
        this.props.onHandleCrop(blob)
    }
    render() {
        return (
            <div>
                <Cropper
                    src={URL.createObjectURL(this.props.src[0])}
                    style={{height: 400, width: '100%'}}
                    aspectRatio={ this.props.avatar ? 1 : 3 / 2 }
                    guides={false}
                    crop={this._crop.bind(this)}
                    onInitialized={this.onCropperInit.bind(this)}
                />
                <Button type="primary" onClick={this.onCrop.bind(this)} >Cut</Button>
            </div>
        );
    }
}
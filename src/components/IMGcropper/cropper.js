import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
 
export default class CropperIMG extends Component {
    _crop() {
        console.log("cutted")
        // image in dataUrl
        // console.log(this.cropper.getCroppedCanvas().toDataURL());
    }
 
    onCropperInit(cropper) {
        this.cropper = cropper;
    }
 
    render() {
        return (
            <Cropper
                src={URL.createObjectURL(this.props.src[0])}
                style={{height: 400, width: '100%'}}
                // Cropper.js options
                aspectRatio={16 / 9}
                guides={false}
                crop={this._crop.bind(this)}
                onInitialized={this.onCropperInit.bind(this)}
            />
        );
    }
}
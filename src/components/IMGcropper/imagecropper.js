import Cropper from 'cropperjs';
import React, { Component, useRef  } from 'react';
import 'cropperjs/dist/cropper.css';
import {Button} from 'antd'
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';
    
const ImageCropper = ({ imageSrc, onCrop, setEditorRef, scaleValue, onScaleChange }) => (
    <div>
        <div className="editorOverlayInner">
        <div className="editorModalContent clearfix">
            <div className="cropCnt">
            <AvatarEditor image={imageSrc} border={50} scale={scaleValue} rotate={0} ref={setEditorRef} className="cropCanvas" />
            <input style={{ width: '100%' }} type="range" value={scaleValue} name="points" min="1" max="10" onChange={onScaleChange} />
            <button onClick={onCrop} className="editorOverlayCloseBtn crpBtn">
                Save
            </button>
            </div>
        </div>
        </div>
    </div>
);

ImageCropper.propTypes = {
    open: PropTypes.bool.isRequired,
    setEditorRef: PropTypes.func.isRequired,
    onCrop: PropTypes.func.isRequired,
    scaleValue: PropTypes.number.isRequired,
    onScaleChange: PropTypes.func.isRequired,
};
export default ImageCropper;
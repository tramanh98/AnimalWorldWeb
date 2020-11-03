import ReactCrop from 'react-image-crop';
import React, { Component, useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';

export const CropDemo = (props) => {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    return <ReactCrop src={URL.createObjectURL(props.src[0])} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
  }


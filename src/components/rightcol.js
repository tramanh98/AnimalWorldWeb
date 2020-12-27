
import React from "react";
import '../pages/style.css';
import { FramePost1, FramePost2, FramePost3, FramePost4 } from './framePost'
export const RightCol = (props) => {
    return(
        <>
            <div className = "">
                <div className = "">
                    <FramePost3 {...props} />
                </div>
            </div>
           
        </>
    );
}
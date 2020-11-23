
import React from "react";
import '../pages/style.css';
import { FramePosts } from './framePost'
export const RightCol = () => {
    return(
        <>
            <div className = "topicName">
                <h5>Trending </h5>
            </div>
            <div className = "fstpart-col2">
                <FramePosts type = {3} />
                <hr className="my-4"/>
                <FramePosts type = {3} />
                <hr className="my-4"/>
                <FramePosts type = {3} />
                <hr className="my-4"/>
                <FramePosts type = {3} />
                <hr className="my-4"/>
                <FramePosts type = {3} />
            </div>

            <div className = "topicName">
                <h5>Bài vừa đăng</h5>
            </div>
            <div className = "scdpart-col2">
                <div className ="ss1-container-bn">
                    <img src="../images/bn.png" alt="Notebook" style={{width: "100%"}}/>
                    <div className = "content">
                        <span className="date">Dec 25, 2016</span>
                        <h3>Every Start has an End</h3>
                        <span className="category">Inspirational</span>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-md-6">
                        <FramePosts type = {4} />
                    </div>
                    <div className = "col-md-6">
                        <FramePosts type = {4} />
                    </div>
                    <div className = "col-md-6">
                        <FramePosts type = {4} />
                    </div>
                    <div className = "col-md-6">
                        <FramePosts type = {4} />
                    </div>
                </div>
            </div>

        </>
    
    );
}
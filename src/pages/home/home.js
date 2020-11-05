
import React from "react";
import '../style.css';
import Aux from '../../services/auxiliary'
import { FramePosts } from '../../components/framePost'
export const Home = () => {
    return(
    
        <Aux>
            <aside id="hero">
                <div className="row">
                    <div className="col-md-8">
                        <div className ="ss1-container-bn">
                            
                            <img src="../images/tiger.jpg" alt="Notebook" style={{width: "100%"}}/>

                            <div className = "content">
                            
                                <span className="date">Dec 25, 2016</span>
                                <h3>Sự thực về hổ trắng - điều các vườn thú muốn che giấu</h3>
                                <span className="category">Inspirational</span>
                               <span>
                               <span className="view"><i class="fa fa-eye" aria-hidden="true">120</i></span>
                                <span className="like"><i class="fa fa-heart" aria-hidden="true">102</i></span>
                               </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className ="ss1-container-bn">
                            <img src="../images/cho-doberman.jpg" alt="Notebook" style={{width: "100%"}}/>
                            
                            <div className = "content">
                                <span className="date">Dec 25, 2016</span>
                                <h3>Sói Đỏ – Loài động vật có chiến thuật săn mồi đỉnh cao</h3>
                                <span className="category">Inspirational</span>
                            </div>
                        </div>
                        <div className ="ss1-container-bn">
                            <img src="../images/Hesperornis1.jpg" alt="Notebook" style={{width: "100%"}}/>
                           
                            <div className = "content">
                                <span className="date">Dec 25, 2016</span>
                                <h3>Sự thực về hổ trắng - điều các vườn thú muốn che giấu</h3>
                                <span className="category">Inspirational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <div className = "section2">
                <div className = "row">
                    <div className = "col-md-8">
                        <div className = "topicName">
                            <h5>Loài Thú</h5>
                        </div>
                        <div className = "firstPart">
                            <FramePosts type = {1} />
                            <hr class="my-4"/>
                            <FramePosts type = {1} />
                            <hr class="my-4"/>
                            <FramePosts type = {1} />
                            <hr class="my-4"/>
                            <FramePosts type = {1} />
                        </div>

                        <div className = "topicName">
                            <h5>Lưỡng cư</h5>
                        </div>
                        <div className = "secondPart">
                            <div className = "row">
                                <div className = "col-md-6">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-6">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-6">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-6">
                                    <FramePosts type = {2} />
                                </div>
                            </div>
                        </div>

                        <div className = "topicName">
                            <h5>Loài Chim</h5>
                        </div>
                        <div className = "thirdPart">
                            <div className = "row">
                                <div className = "col-md-6">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-6">
                                    <div>
                                        <FramePosts type = {3} />
                                        <hr class="my-4"/>
                                        <FramePosts type = {3} />
                                        <hr class="my-4"/>
                                        <FramePosts type = {3} />
                                        <hr class="my-4"/>
                                        <FramePosts type = {3} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "topicName">
                            <h5>Loài Bò Sát</h5>
                        </div>
                        <div className = "forthPart">
                            <div className = "row">
                                <div className = "col-md-4">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-4">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-4">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-4">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-4">
                                    <FramePosts type = {2} />
                                </div>
                                <div className = "col-md-4">
                                    <FramePosts type = {2} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="col-md-4">

                        <div className = "topicName">
                            <h5>Trending </h5>
                        </div>
                        <div className = "fstpart-col2">
                            <FramePosts type = {3} />
                            <hr class="my-4"/>
                            <FramePosts type = {3} />
                            <hr class="my-4"/>
                            <FramePosts type = {3} />
                            <hr class="my-4"/>
                            <FramePosts type = {3} />
                            <hr class="my-4"/>
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
                    </div>
                    
                </div>
            </div>

        </Aux>
    
    );
}
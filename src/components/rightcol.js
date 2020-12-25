
import React from "react";
import '../pages/style.css';
import { FramePost1, FramePost2, FramePost3, FramePost4 } from './framePost'
export const RightCol = () => {
    return(
        <>
            {/* <div className = "topicName topicName-trending">
            </div>
            <div className = "fstpart-col2">
                <FramePost3  />
                <hr className="my-4"/>
            </div>

            <div className = "topicName topicName-postnew">
                <h5>Bài vừa đăng</h5>
            </div>
                <div className ="ss1-container-bn">
                    <img src="../images/bn.png" alt="Notebook" style={{width: "100%"}}/>
                    <div className = "content">
                        <span className="date">Dec 25, 2016</span>
                        <h3>Every Start has an End</h3>
                        <span className="category">Inspirational</span>
                    </div>
                </div> */}
                <div className = "row">
                    <div className = "fstpart-col2 col-md-12">
                        <FramePost1 />
                    </div>
                </div>
           

        </>
    
    );
}

// const FramePost1 = (props) =>{
//     return(
//         <div className = "row frameInforBasic">  
//             <div className = "col-md-6">
//                 <Link to ={`/detail/${props.id}`}><img src={props.image} alt="Notebook" style={{width: "100%"}}/></Link>
//             </div>
//             <div className = "col-md-6 sumtp1">
//                 <Link to ={`/detail/${props.id}`}><h5>{props.title}</h5></Link>
//                 <p className = "description">
//                     {ReactHtmlParser(props.content)}
//                 </p>
//             </div>
//         </div>
//     )
// }
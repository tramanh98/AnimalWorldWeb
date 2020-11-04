import React from "react";
import './style.css'
import { Link } from "react-router-dom";
{/*** đây là frame cho các bài viết, chứa thông tin cơ bản****/ }

const FramePost1 = () =>{
    return(
        <div className = "row frameInforBasic">  
            <div className = "col-md-6">
                <Link to ={'/detail/1'}><img src="../images/bn.png" alt="Notebook" style={{width: "100%"}}/></Link>
            </div>
            <div className = "col-md-6 sumtp1">
                <Link to ={'/detail/1'}><h3>21 Crazy-Fast Dessert Recipes That Crush Sugar</h3></Link>
                <p>Nsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
        </div>
    )
}

const FramePost2 = () =>{
    return(
        <div className = "framepost-type2">
            <Link to ={'/detail/1'}><img src="../images/bn.png" alt="Notebook" style={{width: "100%"}}/></Link>
            <Link to ={'/detail/1'}><h3>21 Crazy-Fast Dessert Recipes That Crush Sugar</h3></Link>
            <p>Nsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
    )
}

const FramePost3 = () =>{
    return(
        <div className = "frameInforBasic row">  {/*** đây là frame cho các bài viết, chứa thông tin cơ bản****/ }
            <div className = "col-md-4">
                <Link to ={'/detail/1'}><img src="../images/bn.png" alt="Notebook" style={{width: "100%"}}/></Link>
            </div>
            <div className = "col-md-8">
                <Link to ={'/detail/1'}><h6>21 Crazy-Fast Dessert Recipes That Crush Sugar</h6></Link>
            </div>
        </div>
    )
}
const FramePost4 = () =>{
    return (
        <div className = "framepost-type4">
            <Link to ={'/detail/1'}><img src="../images/bn.png" alt="Notebook" style={{width: "100%"}}/></Link>
            <Link to ={'/detail/1'}><h5>21 Crazy-Fast Dessert Recipes That Crush Sugar</h5></Link>
        </div>
    )
}

export const FramePosts = (props) => {
    const { type } = props
    return type == 1 ? (
        <FramePost1/>
    ): 
    ( type == 2 ? <FramePost2/> : 
        ( type == 3 ? <FramePost3/> 
            : <FramePost4/>)
    );
}

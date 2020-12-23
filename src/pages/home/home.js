
import React, {useState, useEffect} from "react";
import '../style.css';
import Aux from '../../services/auxiliary'
import {RightCol} from '../../components/rightcol'
import {latestPost, trendingPost, favoritePost, animalClassPost} from '../../api/api'
import { FramePost1, FramePost2, FramePost3, FramePost4} from '../../components/framePost'
import { Link } from "react-router-dom";
const LastestPost = (props) =>{

    const [article, setArticle] = useState(null)
    useEffect( async () =>{
        const res = await latestPost(1)
        if(res.status === 200){
            console.log(res)
            const {data} = res
            setArticle(data.results)
        }

    }, []);
    return(
        
        
        article ? 
        <aside id="hero">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className ="ss1-container-bn">
                        
                    <Link to ={`/detail/${props.id}`}><img src={article[0].image} alt="Notebook" style={{width: "100%"}}/></Link>
                        <div className = "content">
                        
                            <span className="date">Dec 25, 2016</span>
                            <h3>{article[0].title}</h3>
                            {/* <span className="category">Inspirational</span> */}
                        {/* <span>
                        <span className="view"><i class="fa fa-eye" aria-hidden="true">120</i></span>
                            <span className="like"><i class="fa fa-heart" aria-hidden="true">102</i></span>
                        </span> */}
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className ="ss1-container-bn">
                        <img src={article[1].image} alt="Notebook" style={{width: "100%"}}/>
                        
                        <div className = "content">
                            <span className="date">Dec 25, 2016</span>
                            <h3>{article[1].title}</h3>
                            {/* <span className="category">Inspirational</span> */}
                        </div>
                    </div>
                    <div className ="ss1-container-bn">
                        <img src={article[2].image} alt="Notebook" style={{width: "100%"}}/>
                    
                        <div className = "content">
                            <span className="date">Dec 25, 2016</span>
                            <h3>{article[2].title}</h3>
                            {/* <span className="category">Inspirational</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </aside> 
        : ''
    
    
    );

}

const MammaliaPost = () =>{

    const [article, setArticle] = useState(null)
    useEffect( async () =>{
        const res = await animalClassPost(1, 5)
        if(res.status === 200){
            console.log(res)
            const {data} = res
            setArticle(data.results)
        }

    }, []);
    return(
        article ? 
        <div>
            <div className = "topicName"><h5>Lớp Thú</h5></div>
                <div className = "firstPart">
                    {
                        article.slice(0,4).map((obj,index)=>(
                            <>
                                <FramePost1 {...obj}/>
                                <hr className="my-4"/>
                            </>

                        ))
                    }
                    
                </div>
        </div> : ''
        );

    }

    const ReptiliaPost = () =>{

        const [article, setArticle] = useState(null)
        useEffect( async () =>{
            const res = await animalClassPost(1,1)
            if(res.status === 200){
                console.log(res)
                const {data} = res
                setArticle(data.results)
            }
    
        }, []);
        return(
            article ? 
            <div>
                <div className = "topicName"><h5>Lớp Bò Sát</h5></div>
                    <div className = "secondPart">
                        
                            <div className = "row">
                            {
                                article.slice(0,4).map((obj,index)=>(
                                    <div className = "col-md-6">
                                        <FramePost2 {...obj}/>
                                        <hr className="my-4"/>
                                    </div>
        
                                ))
                            }
                            </div>
                    </div>
            </div> : ''
            );
    
        }

        const FishPost = () =>{

            const [article, setArticle] = useState(null)
            useEffect( async () =>{
                const res = await animalClassPost(1,2)
                if(res.status === 200){
                    console.log(res)
                    const {data} = res
                    setArticle(data.results)
                }
        
            }, []);
            return(
                article ? 
                <div>
                    <div className = "topicName"><h5>Lớp Cá</h5></div>
                        <div className = "thirdPart">
                            
                                <div className = "row">
                                <div className = "col-md-6">
                                    <FramePost2 {...article[0]} />
                                </div>
                                <div className = "col-md-6">
                                    <div>
                                    {
                                        article.slice(1,5).map((obj,index)=>(
                                        <>
                                            <FramePost3 />
                                            <hr className="my-4"/>
                                        </>
                                        ))
                                    }
                                    
                                    </div>
                                </div>
                                </div>
                        </div>
                </div> : ''
                );
        
        }
            
        
 const BirdPost = () =>{

    const [article, setArticle] = useState(null)
    useEffect( async () =>{
        const res = await animalClassPost(1,3)
      
            console.log(res)
            const {data} = res
            setArticle(data.results)
        },

     []);
    return(
        article ? 
        <div>
            <div className = "topicName"><h5>Lớp Chim</h5></div>
                <div className = "fourPart">
                    
                        <div className = "row">
                        {
                            article.slice(0,6).map((obj,index)=>(
                                <div className = "col-md-4">
                                    <FramePost2 {...obj}/>
                                    <hr className="my-4"/>
                                </div>

                            ))
                        }
                        </div>
                </div>
        </div> : ''
        );

    }

    const TrendingPost = () =>{
            const [article, setArticle] = useState(null)
            useEffect( async () =>{
                const res = await trendingPost(1)
                if(res.status === 200){
                    console.log(res)
                    const {data} = res
                    setArticle(data.results)
                }
        
            }, []);
        return(
            article ? 
            <div>
                <div className = "topicName"><h5>Được xem nhiều</h5></div>
                    <div className = "fourPart">
                        
                         
                            {
                                article.slice(0,6).map((obj,index)=>(
                                    <div className = "">
                                        <RightCol {...obj}/>
                                        <hr/>
                                    </div>
    
                                ))
                            }
                           
                    </div>
            </div> : ''
            );
    
        }
       
        const  FavoritePost = () =>{
            const [article, setArticle] = useState(null)
            useEffect( async () =>{
                const res = await  favoritePost(1)
                if(res.status === 200){
                    console.log(res)
                    const {data} = res
                    setArticle(data.results)
                }
        
            }, []);
        return(
            article ? 
            <div>
                <div className = "topicName topicName-postnew"><h5>Bài yêu thích</h5></div>
                    <div className = "fourPart">
                        
                           
                            {
                                article.slice(0,6).map((obj,index)=>(
                                    <div>
                                        <RightCol {...obj}/>
                                        <hr/>
                                    </div>
    
                                ))
                            }
                           
                    </div>
            </div> : ''
            );
    
        }
export const Home = () => {
    return(
    
        <Aux>
            <LastestPost/>

            <div className = "section2">
                <div className = "row">
                    <div className = "col-md-8">

                        <MammaliaPost/>
                        <ReptiliaPost/>
                        <FishPost/>
                        <BirdPost/>
                    </div>


                    <div className ="trending col-md-4">
                        <TrendingPost/>
                        <FavoritePost/>
                    </div>
                    
                </div>
            </div>

        </Aux>
    
    );
}
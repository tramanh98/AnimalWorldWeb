
import React, {useState, useEffect} from "react";
import '../pages/style.css';
import { FramePost3 } from './framePost'
import { trendingPost, favoritePost } from '../api/api'
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
    <div >
        <div className = "topicName"><h4>Được xem nhiều</h4></div>
        <div className = "fourPart">
            {
                article.slice(0,6).map((obj,index)=>(
                    <div className = "">
                        <FramePost3 {...obj}/>
                        {/* <hr/> */}
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
    <div className="mt-5">
        <div className = "topicName topicName-postnew"><h4>Bài yêu thích</h4></div>
        <div className = "fourPart">
                {
                    article.slice(0,6).map((obj,index)=>(
                        <div>
                            <FramePost3 {...obj}/>
                            {/* <hr/> */}
                        </div>

                    ))
                }
                
        </div>
    </div> : ''
    );

}
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

export { TrendingPost, FavoritePost }
import {RightCol} from '../../components/rightcol'
import {useState, useEffect} from "react"
import queryString from 'query-string'
import {trendingPost, favoritePost, animalClassPost} from '../../api/api'
import { FramePost1, FramePost2, FramePost3, FramePost4} from '../../components/framePost'
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
export const Results = (props) => {

    const [article, setArticle] = useState(null)
    useEffect( async () =>{
        const value = queryString.parse(props.location.search)
        const res = await animalClassPost(1,value.idClass )
        if(res.status === 200){
            console.log(res)
            const {data} = res
            setArticle(data.results)
        }

    }, []);
    return(
        <div>
            <h1>NGÀNH CHÂN KHỚP</h1>
            <div className = "row">
                <div className = "col-md-8">
                    <FramePost1 type = {1} />
                    <hr class="my-4"/>
                </div>
                <div className ="col-md-4">
                   <TrendingPost/>
                   <FavoritePost/>
                </div>
            </div>
        </div>
    );
}

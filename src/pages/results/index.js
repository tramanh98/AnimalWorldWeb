import {RightCol} from '../../components/rightcol'
import {useState, useEffect} from "react"
import queryString from 'query-string'
import { Pagination, Spin } from 'antd';
import {trendingPost, favoritePost, animalClassPost, filterAnimal} from '../../api/api'
import { FramePost1, FramePost2, FramePost3, FramePost4} from '../../components/framePost'
import classes from '../../data/classes.json'
import featureFilter from '../../data/featureFilter.json'
import '../style.css'
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
        <div className = "topicName"><h5 className="fontANW">Được xem nhiều</h5></div>
            <div className = "fourPart">
                    {
                        article.slice(0,6).map((obj,index)=>(
                            <div className = "">
                                <RightCol {...obj}/>
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
    <div className="mt-5 ">
        <div className = "topicName topicName-postnew "><h5 className="fontANW">Bài yêu thích</h5></div>
        <div className = "fourPart">
                {
                    article.slice(0,6).map((obj,index)=>(
                        <div>
                            <RightCol {...obj}/>
                        </div>

                    ))
                }
                
        </div>
    </div> : ''
    );

}
export const Results = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [idResult, setIdResult] = useState(null);
    const [article, setArticle] = useState(null)
    const [countResult, setCountResult] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect( () =>{
    console.log("this is result page")
    async function fetchData() {
        const value = queryString.parse(props.location.search)
        console.log(value.idClass)
        setLoading(true)
        if(value.idClass !== undefined){
            console.log(value.idClass)
            const res = await animalClassPost(1, value.idClass )
            if(res.status === 200){
                console.log(res)
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
                setIdResult({
                    id: value.idClass,
                    name: "class-animal"
                })
            }
        }
        else if(value.sa != undefined)
        {
            const res = await filterAnimal(1, value.sa )
            if(res.status === 200){
                console.log(res)
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
                setIdResult({
                    id: value.sa,
                    name: "feature"
                })
            }
        }
        else if(value.q != undefined){
            if(value.q === "top"){
                const res = await trendingPost(1)
                if(res.status === 200){
                    console.log(res)
                    const {data} = res
                    setArticle(data.results)
                    setCountResult(data.count)
                }
            }
            else{
                
            }
        }
        setCurrentPage(1)
        setLoading(false)
    }
    fetchData();

    }, []);

    const changePage = async (page, pagesize)=>{
        const value = queryString.parse(props.location.search)
        setLoading(true)
        if(value.class != undefined){
            const res = await animalClassPost(page, value.idClass )
            if(res.status === 200){
                console.log(res)
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
            }
        }
        else if(value.sa != undefined)
        {
            const res = await filterAnimal(page, value.sa)
            if(res.status === 200){
                console.log(res)
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
            }
        }
        else if(value.q !== undefined){
            if(value.q === "top"){
                const res = await trendingPost(1)
                if(res.status === 200){
                    console.log(res)
                    const {data} = res
                    setArticle(data.results)
                    setCountResult(data.count)
                }
            }
            else{
                
            }
        }
        setCurrentPage(page)
        setLoading(false)
    }

    return(
        loading ? 
        <Spin tip="Loading..." size="large" ></Spin> :
        <div>
            
                {
                    idResult ? 
                    <div className="infor-tilte  mt-5 mx-2 px-5 py-3">
                        {
                            idResult.name === "class-animal" ?
                            <>
                                <h2 className="fontANW">{classes[idResult.id].name}</h2>
                                <p className="font-roboto">{classes[idResult.id].Intro}</p>
                            </> 
                            : 

                            featureFilter.map((obj, index) =>(
                                obj.feature === idResult.id ? 
                                <>
                                    <h2 className="fontANW">{obj.name}</h2>
                                    <p className="font-roboto">{obj.Intro}</p>
                                </>
                                :''
                                
                            ))
                        }
                        
                    </div> : ''
                }
                
            
            
            <div className = "row mt-5">
                {
                    article ? 
                    <>
                        <div className = "col-md-8 pr-3">
                            {
                                article.map((obj,index)=>(
                                    <div>
                                        <FramePost1 {...obj}/>
                                        {
                                            (index + 1)%10 !==0 ?  
                                                (index + 1) !== article.length ? 
                                                <hr/> :''  
                                            : ''
                                        }
                                    </div>
                                ))
                            }
                            {
                                countResult == 0 ? '' :  
                                <div className="my-5">
                                    <Pagination onChange = {changePage} defaultCurrent={currentPage} total={countResult} />
                                </div>

                            }
                        </div>
                        <div className ="col-md-4 pl-2">
                            <TrendingPost/>
                            <FavoritePost/>
                        </div>
                    </>
                    :''
                }
                
            </div>
        </div>
    );
}

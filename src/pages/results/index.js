import {useState, useEffect} from "react"
import queryString from 'query-string'
import { Pagination, Spin } from 'antd';
import {trendingPost, GetArticleFollowingTag, animalClassPost, filterAnimal} from '../../api/api'
import { FramePost1} from '../../components/framePost'
import classes from '../../data/classes.json'
import featureFilter from '../../data/featureFilter.json'
import {TrendingPost, FavoritePost} from '../../components/rightcol'
import '../style.css'

export const Results = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [idResult, setIdResult] = useState(null);
    const [article, setArticle] = useState(null)
    const [countResult, setCountResult] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect( () =>{
    async function fetchData() {
        const value = queryString.parse(props.location.search)
        setLoading(true)
        if(value.idClass !== undefined){
            const res = await animalClassPost(1, value.idClass )
            if(res.status === 200){
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
                    const {data} = res
                    setArticle(data.results)
                    setCountResult(data.count)
                }
            }
            else{
                const res = await GetArticleFollowingTag(1)
                if(res.status === 200){
                    const {data} = res
                    setArticle(data.results)
                    setCountResult(data.count)
                }
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
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
            }
        }
        else if(value.sa != undefined)
        {
            const res = await filterAnimal(page, value.sa)
            if(res.status === 200){
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
            }
        }
        else if(value.q !== undefined){
            if(value.q === "top"){
                const res = await trendingPost(1)
                if(res.status === 200){
                    const {data} = res
                    setArticle(data.results)
                    setCountResult(data.count)
                }
            }
            else{
                const res = await GetArticleFollowingTag(1)
                if(res.status === 200){
                    const {data} = res
                    setArticle(data.results)
                    setCountResult(data.count)
                }
                
            }
        }
        setCurrentPage(page)
        setLoading(false)
    }

    return(
        loading ? 
        <Spin tip="Loading..." size="large" style={{textAlign: 'center'}} ></Spin> :
        <div>
            {
                idResult ? 
                <div className="infor-tilte mt-5 mx-2 px-5 py-3">
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
                
            {
                article ? 
                <div className = "row mx-0 my-5 p-0">
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
                    <div className ="col-md-4 pl-3">
                        <TrendingPost/>
                        <FavoritePost/>
                    </div>
                </div>
                :''
            }
          
        </div>
    );
}

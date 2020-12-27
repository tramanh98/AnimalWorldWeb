import {RightCol} from '../../components/rightcol'
import {useState, useEffect} from "react"
import queryString from 'query-string'
import { Pagination, Spin } from 'antd';
import {trendingPost, favoritePost, animalClassPost, filterAnimal} from '../../api/api'
import { FramePost1, FramePost2, FramePost3, FramePost4} from '../../components/framePost'
// import Pagination  from './pagination';
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
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [article, setArticle] = useState(null)
    const [countResult, setCountResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageSize, setPageSize] = useState(0)
    useEffect( async () =>{
        const value = queryString.parse(props.location.search)
        console.log(value.idClass)
        setLoading(true)
        if(value.idClass != undefined){
            console.log(value.idClass)
            const res = await animalClassPost(1, value.idClass )
            if(res.status === 200){
                console.log(res)
                const {data} = res
                setArticle(data.results)
                setCountResult(data.count)
                setPageSize(parseInt(1 + data.count/10))
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
                setPageSize(parseInt(1 + data.count/10))
            }
        }
        else if(value.q != undefined){

        }
        setCurrentPage(1)
        setLoading(false)

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
                // setPageSize(parseInt(1 + data.count/10))
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
                // setPageSize(parseInt(1 + data.count/10))
            }
        }
        else if(value.q != undefined){
            console.log("...")
        }
        setCurrentPage(page)
        setLoading(false)
    }

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const paginate = pageNumber => setCurrentPage(pageNumber);
    return(
        article ? 
        <Spin tip="Loading..." size="large" ></Spin> :
        <div>
            <h1>NGÀNH CHÂN KHỚP</h1>
            <div className = "row">
                <div className = "col-md-8">
                    {
                        article.map((obj,index)=>(
                            <div>
                                <FramePost1 {...obj}/>
                                <hr/>
                            </div>
                        ))
                    }
                    {
                        countResult == 0 ? '' :  
                        <Pagination onChange = {changePage} defaultCurrent={currentPage} total={pageSize} />

                    }
                </div>
                <div className ="col-md-4">
                   <TrendingPost/>
                   <FavoritePost/>
                </div>
            </div>
        </div>
    );
}

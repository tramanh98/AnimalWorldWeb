import {RightCol} from '../../components/rightcol'
import {FramePost1} from '../../components/framePost'
import {useState, useEffect} from "react"
import {animalClassPost} from '../../api/api'
import queryString from 'query-string'
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
                    <RightCol/>
                </div>
            </div>
        </div>
    );
}

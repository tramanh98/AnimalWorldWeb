import {RightCol} from '../../components/rightcol'
import {FramePosts} from '../../components/framePost'
export const Results = () => {
    return(
        <div>
            <h1>NGÀNH CHÂN KHỚP</h1>
            <div className = "row">
                <div className = "col-md-8">
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                    <hr class="my-4"/>
                    <FramePosts type = {1} />
                </div>
                <div className ="col-md-4">
                    <RightCol/>
                </div>
            </div>
        </div>
    );
}

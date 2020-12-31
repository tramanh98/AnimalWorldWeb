import { Result, Button } from 'antd';
export const Page403 = (props) => {
    const backHome = () =>{
        props.history.push('/home')
    }
    return(
        <div>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary" onClick ={backHome}>Back Home</Button>}
            />
        </div>
    
    );
}
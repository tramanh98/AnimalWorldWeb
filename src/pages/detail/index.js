import AllComments from './comment'
import {RightCol} from '../../components/rightcol'
import {NameTag} from '../../components/badge'
import {EyeOutlined} from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
export const Detail = () => {
    return(
        <div className = "row">
            <div className = "col-md-8 px-3">
                <div className = "d-flex justify-content-between my-4">
                    <div className="p-2 my-auto" style={{width: '18%'}}>
                        {/* <NameTag/> */}
                        <div className= "d-flex justify-content-between">
                            <div className ="p-2" >
                                <Avatar size={50} icon={<UserOutlined />} />
                            </div>
                            <div className ="p-2" >
                                <div>Anh Duong</div>
                                <div>
                                    <EditOutlined style={{ fontSize: '18px' }}/> <span>81</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        Published on 21/10/2020
                        <div className = "d-flex justify-content-end">
                            <div className ="p-2 ml-3">
                                <EyeOutlined style={{ fontSize: '20px' }}/> 35 
                            </div>
                            <div className = "p- ml-3">
                                <i class='far fa-comments' style={{fontSize:'18px'}}/>10
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <h1>Thực hành | Set up Kubernetes Cluster trên Microsoft Azure - Azure Kubernetes Service</h1>
                <p>Article đi kèm với Youtube Video của mình. Mong các bạn Subcribe và Share để giúp mình có động lực hơn nữa nha</p>
                <img src = "../images/demo1.jpg" style={{width: "100%"}}/>
                <p>
                Hôm nay thì mình sẽ tiếp tục hướng dẫn cài đặt một Kubernetes Cluster trên Microsoft Azure - Azure Kubernetes Service (AKS). Sau đó, mình sẽ deploy Sample Application trên AKS cluster.
                </p>
                <p>
                Hôm nay thì mình sẽ tiếp tục hướng dẫn cài đặt một Kubernetes Cluster trên Microsoft Azure - Azure Kubernetes Service (AKS). Sau đó, mình sẽ deploy Sample Application trên AKS cluster.
                </p>
                <p>
                Hôm nay thì mình sẽ tiếp tục hướng dẫn cài đặt một Kubernetes Cluster trên Microsoft Azure - Azure Kubernetes Service (AKS). Sau đó, mình sẽ deploy Sample Application trên AKS cluster.
                </p>
                <p>
                Hôm nay thì mình sẽ tiếp tục hướng dẫn cài đặt một Kubernetes Cluster trên Microsoft Azure - Azure Kubernetes Service (AKS). Sau đó, mình sẽ deploy Sample Application trên AKS cluster.
                </p>
                <AllComments/>
            </div>
            <div className = "col-md-4">
                <RightCol/>
            </div>
            

        </div>
    );
}

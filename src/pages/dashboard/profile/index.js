import './style.css';
import { Collapse, Tabs } from 'antd';



const { TabPane } = Tabs;







const { Panel } = Collapse;
const text = (
    <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
    </p>
);
export const ManageAccount = () => {
    const callback = (key) => {
        console.log(key);
    }
    return (
        <div>
            <div className="profile">
                <div className="avt">
                    <img className="rounded-circle d-inline-block " src="../images/avt1.jpg" alt="" />
                </div>


                <div className=" info">

                    <h2 className="d-inline-block">Full name</h2>

                    <button className="edit">Edit Profile</button>
                    <p className="text-muted d-block">@user</p>
                    <p>something about me.</p>


                </div>


            </div>

            <div>

                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Post" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Following" key="2">
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="Chân khớp (1/51)" key="1">
                                    Chuồn chuồn <button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Có vú (3/157)" key="2">
                                    <a>Sư Tử </a><button className="follow">Follow</button>
                                    <a>Chó </a><button className="follow">Follow</button>
                                    <a>Báo </a><button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Cá" key="3">
                                    Cá mập <button className="follow">Follow</button>
                                </Panel>
                            </Collapse>
                    </TabPane>
                    
                </Tabs>

            </div>

            {/* <div className="container mt-2">
                <br />
                
                <ul className=" nav nav-tabs ">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="tab-post"> <i className="fas fa-pen" style={{ fontSize: "70%" }}></i> Post</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab-follow">Follow</a>
                    </li>
                </ul>


                <div className="tab-content">
                    <div id="tab-post" className="container tab-pane active">
                        <div>No post.</div>
                    </div>

                    <div id="tab-follow" className="container tab-pane fade">

                        <div>

                            <Collapse bordered={false} defaultActiveKey={['1']}>
                                <Panel header="Chân khớp (1/51)" key="1">
                                    Chuồn chuồn <button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Có vú (3/157)" key="2">
                                    <a>Sư Tử </a><button className="follow">Follow</button>
                                    <a>Chó </a><button className="follow">Follow</button>
                                    <a>Báo </a><button className="follow">Follow</button>
                                </Panel>
                                <Panel header="Cá" key="3">
                                    Cá mập <button className="follow">Follow</button>
                                </Panel>
                            </Collapse>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
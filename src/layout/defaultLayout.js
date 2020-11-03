import React, { Component }  from 'react';
import { Layout } from 'antd';
import Aux from '../services/auxiliary'
import {Footer} from './footer'
import NavBar from './navBar/index'
import ScriptTag from 'react-script-tag';
import { withRouter, useHistory } from "react-router-dom";


export const DefaultLayout = props => {
    return (
        <React.Fragment>
            <Layout>
                <NavBar/>
                <Aux>
                    <div className = "container">
                        {props.children}
                    </div>
                </Aux>
                <Footer />
            </Layout>
        </React.Fragment>
    )
}

// class DefaultLayout extends Component{

//     render(){
//         return(
//         <React.Fragment>
//             <Layout>
//                 <NavBar/>
//                 <Aux>
//                     <div className = "container">
//                         {props.children}
//                     </div>
//                 </Aux>
//                 <Footer />
//             </Layout>
//         </React.Fragment>
//         );

//     }
// }
// export default withRouter(DefaultLayout);

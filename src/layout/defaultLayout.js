import React from 'react';
import { Layout } from 'antd';
import Aux from '../services/auxiliary'
import {Footer} from './footer'
import NavBar from './navBar/index'
import ScriptTag from 'react-script-tag';
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
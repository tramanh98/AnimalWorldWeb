import React from 'react';
import { Layout } from 'antd';
import Aux from '../services/auxiliary'
import {Footer} from './footer'
import NavBar from './navBar/index'
export const DefaultLayout = props => {
    return (
        <React.Fragment>
            <Layout>
                <NavBar/>
                <Aux>
                    {props.children}
                </Aux>
                <Footer />
            </Layout>
        </React.Fragment>
    )
}
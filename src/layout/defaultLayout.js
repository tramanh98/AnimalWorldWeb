import React, { useEffect }  from 'react';
import { Layout } from 'antd';
import Aux from '../services/auxiliary'
import {Footer} from './footer'
import NavBar from './navBar/index'
import ScriptTag from 'react-script-tag';
import { withRouter, useHistory } from "react-router-dom";
import {getProfile} from '../api/api'
import { useDispatch, useSelector } from 'react-redux'

export const DefaultLayout = props => {
    const dispatch = useDispatch()
    useEffect( async() => {
        const token = window.localStorage.getItem('token');
        const typetoken = window.localStorage.getItem('typetoken'); 
        // `${typetoken} ${token}`
        
        if (token) {
            const response = await getProfile(`${typetoken} ${token}`)
            // const {profile} = response.data
            const storetoRedux = {
                isLogin: true,
                idUser: response.data.id,
                avatar: response.data.avatar,
                username: response.data.username, 
                fname: response.data.first_name,
                lname: response.data.last_name,
                email: response.data.email,
            }
            dispatch({
                type: 'LOGIN_USER',
                payload: storetoRedux
            })
            
            console.log(storetoRedux)
            // do something to redux, store information to redux
        }
    }, [dispatch]);

    // const getinredux = useSelector(state => state.currentUser)

    return (
        <React.Fragment>
            <Layout style={{backgroundColor: "white"}}>
                <NavBar/>
                <Aux>
                    {/* <h1>{ getinredux ? 
                    getinredux.username : ''}</h1> */}
                    <div className = "container pt-3">
                        {props.children}
                    </div>
                </Aux>
                <Footer />
            </Layout>
        </React.Fragment>
    )
}


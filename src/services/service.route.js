import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const ProtectedRoute =  ({ component: Component, ...rest}) => {
    const user = useSelector((state) => state.currentUser);
    console.log(user)
    return(
        <Route {...rest}
            render = {props => {
                if (user){
                    return <Component { ...props } key={Date.now()}/>; }
                else {
                    return <Redirect to="/page/403"/>
                    }
                }   
                
            } />
    );
}

const VerifiedRoute =  ({ component: Component, ...rest}) => {
    const user = useSelector((state) => state.currentUser);
    return(
        <Route {...rest}
            render = {props => {
                if (user){
                    return <Redirect to="/home"/>; }
                else {
                    return <Component { ...props } key={Date.now()}/>
                    }
                }   
                
            } />
    );
}

export { ProtectedRoute, VerifiedRoute}
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
export const ProtectedRoute =  ({ component: Component, ...rest}) => {
    return(
        <Route {...rest}
        render = {props => {
            // if (user){
            //     return <Component { ...props }/>; }
            // else {
            //     return <Redirect to="/home"/>
            //     }
                return <Component { ...props }/>;
            }   
            
        } />
    );
}
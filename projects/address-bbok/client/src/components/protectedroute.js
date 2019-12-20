import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withConcert} from '../show/concertprovider';

const ProtectedRoute = props => {
    const {component: Component, ...rest} = props;
    return(
        props.token ?
        <Route {...rest} component={Component} /> :
        <Redirect to="/login" />
    )
}

export default withConcert(ProtectedRoute)
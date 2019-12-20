import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ConcertContainer from './show/concertcontainer';
import Navbar from './components/navbar'
import Profile from './components/profile'
import Login from './components/login'
import Signup from './components/signup'
import ProtectedRoute from './components/protectedroute'
import Form from './show/form'


const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ConcertContainer}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <ProtectedRoute path="/" component={ConcertContainer}/>
            </Switch>
        </div>
    )
}

export default App
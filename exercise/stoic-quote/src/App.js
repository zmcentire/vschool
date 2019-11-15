import React from 'react'
import {withProvider} from './QuoteProvider'
import QuoteContainer from './QuoteContainer'
import NavBar from './NavBar'
import About from './About'
import './App.css'
import {Switch, Route} from 'react-router-dom'

const App = () => {
    return(
        <div className = 'App'>
            <NavBar/>
            <Switch>
                <Route exact path = "/" component={QuoteContainer}/>
                <Route exact path = '/about' component={About}/>
            </Switch>
        </div>
    )
    
}

export default withProvider(App)
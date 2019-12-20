import React from 'react';
import NavBar from './NavBar';
import BountyContainer from './BountyContainer'
import Form from './Form'
import {withProvider} from './BountyProvider'

const App = () => {
    return (
        <div>
            <NavBar/>
            <Form/>
            <BountyContainer/>
        </div>
    )
}

export default withProvider(App)
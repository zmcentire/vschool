import React from 'react';
import Form from './Form';
import {withUgly} from './UglyProvider'
import UglyContainer from './UglyContainer'
import './App.css'


const App = () => {
    return (
        <div>
            <Form/>
            <UglyContainer/>
        </div>
    )
}

export default withUgly(App)
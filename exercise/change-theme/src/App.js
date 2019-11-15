import React from 'react';
import {withTheme} from './ThemeProvider';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer'

function App(props) {
    return (
        <div className={props.on ? 'light' : 'dark'}>
                <Navbar/>
            <div className='main'>
                    <h1>The Theme</h1>
                <div className='button'>
                    <button onClick={props.toggle}>Change Theme</button>
                </div>
            </div>
                <Footer/>
        </div>
    )
}

export default withTheme(App)
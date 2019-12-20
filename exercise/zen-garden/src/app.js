import React from 'react';
import Header from './navbar';
import Body from '../body/body';
import Author from './author';
import Footer from './footer';
import './app.css';


const App = () => {
    return (
        <div className="App">
           <Header/>
           <Body/>
           <Author/>
           <Footer/>
        </div>
    )
}

export default App
import React from 'react';
import HitList from './HitList'
import './App.css'
import Header from './header';



const App = () => {
    return (
        <div className="app">
            <Header/>
            <HitList/>
        </div>
    )
}

export default App
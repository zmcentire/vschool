import React from 'react'
import NavBar from './NavBar'
import Intro from './Intro'
import Projects from './Projects'
import './App.css'

const App = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <Projects/>
        </div>
    )
}

export default App
import React from 'react';
import NavBar from './NavBar';
import Intro from './Intro';
import Projects from './Projects';
import './App.css';
import Skills from './Skills';
import Footer from './footer';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Intro/>
            <Projects/>
            <Skills />
            <Footer />
        </div>
    )
}

export default App
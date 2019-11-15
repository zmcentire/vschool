import React from 'react';

import Navbar from './nav';
import Main from './main';
import Footer from './footer';
import "./App.css";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  )
}

export default App;

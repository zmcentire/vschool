import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import UglyProvider from './UglyProvider';

ReactDom.render(<UglyProvider>
                <App/> 
                </UglyProvider>
, document.getElementById('root'))
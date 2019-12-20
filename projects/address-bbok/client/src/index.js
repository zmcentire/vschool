import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import ConcertProvider from '../src/show/concertprovider'
import {BrowserRouter} from 'react-router-dom'

import 'mdbreact/dist/css/mdb.css'
import 'mdbreact/dist/css/style.css'

ReactDOM.render(
    <ConcertProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ConcertProvider>
, document.getElementById('root'))

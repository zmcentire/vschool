import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PlaylistProvider from './PlaylistProvider'

ReactDOM.render(<PlaylistProvider>
                    <App/>
                </PlaylistProvider>
, document.getElementById('root'))
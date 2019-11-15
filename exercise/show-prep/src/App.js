import React from 'react'
import {withProvider} from './PlaylistProvider'
import SearchEntry from './SearchEntry'
import Header from './Header'
import ShowContainer from './ShowContainer'

const App = () => {
    return (
        <div>
            <Header/>
            <SearchEntry/>
            <ShowContainer/>
        </div>
    )
}

export default withProvider(App)
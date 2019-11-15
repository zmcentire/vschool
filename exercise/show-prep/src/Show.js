import React from 'react'
import {withProvider} from './PlaylistProvider'
// import SearchEntry from './SearchEntry'

class Show extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
        const {month, day, year, artist, venue, city, state, songs} = this.props.info
        return (
            <div>
                <div>
                    <span>{month}</span>
                    <span>{day}</span>
                    <span>{year}</span>
                </div>
                <div>
                    <span>{artist}</span>
                    <span>{venue},{city},{state}</span>
                    <span>{songs}</span>
                </div>
            </div>
        )
    }
}

export default withProvider(Show)
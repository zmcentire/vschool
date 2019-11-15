import React, {Component} from 'react'
import Show from './Show'
import {withProvider} from './PlaylistProvider'

class ShowContainer extends Component {
    componentDidMount(){
        this.props.getArtist()
        this.props.getSetlistArtist()
        this.props.getAlbum()

    }

    render() {
        const mappedShow = this.props.show.map(show => <Show info = {show}/>)

        return (
            <div>
                {mappedShow}
            </div>
        )
    }

}

export default withProvider(ShowContainer)
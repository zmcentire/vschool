import React, {Component} from 'react'
import {withProvider} from './PlaylistProvider'

class SearchEntry extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist: "",
            setlistArtist: "",
            artistProps: "",
        }
    }

    componentDidMount(){

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        // this.props.getArtist(e.target.value)
        // this.props.getSetlistArtist(e.target.value)
        this.setState({[this.props.artistProps]: e.target.value})
        this.props.getArtistSets(this.state)
        this.props.getSetlist(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Artist" name="artist" value={this.state.artist}
                onChange={this.handleChange}/>
                <button>{this.props.button}</button>
            </form>
        )
    }
}

export default withProvider(SearchEntry)
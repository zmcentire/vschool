import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class PlaylistProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            artist: [],
            artistprops: [],
            setlistArtist: [],
            album: [],
            tracks: [],
            tourDate: [],
            setlist: [],
            playlist: [],
            show: []
        }
    }
    getArtistSets = (artistprops) => {
        axios.get(`https://api.spotify.com/v1/search?q=${artistprops}&type=artist`).then(res => {
            this.setState({artist: res.data})
        })
    }
    getArtist = () => {
        axios.get('https://api.spotify.com/v1/search?q=*&type=artist').then(res => {
            this.setState({artist: res.data})
        })
    }

    getSetlistArtist = (artistprops) => {
        axios.get(`https://api.setlist.fm/rest/1.0/search/artists?artistName=${artistprops}`).then(res => {
            this.setState({setlistArtist: res.data})
        })
    }

    getSetlist = (artistprops) => {
        axios.get(`https://api.setlist.fm/rest/1.0/search/setlists?artistName=${artistprops}`).then(res => {
            this.setState({setlist: res.data})
        })
    }

    getAlbum = () => {
        axios.get('https://api.spotify.com/v1/artists/{id}/albums').then(res => {
            this.setState({album: res.data})
        })
    }

    getTracks = () => {
        axios.get('https://api.spotify.com/v1/albums/{id}/tracks').then(res => {
            this.setState({tracks: res.data})
        })
    }

    createPlaylist = newPlaylist => {
        axios.post('https://api.spotify.com/v1/users/{user_id}/playlist', newPlaylist).then(res =>{
            this.setState(prev =>{
                return {
                    playlist: [...prev.playlist, res.data]
                }
            })
        })
    }

    render() {
        return (
            <Provider value = {{
                ...this.state,
                getArtistSets: this.getArtistSets,
                getArtist: this.getArtist,
                getSetlistArtist: this.getSetlistArtist,
                getAlbum: this.getAlbum,
                getTracks: this.getTracks,
                getSetlist: this.getSetlist,
                createPlaylist: this.createPlaylist,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default PlaylistProvider

export function withProvider(Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props}/>}
                    </Consumer>
}
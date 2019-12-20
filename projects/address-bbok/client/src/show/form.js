import React, {Component} from 'react';
import {withConcert} from './concertprovider'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            Artist: " ",
            Venue: " ",
            Time: " ",
        }
    }

    componentDidMount(){
        if(this.props.type === 'update'){
            let {Artist, Venue, Time} = this.props.concert
            this.setState({Artist, Venue, Time})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.props.type)
        if(this.props.type === 'add'){
            this.props.createConcert(this.state)
        }else {
            this.props.editConcert(this.props.concert._id, this.state)
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className={this.props.type === 'add' ? 'concert-submit':'edit-concert'}>
                <input type="text" placeholder="artist" name="Artist" Value={this.state.Artist}/>
                <input type="text" placeholder="venue" name="Venue" Value={this.state.Venue}/>
                Date: 
                <input type="date" name="Time" Value={this.state.Time}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default withConcert(Form)
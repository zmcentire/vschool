import React, {Component} from 'react'
import {withConcert} from './concertprovider'
import Concert from './concert'
import Form from './form'

class ConcertContainer extends Component {
    componentDidMount(){
        this.props.getConcert()
    }

    render() {
        const mappedConcert = this.props.concert.map(concert => <Concert info = {concert}/>)

        return(
            <div>
                <Form />
                {mappedConcert}
            </div>
        )
    }
}

export default withConcert(ConcertContainer)
import React from 'react';
import Form from './form'

import {withConcert} from './concertprovider'

class Concert extends React.Component {
    constructor() {
        super();
        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.state(prev => {
            return {
                toggled: !prev.toggled
            }
        })
    }

    render() {
        const {artist, venue, month, day, year} = this.props.info
        return (
            <div>
                {this.state.toggled ?
                    <div className = 'concert'>
                        <h1>{artist}</h1>
                        <h3>{venue}</h3>
                        <h4>{month}, {day}, {year}</h4>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                    :
                    <Form button="Save Changes" type="update" todo={this.props.info}
                    toggle={this.props.info} toggle={this.toggle}/>
                }
            </div>
        )
    }
}

export default withConcert(Concert)
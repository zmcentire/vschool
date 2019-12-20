import React from 'react';
import {withProvider} from './BountyProvider'
import Form from './Form'

class Bounty extends React.Component {
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
        const {firstName, lastName, living, type, bountyAmount} = this.props.info
        return (
            <div>
                {this.state.toggled ?
                    <div className = 'bounty'>
                        <h1>{firstName} {lastName}</h1>
                        <h3>{type}</h3>
                        <h3>Bring in {living}</h3>
                        <h3>${bountyAmount}</h3>
                    </div>
                    :
                    <Form button="Save Changes" type="delete" todo={this.props.info}
                    toggle={this.props.info} toggle={this.toggle}/>
                }
            </div>
        )
    }
}

export default withProvider(Bounty)
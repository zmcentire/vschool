import React, {Component} from 'react'
import {withProvider} from './BountyProvider'
import Bounty from './Bounty'

class BountyContainer extends Component {
    componentDidMount(){
        this.props.getBounty()
    }

    render() {
        const mappedBounty = this.props.bounty.map(bounty => <Bounty info = {bounty}/>)

        return (
            <div>
                {mappedBounty}
            </div>
        )
    }
}

export default withProvider(BountyContainer)
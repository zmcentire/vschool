import React, {Component} from 'react';
import {withUgly} from './UglyProvider';
import UglyThing from './UglyThing';

class UglyContainer extends Component {
    componentDidMount(){
        this.props.getAllUgly()
    }

    render() {
        console.log(this.props)
        const mappedUgly = this.props.ugly.map(ugly => <UglyThing info = {ugly} />)

        return (
            <div>
                {mappedUgly}
            </div>
        )
    }
}

export default withUgly(UglyContainer)
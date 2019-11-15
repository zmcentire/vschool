import React from 'react';
import {withUgly} from './UglyProvider'
import Form from './Form';

class UglyThing extends React.Component {
    constructor() {
        super();
        this.state = {
            toggled: true
        }
    }

    toggle = () => {
        this.setState(prev => {
            return {
                toggled: !prev.toggled
            }
        })
    }

    render () {
        const {title, imgUrl, description, _id} = this.props.info
        return (
            <div>
                {this.state.toggled ? 
                    <div className = 'ugly'>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <img src={imgUrl} alt=""/>
                        <button onClick={() =>
                        this.props.deleteUgly(_id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </div>
                    :
                    <Form button="Save Changes" type='update' todo=
                    {this.props.info} toggle={this.toggle}/>
                }
            </div>
        )
    }
}

export default withUgly(UglyThing)
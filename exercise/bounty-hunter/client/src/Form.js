import React, {Component} from 'react';
import {withProvider} from 'BountyProvider';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            bountyAmount: "",
            type: "",
            living: "",
        }
    }

    componentDidMount(){
        if(this.props.type === 'update'){
            let {firstName, lastName, bountyAmount, type, living} = this.props.bounty
            this.setState({firstName, lastName, bountyAmount, type, living})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add'){
            this.props.addBounty(this.state)
        }else {
            this.props.editBounty(this.props.bounty._id, this.state)
            this.props.toggle()
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className= {this.props.type === 'add' ? 'ugly-submit':'edit-ugly'}>
                <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName}/>
                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName}/>
                Living:
                <input type="radio" name="living" value="Yes">Yes</input>
                <input type="radio" name="living" value="No">No</input>
                Jedi or Sith?
                <input type="radio" name="type" value="Jedi"/>
                <input type="radio" name="type" value="Sith"/>
                <br/>
                <input type="number" placeholder="Bounty Amount" name="bountyAmount" value={this.state.bountyAmount}/>

            </form>
        )
    }
}
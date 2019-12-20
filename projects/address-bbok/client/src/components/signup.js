import React from 'react';
import {withConcert} from '../show/concertprovider';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            usernamer: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/concert"))
        alert(JSON.stringify(this.state));
        this.props.signup(this.state)
            .then(() => this.clearInputs())
            .catch(err => {
                this.setState({errorMessage: err.data})
            })
        this.clearInputs();
        
    }

    render() {
        
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                            type="text"
                            placeholder="Username"/>
                    <input onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="Password"/>
                    <button type="submit">Create Account</button>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        )
    }
}

export default withConcert(Signup)
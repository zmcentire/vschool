import React, {Component} from 'react';
import {withConcert} from '../show/concertprovider'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
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
            errorMessage: "",
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.clearInputs())
            .catch(err => {
                this.setState({errorMessage: err.data})
            })
        alert(JSON.stringify(this.state));
        this.clearInputs();
        this.props.login(this.state)
            .then(() => this.props.history.push("/concert"))
    }

    render() {
        return(
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }
            </div>
        )
    }
}

export default withConcert(Login);
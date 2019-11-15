import React, {Component} from 'react';
import PeopleContainer from './PeopleContainer';


class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            age: '',
            people: []
        }
    }

    handleChange = e => {
        let {name, value} = e.target 
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();
        let {fullName, age} = this.state;

        const newPerson = {
            fullName,
            age
        }

        this.setState(prev => {
            return {
                people: [...prev.people, newPerson]
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.handleChange}
                    />
                    <input type="text"
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                                {/* These are props vvvvv */}
                <PeopleContainer people={this.state.people}/>
            </div>
        )
    }
}

export default Entry
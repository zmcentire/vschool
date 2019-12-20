import React, {Component} from 'react';
import {withUgly} from './UglyProvider';


class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: "",
            imgUrl: "",
            description: "",
        }
    }

    componentDidMount(){
        if(this.props.type === 'update'){
            let {title,description, imgUrl} = this.props.ugly
            this.setState({title, description, imgUrl})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.type === 'add'){
            this.props.addUgly(this.state)
        } else {
            this.props.editUgly(this.props.ugly._id, this.state)
            
        }
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className = {this.props.type === 'add' ? 'ugly-submit':'edit-ugly'}>
                <input type="text" placeholder="Title" name="title" value={this.state.title}
                        onChange={this.handleChange}/>
                <input type="text" placeholder="Description" name="description" value={this.state.description}
                        onChange={this.handleChange}/>
                <input type="text" placeholder="Img URL" name="imgUrl" value={this.state.imgUrl}
                        onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default withUgly(Form)
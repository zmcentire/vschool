import React, {Component} from 'react';
import Axios from 'axios';

class RandomColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: []
        }
    }

    componentDidMount(){
        Axios.get('http://www.colr.org/json/colors/random/7').then(res => {
            this.setState({colors:res.data})
        })
    }

    render() {
        return <div></div>
    }
}
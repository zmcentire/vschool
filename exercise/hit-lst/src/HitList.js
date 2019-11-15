import React, {Component} from 'react';
import Axios from 'axios';
import HitComponent from './HitComponent'

class HitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [] 
        }
    }

    componentDidMount(){
        Axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(res => {
            this.setState({hits:res.data})
        })
    }

    render() {
        return(
            <div>
                <HitComponent hits = {this.state.hits}/>
            </div>
        )
    }
}

export default HitList
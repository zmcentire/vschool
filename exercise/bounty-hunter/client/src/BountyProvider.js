import React, {Component} from 'react';
import Axios from 'axios'
const {Consumer, Provider} = React.createContext()

class BountyProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            bounty: []

        }
    }

    getBounty = () => {
        Axios.get('http://localhost:8000/bounty').then(res => {
            this.setState({
                bounty: res.data
            })
        })
    }

    editBounty = (id, updatedBounty) => {
        Axios.put("http://localhost:8000/bounty/:_id" + id, updatedBounty).then(res => {
            this.setState(prev => {
                return{
                    bounty: prev.bounty.map(bounty => bounty._id === id ? res.data : bounty)
                }
                
            }) 
        })
    }

    createBounty = (newBounty) => {
        Axios.post("http://localhost:8000/bounty", newBounty).then(res => {
            this.setState(prev => {
                return {
                    bounty: [...prev.bounty, res.data]
                }
            })
        })
    }

    deleteBounty = id => {
        Axios.delete("http://localhost:8000/bounty/:_id" + id).then(res => {
            this.setState(prev => {
                return {
                    bounty: prev.bounty.filter(bounty => bounty._id !== id)
                }
            })
        })
    }



    render() {
        return (
            <Provider value = {{
                ...this.state,
                getBounty: this.getBounty,
                editBounty:this.editBounty,
                createBounty:this.createBounty,
                deleteBounty:this.deleteBounty
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default BountyProvider

export function withProvider (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...comp}/>}
                    </Consumer>
}
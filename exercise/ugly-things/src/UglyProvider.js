import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()


class UglyProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            ugly: []
        }
    }

    getAllUgly = () => {
        axios.get('https://api.vschool.io/Zach/todo/').then(res => {
            this.setState({ugly: res.data})
        })
    }

    deleteUgly = id => {
        axios.delete('https://api.vschool.io/Zach/todo/' + id).then(res => {
            this.setState(prev => {
                return{
                    ugly: prev.ugly.filter(ugly => ugly._id !== id)
                }
            })
        })
    }

    addUgly = newUgly => {
        axios.post('https://api.vschool.io/Zach/todo/', newUgly).then(res => 
            this.setState(prev => {
                return {
                    ugly: [...prev.ugly, res.data]
                }
            })
        )
    }

    editUgly = (id, updatedUgly) => {
        axios.put('https://api.vschool.io/Zach/todo/' + id, updatedUgly).then(res => {
            this.setState(prev => {
                return {
                    ugly: prev.ugly.map(ugly => ugly._id === id ? res.data : ugly)
                }
            })
        })
    }


    render(){
        return (
            <Provider value = {{
                ...this.state,
                getAllUgly: this.getAllUgly,
                deleteUgly: this.deleteUgly,
                addUgly: this.addUgly,
                editUgly: this.editUgly,
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default UglyProvider

export function withUgly (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props} />}
                    </Consumer>
}
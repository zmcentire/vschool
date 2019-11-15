import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    toggle = () => {
        this.setState(prev => {
            
            return {
                on: !prev.on
            }
        })
    }

    render(){
        return(
            <Provider value= {{
                ...this.state,
                toggle: this.toggle
            }}>
                {this.props.children}
            </Provider>

        )
    }
}

export default ThemeProvider

export function withTheme (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props} />}
                    </Consumer>
}
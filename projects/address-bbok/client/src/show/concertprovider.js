import React, {Component} from 'react';
import Axios from 'axios';
const concertAxios = Axios.create();
const {Consumer, Provider} = React.createContext();

concertAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class ConcertProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            concert: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
        }
    }

    getConcert = () => {
        concertAxios.get('/api/concert').then(res => {
            this.setState({
                concert: res.data
            })
        })
    }

    editConcert = (id, updatedConcert) => {
        concertAxios.put("/api/concert" + id, updatedConcert).then(res => {
            this.setState(prev => {
                return{
                    concert: prev.concert.map(concert => concert._id === id ? res.data : concert)
                }
            })
        })
    }

    createConcert = (newConcert) => {
        concertAxios.post("/api/concert", newConcert).then(res => {
            this.setState(prev => {
                return {
                    concert: [...prev.concert, res.data]
                }
            })
        })
    }

    deleteConcert = id => {
        concertAxios.delete("/api/concert" + id).then(res => {
            this.setState(prev => {
                return {
                    bounty: prev.bounty.filter(bounty => bounty._id !== id)
                }
            })
        })
    }

    signup = (userInfo) => {
        return concertAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response
            })
    }

    login = (credentials) => {
        return concertAxios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getConcert();
                return response
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            todos: [],
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <Provider value = {{
                ...this.state,
                getConcert: this.getConcert,
                editConcert: this.editConcert,
                createConcert: this.createConcert,
                deleteConcert: this.deleteConcert,
                signup: this.signup,
                login: this.login, 
                logout: this.logout
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ConcertProvider

export function withConcert (Comp){
    return props => <Consumer>
                        {value => <Comp {...value}{...props}/>}
                    </Consumer>
}
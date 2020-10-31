import React, {Component} from 'react';
import Users from './components/users';

const dotenv = require('dotenv');
dotenv.config();
const usersApi = process.env.API_URL;

class App extends Component {
    render() {
        return (
            <Users users={this.state.users}/>
        )
    }

    state = {
        users: []
    };

    componentDidMount() {
        const localOnly = 'http://localhost:3000/api/users/';

        fetch((usersApi === undefined) ? localOnly : usersApi + 'users/')
            .then(res => res.json())
            .then((data) => {
                this.setState({users: data})
            })
            .catch(console.log)
    }
}

export default App;

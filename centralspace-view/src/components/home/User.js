import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
    state = {
        user: null
    }
    componentDidMount() {
        let id = this.props.match.params.user_id;
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }


    render() {
        const user = this.state.user ? (
            <div className="user">
                <h4>User</h4>
                <p>{JSON.stringify(this.state.user)}</p>
            </div>

        ) : (
                <div className="center">Loading user...</div>
            )

        return (
            <div className="container">
                {user}
            </div>
        )
    }
}

export default User;
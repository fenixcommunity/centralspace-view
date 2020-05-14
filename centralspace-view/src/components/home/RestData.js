import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import daVinciImg from '../../resource/da_vinci.jpg'

class RestData extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:8088/app/api/cross/for77773?calledFrom=ddd') // returs promises
        // axios.get('https://jsonplaceholder.typicode.com/users') // returs promises
            .then(response => {
                this.setState({
                    users: response.data.slice(0, 10)
                })
                console.log(response)
            })
    }

    render() {
        const { users } = this.state;
        const userList = users.length ? (
            users.map(user => {
                return (
                    <div className="user card" key={user.id}>
                       <img src={daVinciImg} alt="human"/>
                        <div className="card-content">
                            <Link to={'/rest-data/' + user.id}>
                            <span className="card-title"> {user.name}</span>
                            </Link>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No users</div>
            )
        return (
            <div className="users container">
                {userList}
            </div>

        )
    }

}

export default RestData;
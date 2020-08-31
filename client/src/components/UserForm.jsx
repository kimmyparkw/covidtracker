//will have input for username, password, email, and submit
//ternary statements to toggle between edit, register, and login

import React from 'react'

class UserForm extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            email: '',
            username: '',
            password: '',
            
        })
    }

    handleFormChanges = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })

    }

    render() {
        return(
            <form onSubmit={(e) => this.props.handleFormSubmit(this.props.method, e, this.state, this.state.id)}>
                {this.props.userState.user && <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleFormChanges} />}
                <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleFormChanges} required/>
                <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleFormChanges} required/>
                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default UserForm
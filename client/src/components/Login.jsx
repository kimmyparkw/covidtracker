import React from 'react'
import UserForm from './UserForm'

class Login extends React.Component {
    constructor() {
        super()
        this.state = ({
            method: 'POST',
        })
    }
    render() {
            return (
                <div>
                    <h4>Login</h4>
                    <UserForm handleFormSubmit={this.props.handleFormSubmit} method={this.state.method} userState={this.props.userState} />
                    <span>New User? <a href='/user/new'>Click Here To Register</a></span>
                </div>
            )

        }
    
}
export default Login
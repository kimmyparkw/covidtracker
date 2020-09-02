import React from 'react'
import UserForm from './UserForm.jsx'

class Login extends React.Component {
    constructor() {
        super()
        this.state = ({
            method: 'POST',
            route: '/auth/login',
        })
    }
    render() {
            return (
                <div>
                    <h4>Login</h4>
                    <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} userState={this.props.userState} currentPage={this.props.currentPage}/>
                    <span>New User? <a href='/user/new'>Click Here To Register</a></span>
                    <div><span>{(this.props.userState.message) && this.props.userState.message}</span></div>
                </div>
            )

        }
    
}
export default Login
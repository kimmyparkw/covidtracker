import React from 'react'
import UserForm from './UserForm'

class Register extends React.Component {
    constructor() {
        super()
        this.state = ({
            method: 'POST',
        })
    }
    render() {
            return (
                <div>
                    <h4>Register</h4>
                    <UserForm handleFormSubmit={this.props.handleFormSubmit} method={this.state.method} userState={this.props.userState} currentPage={this.props.currentPage}/>
                </div>
            )

        }
    
}
export default Register
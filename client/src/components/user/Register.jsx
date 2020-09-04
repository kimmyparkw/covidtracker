import React from 'react'
import UserForm from './UserForm.jsx'

class Register extends React.Component {
    constructor() {
        super()
        this.state = ({
            method: 'POST',
            route: '/api/user/new',
        })
       
    }
    render() {
            return (
                <div>
                    <h4>Register</h4>
                    <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} userState={this.props.userState} currentPage={this.props.currentPage}/>
                </div>
            )

        }
    
}
export default Register
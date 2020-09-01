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
            <div className='form-container'>
                <h3>PLACEHOLDER - Edit User Info</h3>
                {console.log(this.props)}
                <form onSubmit={(e) => this.props.handleFormSubmit(this.props.method, e, this.state, this.props.currentPage)}>
                    {this.props.currentPage === 'new' && <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleFormChanges} />}
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleFormChanges} required/>
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleFormChanges} required/>
                    {this.props.currentPage === 'new' ? (<input type="submit" value="Register" />) : (<input type="submit" value="Login" />)}
                </form>
            </div>
        )
    }
}

export default UserForm
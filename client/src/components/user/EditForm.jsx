import React from 'react'
class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            username: '',
            password: '',
            
        })
        this.props.userState.user = {}
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
                <form onSubmit={(e) => this.props.handleFormSubmit(this.props.state.method, e, this.state, `/api/user/profile/${this.props.userState.user.id}`)}>
                    <input type="hidden" name="username" value={this.props.userState.user.username} placeholder={this.props.userState.user.username} onChange={this.handleFormChanges} readonly/>
                    <input type="email" name="email" value={this.state.email} placeholder={this.props.userState.user.email} onChange={this.handleFormChanges} />
                    <input type="password" name="password" value={this.state.password} placeholder="Update Password" onChange={this.handleFormChanges} />
                    <input type="submit" value="Save Changes" />
                    {this.props.userState.message && <p className='form-submit-message'>{this.props.userState.message}</p>}
                </form>
            </div>
        )
    }
}

export default EditForm
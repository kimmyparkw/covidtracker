import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/stateless/Header.jsx'
import Footer from './components/stateless/Footer.jsx'
import Home from './components/stateless/Home.jsx'
import About from './components/stateless/About.jsx'
import StateController from './components/data/StateController.jsx'
import Login from './components/user/Login.jsx'
import Register from './components/user/Register.jsx'
import EditProfile from './components/user/EditProfile.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
      message: null,
    }
  }
  
  componentDidMount = () => {
    console.log("Auth Check on Component Did Mount...(GET 400 Will follow if no current user logged in)", this.auth)
    fetch('/api/auth/login', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
          message: null,
        })
      }).catch(err => console.log(err))
  }
  
  
  handleFormSubmit = (method, e, data, route) => {
    e.preventDefault()
    console.log("submit data", data)
    fetch(route, { 
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
    .then(res => {
      console.log("submit res", res)
      this.setState({
        message: res.message,
        auth: res.auth,
        user: res.data.user,
      })
      if (res.message) {
        setTimeout(function() {
          this.setState({message: null})
        }.bind(this), 5000)
      }
      
    }).catch(err => {
      console.log(err)
    })
  }

  logout = () => {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <Header auth={this.state.auth} logout={this.logout}/>
       <div className="main">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/stats' render={() => (<StateController currentPage='index' />)} />
        <Route exact path='/user/profile' render={() => (
          this.state.auth
          ? <StateController currentPage='profile' />
          : <Redirect to='/auth/login' />
          )} />
        <Route exact path='/user/profile/:id' render={() => (<EditProfile component={this.componentDidMount} handleFormSubmit={this.handleFormSubmit} userState={this.state} currentPage='edit'/>)}/>  
        <Route exact path='/stats/:id' render={props => (<StateController currentPage='show' currentId={props.match.params.id} userState={this.state}/>)} />
        <Route exact path='/auth/login' render={() => (
          this.state.auth
              ? <Redirect to='/user/profile' />
              : <Login handleFormSubmit={this.handleFormSubmit} userState={this.state} currentPage='login'/>
        )}/>
        <Route exact path='/user/new' render={() => (
          this.state.auth
              ? <Redirect to='/user/profile'/>
          : <Register handleFormSubmit={this.handleFormSubmit} userState={this.state} currentPage='new'/>
          )} />
        <Route exact path='/auth/logout' component={Home}/>  
       </div>
       <Footer />
      </div>
    );
  }
}


export default App;

import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import StateController from './components/StateController.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
    }
  }

  
  // handleFormSubmit = (method, e, data, id) => {
  //   const submitTernary = this.state.user ? '/user' : '/user/profile/:id'
  //   e.preventDefault()
  //   console.log("submit data", data)
  //   fetch( submitTernary , { 
  //     method: method,
  //     header: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify(data),
  //   }) .then(res => res.json())
  //   .then(res => {
  //     console.log("submit res", res)
  //     this.setState({
  //       auth: res.auth,
  //       user: res.data.user,
  //     })
  //   }).catch(err => console.log(err))

  // }

  logout = () => {
    fetch('/auth/logout', {
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
       <Header />
       <div className="container">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/stats' render={() => (<StateController currentPage='index' />)} />
        <Route exact path='/stats/hash' render={() => (<StateController currentPage='show' />)} />
        <Route exact path='/auth/login' render={() => (
          this.state.auth
          ? <Redirect to='/user/profile' />
          : <Login />
        )}/>
        <Route exact path='/user/new' render={() => (
          this.state.auth
          ? <Redirect to='/user/profile' />
          : <Register />
        )} />
       </div>
       <Footer />
      </div>
    );
  }
}


export default App;

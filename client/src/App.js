import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
// import Login from './components/Login.jsx'
// import Register from './components/Register.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
    }
  }

  handleFormSubmit = (method, e, data, id) => {
    e.preventDefault()
    console.log("submit data", data)
    fetch('/api/user/new', { //possible to ternary the fetch link?
      method: method,
      header: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }) .then(res => res.json())
    .then(res => {
      console.log("submit res", res)
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err))

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
       <Header />
       <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={} />
  
       </div>
       <Footer />
      </div>
    );
  }
}


export default App;

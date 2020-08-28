import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <div className="App">
     <Header />
     <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={}

     </div>
     <Footer />
    </div>
  );
}

export default App;

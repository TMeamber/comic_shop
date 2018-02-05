import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import About_us from './components/About_us';
import Home from './components/Home';
import Contact_us from './components/Contact_us';
import { Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className='logo'>
      <div className="navbar">
        <Link to='/'>
        <div className='Home'>Home</div>
        </Link>
        <Link to='/Products'>
        <div className='Products'>Products</div>
        </Link>
        <Link to='/About_us'>
        <div className='About_us'>About Us</div>
        </Link>
        <Link to='/Contact_us'>
        <div className='Contact_us'>Contact Us</div>
        </Link>
        <div className='routes'>
        <Route exact path='/' component={Home}/>
        <Route path='/Products' component={Products}/>
        <Route path='/About_Us' component={About_us}/>
        <Route path='/Contact_us' componet={Contact_us}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;

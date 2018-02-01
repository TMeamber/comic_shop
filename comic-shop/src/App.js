import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import About_us from './components/About_us.js';
import { Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to='/Products'>
        <div className='Products'>Products</div>
        </Link>
        <Link to='/About_us'>
        <div className='About_us'>About Us</div>
        </Link>
        <Route path='/Products' component={Products}/>
        <Route path='/About_Us' component={About_us}/>
      </div>
    );
  }
}

export default App;

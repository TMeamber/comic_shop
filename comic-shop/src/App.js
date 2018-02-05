import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import About_us from './components/About_us';
import Home from './components/Home';
import Contact_us from './components/Contact_us';
import Marvel from './components/Marvel.svg.png';
import DC from './components/DC.png';
import { Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div>
      <div className='logos'>
      <img className='Marvel' alt='' src={Marvel}/>
      <img className='DC' alt='' src={DC}/>
      </div>
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

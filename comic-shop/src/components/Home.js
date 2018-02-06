import React, { Component } from 'react';
import './Home.css';
import CC from './CC.jpg';


export default class Home extends Component{
    render () {
        return(
            <div>
                <div className='Image'>
            <img className='CC' alt='' src={CC}/> 
            </div>
            </div>
        )
    }
}
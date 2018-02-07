import React, { Component } from 'react';
import './Products.css';
import comics from './flashpoint.jpg';
import figures from './figures.jpg';
import vinyl from './vinyl.jpg';
import cards from './cards.jpg';

export default class Products extends Component{
    render () {
        return(
            <div>
                <div className='products'>
                <img className='comics' alt='' src={comics}/> 
                <img className='vinyl' alt='' src={vinyl}/>
                <img className='cards' alt='' src={cards}/>  
                <img className='figures' alt='' src={figures}/> 
                </div>
            </div>
        )
    }
}
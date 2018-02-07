import React, { Component } from 'react';
import './Contact_us.css';
import CC from './CC.jpg';


export default class Contact_us extends Component{
    render () {
        return(
            <div>
                <img className='CC' alt='' src={CC}/> 
                <div className='info'>
               <p>Contact us at (530) 222-8750</p>
               <p>Come see us at our location at 1714 Churn Creek Rd, Redding, CA 96002</p>
               <p>Our hours are 10 AM to 6 PM Monday - Saturday and closed Sundays and Major Holidays</p>
               </div>
            </div>
        )
    }
}
import React from 'react';
import error_graphic from '../media/error_smaller.png';

export default function ErrorPage () {
    return (
        <div className="error-page">

            <div className="error-graphics">
            <h1> Oops ... looks like something went wrong .... </h1>


            <img src={error_graphic} alt="Not Found" width={500} height= {500} 
            style={{display: 'block', margin: 'auto'}}/>

            <h4> Take me back to the </h4>
                <h4>
                <a href="landing.html" style={{textDecorationLine: 'underline', color: 'blue'}}> Home Page </a>
                <a href="/" style={{textDecorationLine: 'underline', color: 'blue'}}> Log In Page </a> 
                </h4>

            </div>
        </div>
    );
}
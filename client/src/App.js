/**
 * This file holds the main access to the Log In/Sign Up page.
 * It renders a Header class, LogIn class and SignUp class.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import './App.css';
import Header from './components/Header';
import MainLogInSignUp from './components/MainLogInSignUp';
import hi_anim from './media/hi_anim.mp4';
import hi from './media/hi.jpg';

// function to create the Log In/Sign Up page
function App() {

  return (
    <div>
      <Header />
      {/* LogIn and SignUp will appear side by side */}
      <div className="main-display">
        <div className="image-display">
          <video className="image-display" id="welcome-video" muted autoPlay poster={hi} loop 
          src={hi_anim} width="400" height="400" onContextMenu="return false">
          </video> 
        </div>
        <div className="tab-display">  
          <MainLogInSignUp />
        </div>  
    </div>
    </div>
  )
}

export default App;

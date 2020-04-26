/**
 * This file holds the main access to the Log In/Sign Up page.
 * It renders a Header class, LogIn class and SignUp class.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import './App.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';


// function to create the Log In/Sign Up page
function App() {
  return (
    <div>
      <Header />
      {/* LogIn and SignUp will appear side by side */}
      <div className="main-display">
        <LogIn />
        <SignUp />
      </div>
    </div>
  )
}

export default App;

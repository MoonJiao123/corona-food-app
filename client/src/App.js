/**
 * This file holds the main access to the Log In/Sign Up page.
 * It renders a Header class, LogIn class and SignUp class.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import './App.css';
import BusinessDashboardParent from './components/BusinessDashboardParent'


// function to create the Log In/Sign Up page
// THIS BRANCH ONLY SHOWS THE BUSINESS PAGE
function App() {
  return (
    <div>
      <BusinessDashboardParent/>
    </div>
  )
}

export default App;
/**
 * This file holds the main access to the Log In/Sign Up page.
 * It renders a Header class, LogIn class and SignUp class.
 * 
 * Contributors: Tabassum Alam, Darien
 */

import React from 'react';
import './App.css';
import Header from './components/Header';
import MainLogInSignUp from './components/MainLogInSignUp';
import hi_anim from './media/hi_anim.mp4';
import hi from './media/hi.jpg';
import nametag_anim from './media/nametag_anim.mp4';
import nametag from './media/nametag.jpg'

// function to create the Log In/Sign Up page
function App() {

  function disable(e){
    e.preventDefault();
  }

  //Videos JSX
  let loginVid = <video className="image-display" id="welcome-video" muted autoPlay poster={hi} loop 
                  src={hi_anim} onContextMenu={disable}>
                 </video> ;
  let signVid = <video className="image-display" id="welcome-video" muted autoPlay poster={nametag} loop 
                  src={nametag_anim} onContextMenu={disable}>
                </video> ;

  // Logic for switching illustration displayed
  const [vid, setVid] = React.useState(loginVid);
  function mediaWrapper(tabIdx){
    setVid(tabIdx===0?loginVid:signVid);
  }

  return (
    <div id="account-parent">
      <Header />
      {/* LogIn and SignUp will appear side by side */}
      <div className="main-display" id="main-display">
        <div className="image-display">
          {vid}
        </div>
        <div className="tab-display">  
          <MainLogInSignUp vid={mediaWrapper}/>
        </div>  
      </div>
    </div>
  )
}

export default App;

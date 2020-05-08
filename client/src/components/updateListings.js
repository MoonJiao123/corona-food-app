/** --------------------------------------------------------------------
Contributors: Darien Tsai
Components for updating items
--------------------------------------------------------------------- */

import React from 'react'
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

/* ---------------------------------------------------------------------
An individual, editable listing
--------------------------------------------------------------------- */
class ListingForm extends React.Component{

  render(){
    <div className="updatableListing">
      <input></input>
    </div>
  }
}

/* ---------------------------------------------------------------------
Popup for editting listings
--------------------------------------------------------------------- */
class UpdateListings extends React.Component{

  //TODO: load in props
  render(){
    //Map to updatable listings

    //return popup form
    return(
    <div id="updateListings" className={this.props.toggle}>

      <div id="updateList">

      </div>
      
      <div id="updateControls">
        <button>+</button>
        <button>save</button>
        <button>cancel</button>
      </div>
    </div>  
  );
  }
}
export default UpdateListings;
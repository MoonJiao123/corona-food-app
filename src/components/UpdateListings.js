/** --------------------------------------------------------------------
Contributors: Darien Tsai
Components for updating items
--------------------------------------------------------------------- */

import React from 'react'
import Button from '@material-ui/core/Button';
import ListingForm from './ListingForm';

/* ---------------------------------------------------------------------
Popup for editting listings
--------------------------------------------------------------------- */
class UpdateListings extends React.Component{

  render(){
    //return popup form
    return(
      <div id="updateWrapper" className={this.props.data}>

        {/** Popup body */}
        <div id="updateListings">

          {/** Contains all listings */}
          {/** TODO: Keys */}
          <div id="updateList">
            {this.props.initial}
          </div>

          {/** Submit, Add, Cancel buttons */}
          <div id="updateControls">
            <button id="addListing" onClick={this.props.action.addListing}>+</button>
            <Button variant="contained" onClick={this.props.action.submitUpdate}>Save</Button>
            <Button variant="contained" id="cancelUpdate" onClick={this.props.action.closeForm}>Cancel</Button>
          </div>
        </div>  
      </div>
    );
  }
}
export default UpdateListings;
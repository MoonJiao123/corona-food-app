/** --------------------------------------------------------------------
Contributors: Darien Tsai
High level component for business dashboard.
--------------------------------------------------------------------- */

import React from 'react'
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

/* ---------------------------------------------------------------------
Popup form for a new business location
--------------------------------------------------------------------- */
class AddLocation extends React.Component{
  
  //TODO: load in props
  render(){
    return(
    <div id="addLocation-form" className={this.props.toggle}>
      <form id="addLocation">

        {/** Form Title */}
        <h1>Add a location</h1>

        {/** Form Text inputs */}
        <TextField fullWidth label="Location Name" />
        <TextField fullWidth label="Street" />
        <div id="addLocation-smalls">
          <TextField label="City" />
          <TextField label="State" />
          <TextField fullWidth label="Zip" />
        </div>

        {/** Form Submission */}
        <div id="addLocation-buttons">
          <Button onClick={this.props.data.submitNewLocation} variant="contained">Add Location</Button>
          <button onClick={this.props.data.closeForm} id="addLocation-cancel">cancel</button>
        </div>
      </form>
    </div>  
  );
  }
}
export default AddLocation;
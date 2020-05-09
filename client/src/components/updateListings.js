/** --------------------------------------------------------------------
Contributors: Darien Tsai
Components for updating items
--------------------------------------------------------------------- */

import React from 'react'
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

/* ---------------------------------------------------------------------
An individual, editable listing
--------------------------------------------------------------------- */
class ListingForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      category: "none",
    }
  }

  //event handlers
  handleChange = (event) => {
    this.setState({category: event.target.value});
  };

  render(){
    <div className="updatableListing">
      <input type="file" accept=".jpg,.jpeg,.png">Image</input>

      <FormControl variant="filled">
        <InputLabel id="category select">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Vegetable</MenuItem>
          <MenuItem value={20}>Meat</MenuItem>
          <MenuItem value={30}>Grain</MenuItem>
          <MenuItem value={40}>Fruit</MenuItem>
          <MenuItem value={50}>Dairy</MenuItem>
          <MenuItem value={60}>Snack</MenuItem>
        </Select>
      </FormControl>

      <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="filled-basic" label="Amount" variant="filled" />
      <TextField id="filled-basic" label="Price" variant="filled" />
      <TextField id="filled-basic" label="Expiration" variant="filled" />
      <TextField id="filled-basic" label="min - max % off" variant="filled" />
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
          <ListingForm/>
        </div>
        
        <div id="updateControls">
          <button>+</button>
          <Button variant="contained">Default</Button>
          <Button variant="contained">Default</Button>
        </div>
      </div>  
    );
  }
}
export default UpdateListings;
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

    //state design
    this.state = {
      category: "none",
      fileInput: <input type="file" accept=".jpg,.jpeg,.png" className="updateFile" ref={input => this.imgFile = input}/>
    }

    //bindings
    this.handleSelect = this.handleSelect.bind(this);
    this.handleImg = this.handleImg.bind(this);
  }

  //event handlers
  handleSelect = (event) => {
    this.setState({category: event.target.value});
  };

  handleImg = (e) => {
    e.preventDefault();
    this.imgFile.click();
  }

  //render
  render(){    
    return(
      <form className="updatableListing">

        {/** Image upload */}
        <button className="updateFileWrap" onClick={this.handleImg}>Image</button>
        {this.state.fileInput}

        {/** Dropdown selection for category */}
        <FormControl>

          {/** Dropdown Button */}
          <InputLabel className="category-select">Category</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            className="updateSelect"
            value={this.state.category}
            onChange={this.handleSelect}
          >

            {/** Dropdown Options */}
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

        {/** Text inputs */}
        <TextField className="updateField" label="Name" />
        <TextField className="updateField" label="Amount" />
        <TextField className="updateField" label="Price" />
        <TextField className="updateField" label="min - max%" />

        {/** Expiration Date input */}
        <TextField
          id="date"
          label="Expiration"
          type="date"
          className="upDate"
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/** Remove button */}
        <button className="removeListing">-</button>
      </form>
    );
  }
}

/* ---------------------------------------------------------------------
Popup for editting listings
--------------------------------------------------------------------- */
class UpdateListings extends React.Component{

  //TODO: load in props

  render(){
    //TODO: Map to updatable listings

    //return popup form
    return(
      <div id="updateWrapper" className={this.props.toggle}>

        {/** Popup body */}
        <div id="updateListings">

          {/** Contains all listings */}
          {/** TODO: Keys */}
          <div id="updateList">
            <ListingForm/>
            <ListingForm/>
            <ListingForm/>
          </div>

          {/** Submit, Add, Cancel buttons */}
          <div id="updateControls">
            <button id="addListing">+</button>
            <Button variant="contained" onClick={this.props.data.submitUpdate}>Save</Button>
            <Button variant="contained" id="cancelUpdate" onClick={this.props.data.closeForm}>Cancel</Button>
          </div>
        </div>  
      </div>
    );
  }
}
export default UpdateListings;
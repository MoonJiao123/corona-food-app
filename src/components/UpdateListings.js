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
      fileInput: <input type="file" accept=".jpg,.jpeg,.png" className="updateFile" ref={input => this.imgFile = input}/>,
      category: this.props.data.category,
      name: this.props.data.name,
      amount: this.props.data.amout,
      price: this.props.data.price,
      discount: this.props.data.discount,
      expiration: this.props.data.expiration
    }

    //bindings
    this.handleImg = this.handleImg.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleDiscount = this.handleDiscount.bind(this);
    this.handleExpiration = this.handleExpiration.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.objectify = this.objectify.bind(this);
  }

  //event handlers
  handleImg = (e) => {
    e.preventDefault();
    this.imgFile.click();
  }

  handleSelect = (event) => {
    this.setState({category: event.target.value});
    this.props.data.onChange(this.props.data.idx, this.objectify("sel", event.target.value));
  };

  handleName = (event) => {
    this.setState({name: event.target.value});
    this.props.data.onChange(this.props.data.idx, this.objectify("nam", event.target.value));
  }

  handleAmount = (event) => {
    this.setState({amount: event.target.value});
    this.props.data.onChange(this.props.data.idx, this.objectify("amo", event.target.value));
  }

  handlePrice = (event) => {
    this.setState({price: event.target.value});
    this.props.data.onChange(this.props.data.idx, this.objectify("pri", event.target.value));
  }

  handleDiscount = (event) => {
    this.setState({discount: event.target.value});
    this.props.data.onChange(this.props.data.idx, this.objectify("dis", event.target.value));
  }

  handleExpiration = (event) => {
    this.setState({expiration: event.target.value});
    this.props.data.onChange(this.props.data.idx, this.objectify("exp", event.target.value));
  }

  handleRemove = (event) => {
    event.preventDefault();
    this.props.data.remove(this.props.data.idx);
  }

  objectify = (field, value) => {
    let obj = {
      image:'',
      category: field==="sel"?value:this.state.category,
      name: field==="nam"?value:this.state.name,
      amount: field==="amo"?value:this.state.amount,
      price: field==="pri"?value:this.state.price,
      rate: field==="dis"?value:this.state.discount,
      expiration: field==="exp"?value:this.state.expiration,
      idx: this.props.data.idx,
      remove: this.props.data.remove,
      onChange: this.props.data.onChange
    };
    return(obj);
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
            <MenuItem value={"None"}>None</MenuItem>
            <MenuItem value={"Vegetable"}>Vegetable</MenuItem>
            <MenuItem value={"Meat"}>Meat</MenuItem>
            <MenuItem value={"Grain"}>Grain</MenuItem>
            <MenuItem value={"Fruit"}>Fruit</MenuItem>
            <MenuItem value={"Dairy"}>Dairy</MenuItem>
            <MenuItem value={"Snack"}>Snack</MenuItem>
          </Select>
        </FormControl>

        {/** Text inputs */}
        <TextField className="updateField" label="Name" value={this.state.name} onChange={this.handleName}/>
        <TextField className="updateField" label="Amount" value={this.state.amount} onChange={this.handleAmount}/>
        <TextField className="updateField" label="Price" value={this.state.price} onChange={this.handlePrice}/>
        <TextField className="updateField" label="min - max%" value={this.state.discount} onChange={this.handleDiscount}/>

        {/** Expiration Date input */}
        <TextField
          className="date"
          label="Expiration"
          type="date"
          className="upDate"
          value={this.state.expiration}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleExpiration}
        />

        {/** Remove button */}
        <button className="removeListing" onClick={this.handleRemove}>-</button>
      </form>
    );
  }
}

/* ---------------------------------------------------------------------
Popup for editting listings
--------------------------------------------------------------------- */
class UpdateListings extends React.Component{

  constructor(props){
    super(props);

    //state design
    this.state = {
      listings: [],
      list: '',
      idx: -1,
      key: 0
    }

    //parse props into state

    //bindings
    this.remove = this.remove.bind(this);
    this.onChange = this.onChange.bind(this);
    this.addListing = this.addListing.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  //remove a listing at an index
  remove = (idx) => {
    //find and remove by idx
    let listings = this.state.listings;
    let list = this.state.list;
    let rem = 0;
    
    for(let i = 0; i < listings.length; i++){
      if(listings[i].idx == idx){
        rem = i;
        break;
      }
    }

    listings.splice(rem, 1);
    list.splice(rem, 1);

    //reset state
    this.setState({listings: listings, list: list});
  }

  //field change handler by index
  onChange = (idx, obj) => {
    //find and change by index
    let listings = this.state.listings;
    let mod = 0;
    
    for(let i = 0; i < listings.length; i++){
      if(listings[i].idx == idx){
        mod = i;
        break;
      }
    }
    listings[mod] = obj;
    this.setState({listings: listings});
  }

  //add a listing
  addListing = (e) => {
    let listings = this.state.listings;
    let list = this.state.list;
    let newListing = {
      image:'',
      category:'',
      name: '',
      amount: '',
      price: '',
      rate: '',
      expiration: '',
      idx: this.state.idx,
      remove: this.remove,
      onChange: this.onChange
    }
    let newList = (<ListingForm data={newListing} key={this.state.key}/>)
    listings.push(newListing);
    list.push(newList);
    this.setState({listings: listings, list: list, key: this.state.key+1, idx: this.state.idx-1});
  }

  //save listings
  handleSave = (e) =>{
    this.props.data.submitUpdate(this.state.listings)
  }

  render(){
    //return popup form
    return(
      <div id="updateWrapper" className={this.props.toggle}>

        {/** Popup body */}
        <div id="updateListings">

          {/** Contains all listings */}
          {/** TODO: Keys */}
          <div id="updateList">
            {this.state.list}
          </div>

          {/** Submit, Add, Cancel buttons */}
          <div id="updateControls">
            <button id="addListing" onClick={this.addListing}>+</button>
            <Button variant="contained" onClick={this.handleSave}>Save</Button>
            <Button variant="contained" id="cancelUpdate" onClick={this.props.data.closeForm}>Cancel</Button>
          </div>
        </div>  
      </div>
    );
  }

  componentDidMount(){
    //Map all listings to ListingForms
    let list = this.state.listings.map(
      (obj)=>{
        return(<ListingForm data={obj} key={this.state.key}/>);
      }
    );
    this.setState({list: list, key: this.state.key+1});
  }
}
export default UpdateListings;
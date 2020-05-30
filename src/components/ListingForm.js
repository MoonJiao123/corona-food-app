import React from 'react'
import {TextField} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
/* ---------------------------------------------------------------------
An individual, editable listing
--------------------------------------------------------------------- */
class 
ListingForm extends React.Component{

  constructor(props){
    super(props);

     /*
    this.nameError = !this.props.data.name ? "Required" : "";
    this.amountError = !this.props.data.amount || !Number(this.props.data.amount) ? "Required (numbers only)" : "";
    this.priceError = !this.props.data.price || !Number(this.props.data.price) ? "Required (numbers only)" : "";
    this.discountError = !this.props.data.rate ? "Required" : "";
    this.expirationError = !this.props.data.expiration ? "Required" : "";
     */

    this.props.data.linkError = this.props.data.image && !this.props.data.image.includes('.') ? "Enter valid link" : "";
    this.props.data.nameError = !this.props.data.name ? "Required" : "";
    this.props.data.amountError = !this.props.data.amount || !Number(this.props.data.amount) ? "Required (numbers only)" : "";
    this.props.data.priceError = !this.props.data.price || !Number(this.props.data.price) || Number(this.props.data.price) > 1000 ? "Required (numbers < 1000 only)" : "";
    this.props.data.discountError = !this.props.data.rate || !Number(this.props.data.rate) ? "Required (numbers only)" : "";
    this.props.data.expirationError = !this.props.data.expiration || new Date(this.props.data.expiration) < new Date().setDate(new Date().getDate() - 1) ? "Required (enter future date)" : "";

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
    this.listingSubmit = this.listingSubmit.bind(this);
  }

  //event handlers
  handleImg = (event) =>   {
    this.props.data.onChange(this.props.data.idx, this.objectify("img", event.target.value), 0);
  }

  handleSelect = (event) => {
    this.props.data.onChange(this.props.data.idx, this.objectify("sel", event.target.value), 1);
  };

  handleName = (event) => {
    this.props.data.onChange(this.props.data.idx, this.objectify("nam", event.target.value), 2);
  }

  handleAmount = (event) => {
    this.props.data.onChange(this.props.data.idx, this.objectify("amo", event.target.value), 3);
  }

  handlePrice = (event) => {
    this.props.data.onChange(this.props.data.idx, this.objectify("pri", event.target.value), 4);
  }

  handleDiscount = (event) => {
    this.props.data.onChange(this.props.data.idx, this.objectify("dis", event.target.value), 5);
  }

  handleExpiration = (event) => {
    this.props.data.onChange(this.props.data.idx, this.objectify("exp", event.target.value), 6);
  }

  handleRemove = (event) => {
    event.preventDefault();
    this.props.data.remove(this.props.data.idx);
  }

  listingSubmit = (event) => {
    if(event.keyCode === 13){
      event.preventDefault();
    }
  }

  objectify = (field, value) => {
    let obj = {
      image: field==="img"?value:this.props.data.image,
      category: field==="sel"?value:this.props.data.category,
      name: field==="nam"?value:this.props.data.name,
      amount: field==="amo"?value:this.props.data.amount,
      price: field==="pri"?value:this.props.data.price,
      rate: field==="dis"?value:this.props.data.rate,
      expiration: field==="exp"?value:this.props.data.expiration,
      idx: this.props.data.idx,
      remove: this.props.data.remove,
      onChange: this.props.data.onChange,
      product_id: this.props.data.product_id
    };
    return(obj);
  }

  //render
  render(){    
    return(
      <form className="updatableListing" onSubmit={this.listingSubmit}>

        {/** Image link */}
        <TextField className="updateField" label="Img Link" type="url" value={this.props.data.image} onChange={this.handleImg} inputRef={input => this.img = input} helperText={this.props.data.linkError} onKeyDown={this.listingSubmit}/>

        {/** Dropdown selection for category */}
        <FormControl>

          {/** Dropdown Button */}
          <InputLabel className="category-select">Category</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            className="updateSelect"
            value={this.props.data.category}
            onChange={this.handleSelect}
          >

            {/** Dropdown Options */}
            <MenuItem value={"None"}>None</MenuItem>
            <MenuItem value={"Vegetable"}>Vegetable</MenuItem>
            <MenuItem value={"Meat"}>Meat</MenuItem>
            <MenuItem value={"Seafood"}>Seafood</MenuItem>
            <MenuItem value={"Grain"}>Grain</MenuItem>
            <MenuItem value={"Fruit"}>Fruit</MenuItem>
            <MenuItem value={"Dairy"}>Dairy</MenuItem>
            <MenuItem value={"Snack"}>Snack</MenuItem>
          </Select>
        </FormControl>

        {/** Text inputs */}
        <TextField className="updateField" label="Name" value={this.props.data.name} onChange={this.handleName} inputRef={input => this.nam = input} helperText={this.props.data.nameError} onKeyDown={this.listingSubmit}/>
        <TextField className="updateField" label="Amount" value={this.props.data.amount} onChange={this.handleAmount} inputRef={input => this.amo = input} helperText= {this.props.data.amountError} onKeyDown={this.listingSubmit}/>
        <TextField className="updateField" label="Price" value={this.props.data.price} onChange={this.handlePrice} inputRef={input => this.pri = input} helperText= {this.props.data.priceError} onKeyDown={this.listingSubmit}/>
        <TextField className="updateField" label="Discount" value={this.props.data.rate} onChange={this.handleDiscount} inputRef={input => this.dis = input} helperText={this.props.data.discountError} onKeyDown={this.listingSubmit}/>

        {/** Expiration Date input */}
        <TextField
          label="Expiration"
          type="date"
          className="upDate date"
          value={this.props.data.expiration}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.handleExpiration}
          inputRef={input => this.exp = input}
          helperText={this.props.data.expirationError}
        />

        {/** Remove button */}
        <button className="removeListing" onClick={this.handleRemove}>-</button>
      </form>
    );
  }

  componentDidMount(){
    if(this.props.focus !== 7 && this.props.focus !== 1){
      switch(this.props.focus){
        case 0:
          this.img.focus();
          break;
        case 2:
          this.nam.focus();
          break;
        case 3:
          this.amo.focus();
          break;
        case 4:
          this.pri.focus();
          break;
        case 5:
          this.dis.focus();
          break;
        case 6:
          this.exp.focus();
          break;
        default:
          break;
      }
    }
  }
}
export default ListingForm;
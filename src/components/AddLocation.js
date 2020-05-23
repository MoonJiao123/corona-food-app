/** --------------------------------------------------------------------
Contributors: Darien Tsai , Tabassum (validation)
High level component for business dashboard.
--------------------------------------------------------------------- */

import React from 'react'
import {TextField, FormHelperText} from '@material-ui/core';
import Button from '@material-ui/core/Button';

/* ---------------------------------------------------------------------
Popup form for a new business location
--------------------------------------------------------------------- */
class AddLocation extends React.Component{

  //State will track of field values
  constructor(props){
    super(props);

    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',

      nameError: '',
      streetError: '',
      cityError: '',
      stateError: '',
      zipError: ''
    };

    //bindings
    this.handleName = this.handleName.bind(this);
    this.handleStreet = this.handleStreet.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleName = (e) => {
    this.setState({name: e.target.value});
  }

  handleStreet = (e) => {
    this.setState({street: e.target.value});
  }

  handleCity = (e) => {
    this.setState({city: e.target.value});
  }

  handleState = (e) => {
    this.setState({state: e.target.value});
  }

  handleZip = (e) => {
    this.setState({zip: e.target.value});
  }

  validate = () => { 
    let nameError = "";
    let streetError = "";
    let cityError = "";
    let stateError = "";
    let zipError = "";

    if (!this.state.name) {
      nameError = "Please enter a location name";
    }

    if (!this.state.street) {
      streetError = "Please enter a street";
    }

    if (this.state.city.length < 2 || !isNaN(this.state.city)) {
      cityError = "Invalid City";
    }

    if (this.state.state.length < 2 || !isNaN(this.state.state)) {
      stateError = "Invalid State";
    }

    if (isNaN(this.state.zip) || this.state.zip.length < 5) {
      zipError = "Invalid Zip Code";
    }

    if (nameError || streetError || cityError || stateError || zipError) {
      this.setState({nameError, streetError, cityError, stateError, zipError})
      return false;
    }

    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      let location = this.state;
      this.props.action.submitNewLocation(location);
      this.setState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        nameError: '',
        streetError: '',
        cityError: '',
        stateError: '',
        zipError: ''
      });
      this.props.action.closeForm();
    }
  }

  handleCancel = () => {
    //Form result
    this.setState({
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      nameError: '',
      streetError: '',
      cityError: '',
      stateError: '',
      zipError: ''
    });
    this.props.action.closeForm();
  }
  
  //TODO: load in props
  render(){
    return(
    <div id="addLocation-form" className={this.props.data}>
      <div id="addLocation">

        {/** Form Title */}
        <h1>Add a location</h1>

        {/** Form Text inputs */}
        <TextField fullWidth label="Location Name" value={this.state.name} onChange={this.handleName} helperText={this.state.nameError}/>
        <TextField fullWidth label="Street" value={this.state.street} onChange={this.handleStreet} helperText={this.state.streetError}/>

        <div id="addLocation-smalls">
          <TextField label="City" value={this.state.city} onChange={this.handleCity} helperText={this.state.cityError}/>
          <TextField label="State" value={this.state.state} onChange={this.handleState} helperText={this.state.stateError}/>
          <TextField label="Zip" value={this.state.zip} onChange={this.handleZip} helperText={this.state.zipError}/>    
        </div>

        {/** Form Submission */}
        <div id="addLocation-buttons">
          <Button onClick={this.handleSubmit} variant="contained">Add Location</Button>
          <button onClick={this.handleCancel} id="addLocation-cancel">cancel</button>
        </div>
      </div>
    </div>  
  );
  }
}
export default AddLocation;
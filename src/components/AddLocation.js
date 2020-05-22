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

  //State will track of field values
  constructor(props){
    super(props);

    this.state = {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
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

  handleSubmit = (e) => {
    e.preventDefault();
    let location = this.state;
    this.props.action.submitNewLocation(location);
    this.props.action.closeForm();
  }

  handleCancel = () => {
    this.setState({
      name: '',
      street: '',
      city: '',
      state: '',
      zip: ''
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
        <TextField fullWidth label="Location Name" value={this.state.name} onChange={this.handleName}/>
        <TextField fullWidth label="Street" value={this.state.street} onChange={this.handleStreet}/>
        <div id="addLocation-smalls">
          <TextField label="City" value={this.state.city} onChange={this.handleCity}/>
          <TextField label="State" value={this.state.state} onChange={this.handleState}/>
          <TextField fullWidth label="Zip" value={this.state.zip} onChange={this.handleZip}/>
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
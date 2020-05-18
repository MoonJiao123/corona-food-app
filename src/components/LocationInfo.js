/** --------------------------------------------------------------------
Contributors: Darien Tsai
Right sidebar of Business Dashboard - shows information for select location
--------------------------------------------------------------------- */

import React from 'react'
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import LocationInfoListing from './LocationInfoListing';

class LocationInfo extends React.Component{

  /* ---------------------------------------------------------------------
  Render: Will display Address, products, product list, and an upload icon
  --------------------------------------------------------------------- */
  render(){
    //Map products list to listing components
    let keyIdx = 0;
    const LocationInfoListings = this.props.data.productsList.map(
      (item)=> <LocationInfoListing
      key={item.name + keyIdx++}
      name={item.name}
      price={item.price}
      expire={item.expiration}
      ></LocationInfoListing>
    );

    // Return the right sidebar, render data with passed in props
    return(
      <div id="locationInfo">
        {/** Business address */}
        <h1 id="locationInfo-address">{this.props.data.address}</h1>

        {/** Number of listings for selected location*/}
        <div id="locationInfo-listing-count">
          <h3>{this.props.data.totalProducts}</h3>
          <p>Listings</p>
        </div>

        {/** Simplified list of items */}
        <div id="locationInfo-list">
          {LocationInfoListings}
        </div>

        {/** Buttons for updating and deleting location*/}
        <div id="LocationInfoControls">
          <Button
          onClick={this.props.data.updateProducts}
          className="update-listing-button"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<CreateIcon/>}
          >
          Update Listing
          </Button>
          <Button
          onClick={this.props.data.updateProducts}
          className="update-listing-button"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DeleteIcon/>}
          >
          Delete Location
          </Button>
        </div>
      </div>
    );
  }
}

export default LocationInfo;
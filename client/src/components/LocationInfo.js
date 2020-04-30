/** --------------------------------------------------------------------
Contributors: Darien Tsai
Right sidebar of Business Dashboard - shows information for select location
--------------------------------------------------------------------- */

import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class LocationInfo extends React.Component{

  /* ---------------------------------------------------------------------
  Render: Will display Address, products, product list, and an upload icon
  --------------------------------------------------------------------- */
  render(){
    return(
      <div id="locationInfo">
        <h1 id="locationInfo-address">{this.props.data.address}</h1>

        <div id="locationInfo-listing-count">
          <h3>{this.props.data.totalProducts}</h3>
          <p>Listings</p>
        </div>

        <div id="locationInfo-list">
          {/* TODO: Map products list here  */}
        </div>
        
        <Button
        onClick={this.props.data.updateProducts()}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<ArrowUpwardIcon/>}
        >
        Update Listing
        </Button>
      </div>
    );
  }
}
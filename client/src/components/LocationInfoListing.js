/** --------------------------------------------------------------------
Contributors: Darien Tsai
Reusable listing for the business location info sidebar
--------------------------------------------------------------------- */

import React from 'react'

function LocationInfoListing(props){
  return(
    <div>
      <p className="LocationInfoName">{this.props.name}</p>
      <p className="LocationInfoPrice">{this.props.price}</p>
      <p className="LocationInfoDate">{this.props.expiration}</p>
    </div>
  );
}

export default LocationInfoListing;
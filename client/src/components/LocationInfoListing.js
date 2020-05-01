/** --------------------------------------------------------------------
Contributors: Darien Tsai
Reusable listing for the business location info sidebar
--------------------------------------------------------------------- */

import React from 'react'

function LocationInfoListing(props){
  return(
    <div className="locationInfo-listing">
      <p className="locationInfo-name">{props.name}</p>
      <p className="locationInfo-price">{props.price}</p>
      <p className="locationInfo-date">{props.expire}</p>
    </div>
  );
}

export default LocationInfoListing;
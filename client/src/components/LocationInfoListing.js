/** --------------------------------------------------------------------
Contributors: Darien Tsai
Reusable listing for the business location info sidebar
--------------------------------------------------------------------- */

import React from 'react'

/** --------------------------------------------------------------------
Will render strictly from props passed in from parent
--------------------------------------------------------------------- */
function LocationInfoListing(props){
  return(
    <div className="locationInfo-listing">
      {/** Name, Price, Expiration listed only: this is to simplify the display */}
      <p className="locationInfo-name">{props.name}</p>
      <p className="locationInfo-price">${props.price}</p>
      <p className="locationInfo-date">{props.expire}</p>
    </div>
  );
}
export default LocationInfoListing;
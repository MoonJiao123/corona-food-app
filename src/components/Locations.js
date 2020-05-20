/**
 * This file creates the Table component in the Business
 * Dashboard, it allows the business user to look at results for the
 * locations
 *
 * Contributors: Jeet Vachhani, Darien
 */

import React from 'react';

/** A single location search result */
class LocationRow extends React.PureComponent {
    render(){
        return(
            <div className="location-row">
                <p className="location-name" >{this.props.data.location}</p>
                <p className="location-address" >{this.props.data.address}</p>
            </div>
        );
    }
}

/** Parent for all location search results */
export default function Locations(props) {

    //Map data to components
    let rows = props.data.map(
        (location)=> <LocationRow data={location} key="location.id"/>
    );

    //Genereate component
    return (
        <div id="location-results">
            <LocationRow data={{location: "Location", address: "Address"}}/>
            {rows}
        </div>
    );
}
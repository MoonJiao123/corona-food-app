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

    constructor(props){
        super(props);

        //bindings
        this.handleSelect = this.handleSelect.bind(this);
    }

    //Handler for selection
    handleSelect = (e) => {
        this.props.action(this.props.data.location.k);
    }

    //Return row component
    render(){
        return(
            <div className="location-row" onClick={this.handleSelect}>
                <p className="location-name" >{this.props.data.location.name}</p>
                <p className="location-address" >{this.props.data.location.address}</p>
            </div>
        );
    }
}

/** Parent for all location search results */
export default function Locations(props) {

    //Maintain var for row keys
    let key = 0;

    //Map addresses, update keys
    let addresses = props.data.map(
        (location)=> {
            return{
                name: location.store_name,
                address: location.address,
                k: key++
            }
        }
    );

    //Handler for row selection
    const select = (key) => {
        //find by key 
        let searchLocation = null;
        for(let i = 0; i < addresses.length; i++){
            if(key === addresses[i].k){
                searchLocation = i;
                break;
            }
        }
        props.action(props.data[searchLocation]);
    }

    const doNothing = (e) => {
        return 0;
    }

    //Map rows
    let rows = addresses.map(
        (location)=> {
            return (<LocationRow data={{location: location}} action={select} key={location.k}/>)
        }
    )

    //Genereate component
    return (
        <div id="location-results" className={props.initial}>
            <LocationRow data={{location: {name: "Location", address: "Address"}}} action={doNothing}/>
            {rows}
        </div>
    );
}
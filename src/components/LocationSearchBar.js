/**
 * This file creates the SearchBar component in the Business
 * Dashboard, it allows the business user to search for a
 * location.
 *
 * Contributors: Jeet Vachhani, Darien
 */

import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

export default function LocationSearchBar(props) {

    // Maintain state for current values
    const [street, changeStreet] = useState('');

    // Search function on field change
    function search(value){

        // Call parent search method
        props.action(value);
    }

    // Handlers: Each handler calls after state change
    const handleStreet = (e) => {
        changeStreet(e.target.value);
        search(e.target.value);
    }

    // Return component to render
    return (
        <div id="location-search-wrapper">

            {/**Search bar title */}
            <p>Search Location</p>

            {/**Contains all text fields */}
            <div id="location-search">
                <TextField label="Address" className="search-input" onChange={handleStreet}/>
            </div>
        </div>
    );
}





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
    const [name, changeName] = useState('');
    const [street, changeStreet] = useState('');
    const [city, changeCity] = useState('');
    const [state, changeState] = useState('');
    const [zip, changeZip] = useState('');

    // Search function on field change
    function search(idx, value){
        // Prepare the search array
        let search = [name, street, city, state, zip];
        search[idx] = value;

        // Call parent search method
        props.action(search);
    }

    // Handlers: Each handler calls after state change
    const handleName = (e) => {
        changeName(e.target.value);
        search(0, e.target.value);
    }

    const handleStreet = (e) => {
        changeStreet(e.target.value);
        search(1, e.target.value);
    }

    const handleCity = (e) => {
        changeCity(e.target.value);
        search(2, e.target.value);
    }

    const handleState = (e) => {
        changeState(e.target.value);
        search(3, e.target.value);
    }

    const handleZip = (e) => {
        changeZip(e.target.value);
        search(4, e.target.value);
    }

    // Return component to render
    return (
        <div id="location-search-wrapper">

            {/**Search bar title */}
            <p>Search by</p>

            {/**Contains all text fields */}
            <div id="location-search">
                <TextField label="Name" className="search-input" onChange={handleName}/>
                <TextField label="Street" className="search-input" onChange={handleStreet}/>
                <TextField label="City" className="search-input" onChange={handleCity}/>
                <TextField label="State" className="search-input" onChange={handleState}/>
                <TextField label="Zip" className="search-input" onChange={handleZip}/>
            </div>
        </div>
    );
}





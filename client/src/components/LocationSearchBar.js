/**
 * This file creates the SearchBar component in the Business
 * Dashboard, it allows the business user to search for a
 * location.
 *
 * Contributors: Jeet Vachhani, Darien
 */

import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
/** style guidelines for the LocationSearchBar object */
const useStyles = makeStyles((theme) => ({
    bar: {
        borderRadius: 30, /**  Dimensions for the object*/
        width: '50%',
        height: 60,
        display: 'flex',
        backgroundColor: "#eeeeee", /**  Background color of the search bar*/

    },
    input: { /**  input props*/
        color: 'black',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    inputField: { /** input field props */
        paddingLeft: theme.spacing(2),
        fontSize: 17,
    },

    iconButton: { /**  Location Icon Props*/
        color: '#67d367;',
        padding: theme.spacing(2),
        marginLeft: theme.spacing(0.5),
    },

}));



export default function LocationSearchBar(props) {
    const classes = useStyles(); /**  Styles rules imported for the object*/
    const { disabled } = props;

    //Maintain a state to store search value
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    function handle(e){
        if(e.key ==="Enter"){
            props.data.search();
        }
    }

    return (
        <Paper className={classes.bar} style={{ /**  properties of the paper background effect */
            position: 'absolute', left: '20%', top: '7%',
        }}>
            <InputBase

                className={classes.input}
                placeholder = "Enter a Store Location *" /**  Default writing in the search box*/
                inputProps={{ 'aria-label': 'id no.', className: classes.inputField }} /** label ids */
                disabled={disabled}
                onChange={onChange}
                onKeyPress={handle}
            />
            <IconButton className={classes.iconButton} aria-label="search" onClick={props.data.search}>
                <LocationSearchingIcon />
            </IconButton>
        </Paper>

    );
}





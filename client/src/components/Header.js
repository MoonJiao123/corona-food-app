/**
 * This file creates the header for the Log In/Sign Up page. 
 * The color of the header is black to follow the landing page.
 * The header displays the title of the page.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


/** style guidelines for the Header componenet */
const useStyles = makeStyles((theme) => ({
    /** sets the flexGrow for the div compoenent */
    root: {
      flexGrow: 1,
    },
    /** sets the flexGrow for the title */
    title: {
      flexGrow: 1,
    },
  }));
  
/** function to create the Header component */
export default function Header() {

    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{background: '#67d367'}}>
          <Toolbar>
            {/** title for the Header */}
            <h2 className={classes.title}>
              Log In / Sign Up
            </h2>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

/**
 * This file creates the tabs for users to choose between logging in or 
 * signing up with a new account. It shows two different tabs from which 
 * users can select which option they would like to choose to fill out. 
 * 
 * Contributors: Tabassum Alam, Darien
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab, Typography, Box, Container, CssBaseline } 
from '@material-ui/core';
import SignUp from './SignUp';
import LogIn2 from './LogIn2';

/** function to display information based on which tab is open */
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
  }
  
  /** propTypes for tab information display */
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  /** functin for tab information display */
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  /** style guidelines for the Sign Up page */
const useStyles = makeStyles((theme) => ({
    /** guielines for the div component */
    paper: {
      marginTop: theme.spacing(7),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
    },
    /** guidelines for the tab indicators */
    indicator: {
        textColor: 'inherit',
        backgroundColor: 'black',
    },
  }));

  /** function to create the Sign Up component */
export default function MainLogInSignUp(props) {
  //init states
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    if(value !== newValue){
      setValue(newValue);
      props.vid(newValue);
    }
  };

  //Define signup/login functions
  let signup = {
    signupBusiness: (name, email, phone, pass) => {
      let body = {
        account: 'business',
        name: name,
        email: email, 
        mobile: phone,
        password: pass
      };
      console.log(body);
      //fetch
      fetch('https://fuo-backend.herokuapp.com/users/business/register', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
        'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {alert("Success!")})
      .catch(err => {
          console.log("caught b signup");
          console.log(err);
          alert("Something went wrong...");
      });
    },
    
    signupCustomer: (first, last, email, pass) => {
      let body = {
        account: 'customer',
        email: email, 
        password: pass
      };
      //fetch
      fetch('https://fuo-backend.herokuapp.com/users/customer/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(data => {alert("Success!")})
      .catch(err => {
          console.log("caught c signup");
          console.log(err);
          alert("Something went wrong...");
      });
    }
  }

  let login = {
    loginBusiness: (email, pass) => {
      let body = {
        email: email, 
        password: pass
      };
      //fetch
      fetch('https://fuo-backend.herokuapp.com/users/business/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
      body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        window.location.assign("http://localhost:3000/business#" + data.business_id);
      })
      .catch(err => {
          console.log("caught b login");
          console.log(err);
          alert("Something went wrong...");
      });
    },

    loginCustomer: (email, pass) => {
      let body = {
        email: email, 
        password: pass
      };
      //fetch
      fetch('https://fuo-backend.herokuapp.com/users/customer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
          console.log("caught c login");
          console.log(err);
          alert("Something went wrong...");
      });
    }
  }

  return (
      /** use container to allow horizontal alignment */
    <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>

            {/** title for the Sign Up component */}
            <h2> Log In or Sign Up </h2> 

            {/** to create two tabs  */}
            <Tabs value={value}
                onChange={handleChange}
                centered
                aria-label="simple tabs example"
                classes= {{indicator: classes.indicator}}>
                {/** label for the two different tab options */}
                <Tab label="Log In" {...a11yProps(0)}/>
                <Tab label="Sign Up"  {...a11yProps(1)}/>
            </Tabs>

            {/** material to be displayed on the different tabs */}
            <TabPanel value={value} index={0}>
                <LogIn2 action={login} /> {/** log in option */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp action={signup}/> {/** sign up option */}
            </TabPanel>

        </div>
    </Container>
  );
}
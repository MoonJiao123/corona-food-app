/**
 * This file creates the Sign Up component for the Log In/Sign Up page.
 * It allows users to choose between a customer account and business account.
 * The component renders the two different options based on which tab
 * is open.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import SignUpCustomer from './SigUpCustomer';
import SignUpBusiness from './SignUpBusiness';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

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
export default function SignUp() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      /** use container to allow horizontal alignment */
    <Container component="main" maxWidth="m">
        <CssBaseline />
        <div className={classes.paper}>

            {/** title for the Sign Up component */}
            <h2> Sign Up </h2> 

            {/** to create two tabs  */}
            <Tabs value={value}
                onChange={handleChange}
                indicatorColor="default"
                textColor="default"
                centered
                fullWidth
                aria-label="simple tabs example"
                classes= {{indicator: classes.indicator}}>
                {/** label for the two different tab options */}
                <Tab label="Customer" {...a11yProps(0)}/>
                <Tab label="Business"  {...a11yProps(1)}/>
            </Tabs>

            {/** material to be displayed on the different tabs */}
            <TabPanel value={value} index={0}>
                <SignUpCustomer /> {/** customer option */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUpBusiness /> {/** business option */}
            </TabPanel>

        </div>
    </Container>
  );
}
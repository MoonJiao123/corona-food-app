/**
 * This file creates the Log In component for the Log In/Sign Up page.
 * It allows any user to sign in with their email and password.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import {Button, CssBaseline, TextField, Grid, Container, FormControlLabel, 
    Radio, RadioGroup} from '@material-ui/core';
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

/** style guidelines for the Log In compoenent */
const useStyles = makeStyles((theme) => ({
    /** guidelines for the div componenet */
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    /** guidelines for the form */
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        margin: theme.spacing(3),
    },
    /** guidelines for the submit button */
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
  }));

/** style guidelines for new overriden TextField */
const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': { // title after focus
            color: 'black',
        },
        '& .MuiInput-underline:after': { //underline after focus
            borderBottomColor: 'black', 
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': { // outline after focus
                borderColor: 'black',
            },
          },
    },
})(TextField);


/** function to create the Log In component  */
export default function LogIn() {

    // to call style guidelines
    const classes = useStyles(); 
    // used to retrieve email and password
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // used to set where the login button will link to
    const [identity, setIdentity] = React.useState(''); 
    const [helperText, setHelperText] = React.useState('Please select an option above.');
    // used for form validation
    const {register, errors} = useForm();

    /** to change the email variable when entered */
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    /** to change the password variable when entered */
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    /** to change the variable value when radio handle is used */
    const handleRadioChange = (event) => {
        setIdentity(event.target.value);
        setHelperText('')
    };

    /** to change where the log in button routes to based on identity */
    var linkTo;
    if (identity === 'Customer') { // if customer
        linkTo = "/Customer"   // take to customer page
    } 
    else if (identity === 'Business') { // if business
        linkTo = "/Business" // take to business page
    }
    else {
        linkTo =""
    } 

    /** to do when form is complete and submitted */
    const handleSubmit = (event) => {
        /** private routing need backend to work for all of this to work i think so */
        event.preventDefault();
        fetch('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if (res.status === 200) {
              this.props.history.push('/');
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
          });
    }

    return (
       /** use container to allow horizontal alignment  */
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

            {/** the log in form to fill out  */}
            <form className={classes.form} noValidate 
            onSubmit={handleSubmit}>

                {/** textfield to enter user email address */}
                <CssTextField
                    autoFocus
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmail}
                    inputRef={register({
                        required: 'email is required',
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'not a valid email entry'
                        }
                    })}
                    error={errors.firstName ? true : false}
                />
                {errors.firstName && <p><small>pls enter email</small></p>}

                {/** textfield to enter user password */}
                <CssTextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePassword}
                    inputRef={register({
                        required: 'password is required',
                        minLength: {
                            value: 6,
                            message: 'password is too short'
                        }
                    })}  
                />
                {errors.firstName && <p><small>pls enter pw</small></p>}

                {/** grid to identify customer/business accounts */}
                <RadioGroup aria-label="identity" name="identifier" onChange={handleRadioChange}>

                    {/** subtitle indicating user to choose*/}
                    <p> I am a ... </p>

                    {/** grid to create options for identity */}
                    <Grid container>
                        {/** option to identify as customer */}
                        <Grid item>
                            <FormControlLabel
                                value="Customer"
                                control={<Radio color="default" size="small" name="id"/>}
                                label={<p> Customer </p>}
                            />
                        </Grid>
                        {/** option to identify as a business */}
                        <Grid item>
                            <FormControlLabel
                                value="Business"
                                control={<Radio color="default" size="small" name="id"/>}
                                label={<p> Business </p>}
                            />
                        </Grid>
                    </Grid>
                </RadioGroup>
                {/** text to indicate user did not select identity option */}
                <p><small>{helperText}</small></p>


                {/** log in button after enterring email & password */}
                <Link to={linkTo}> 
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="default"
                        className={classes.submit}
                        >
                        Log In
                    </Button>
                </Link>

                {/** allow users to retrieve password if forgotten */}
                <Grid container>
                    <Grid item xs>
                        {/** link to resetting password */}
                        <Link to="/ErrorPage" variant="p" style={{color: '#1401ee'}}>
                        Forgot password?
                        </Link>
                    </Grid>
                </Grid>

          </form>
        </div>
      </Container>
    );
  }
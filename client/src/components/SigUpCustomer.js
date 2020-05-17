/**
 * This file creates the Customer Sign Up option. It allows the user
 * to fill out the form to create a Customer Account.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import {Grid, Container, Button, CssBaseline, TextField}
 from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

/** style guidelines for the Customer Sign Up component */
const useStyles = makeStyles((theme) => ({
    /** guidelines for the div component */
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
    },
    /** guidelines for the submit button */
    submit: {
        margin: theme.spacing(3, 0, 2),
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
    },
})(TextField);

/** function to create the SignUpCustomer componenet */
export default function SignUpCustomer() {

    // to call style guidelines
    const classes = useStyles();
    // used to do form validation
    const {register, errors, control} = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    // used to store customer information from the form
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPW, setConfirmPW] = React.useState('');

    /** to change first name variable when entered */
    const handleFName = (event) => {
        setFName(event.target.value)
    }

    /** to change first name variable when entered */
    const handleLName = (event) => {
        setLName(event.target.value)
    }

    /** to change the email variable when entered */
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    /** to change the password variable when entered */
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    /** to change the password variable when entered */
    const handleConfirmPW = (event) => {
        setConfirmPW(event.target.value);
    }

    /** to do when form is complete and submitted */
    const handleSubmit = (event) => {
        /** need backend to work for all of this to work i think so */
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
        /** use container to allow horizontal alignment */
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

            {/** title to create customer account */}
            <p> Create a Customer Account </p>

            {/** create the sign up form for customers */}
            <form className={classes.form} noValidate 
            onSubmit={handleSubmit}>
            <Grid container spacing={2}>

                {/** textfield to enter first name */}
                <Grid item xs={12} sm={6}>
                    <CssTextField
                        autoFocus
                        required
                        fullWidth
                        id="fname"
                        name="firstName"
                        label="First Name"
                        autoComplete="fname"
                        value={fName}
                        onChange={handleFName}
                        //error={!!errors.firstName}
                        inputRef={register( {required:true} )}
                    />
                </Grid>

                {/** textfield to enter last name */}
                <Grid item xs={12} sm={6}>
                    <CssTextField
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        autoComplete="lname"
                        value={lName}
                        onChange={handleLName}
                        ref={register( {required:true} )}
                    />
                </Grid>

                {/** textfield to enter email address */}
                <Grid item xs={12}>
                    <CssTextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmail}
                        ref={register({
                            required: true,
                            pattern:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        })}
                    />
                </Grid>

                {/** textfield to enter password */}
                <Grid item xs={12}>
                    <CssTextField
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="New Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePassword}
                        ref={register( {required:true} )}
                    />
                </Grid>

                {/** textfield to enter password confirmation */}
                <Grid item xs={12}>
                    <CssTextField
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        value={confirmPW}
                        onChange={handleConfirmPW}
                        ref={register( {required:true} )}
                    />
                </Grid>
            </Grid>

                {/** signup button after entering all information */}
                <Link to="/Customer"> {/** should route to a customer page */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="default"
                        className={classes.submit}
                        >
                        Sign Up
                    </Button>
                </Link>    


            </form>
        </div>
        </Container>
    );
}
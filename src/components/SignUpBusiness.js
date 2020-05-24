/**
 * This file creates the Business Sign Up option. It allows the user
 * to fill out the form to create a Business Account.
 * 
 * failed form validation and incomplete private routing 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Container, CssBaseline, TextField, Grid, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useForm from 'react-hook-form';


/** style guidelines for the Sign Up Business componenet */
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

/** functin to create the SignUpBusiness component */
export default function SignUpBusiness() {

    // to call style guidelines
    const classes = useStyles();
    // used to store customer information from the form
    const [buissnessName, setBusinessName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPW, setConfirmPW] = React.useState('');

    /** to change business name variable when entered */
    const handleBuisnessName = (event) => {
        setBusinessName(event.target.value)
    }

    /** to change the email variable when entered */
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    /** to change the phone variable when entered */
    const handlePhone = (event) => {
        setPhone(event.target.value);
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
      /** use container to allow horizontal alignement */
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        {/** title to create business account */}
        <p> Create a Business Account </p>

        {/** create the sign up form for businesses */}
        <form className={classes.form} noValidate
        onSubmit={handleSubmit}>
        <Grid container spacing={2}>

             {/** textfield to enter business name */}
            <Grid item xs={12}>
                <CssTextField
                    autoFocus
                    required
                    fullWidth
                    id="businessName"
                    name="businessName"
                    label="Business Name"
                    autoComplete="name"
                    value={buissnessName}
                    onChange={handleBuisnessName}
                />
            </Grid>

            {/** textfield to enter email */}
            <Grid item xs={12} sm={6}>
                <CssTextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmail}
                />
            </Grid>

            {/** textfield to enter phone number */}
            <Grid item xs={12} sm={6}>
                <CssTextField
                    required
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    autoComplete="phone"
                    value={phone}
                    onChange={setPhone}
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
                />
            </Grid>
        </Grid>

            {/** button to sign up new business account after form is filled out */}
            <Link to="/Business">
                <Button
                    type="submit"
                    variant="contained"
                    color="default"
                    fullWidth
                    className={classes.submit}>
                    Sign Up
                </Button>
            </Link>

        </form>
      </div>
    </Container>
  );
}
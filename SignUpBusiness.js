/**
 * This file creates the Business Sign Up option. It allows the user
 * to fill out the form to create a Business Account.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

  const classes = useStyles();

  return (
      /** use container to allow horizontal alignement */
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        {/** title to create business account */}
        <p> Create a Business Account </p>

        {/** create the sign up form for businesses */}
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>

             {/** textfield to enter business name */}
            <Grid item xs={12}>
                <CssTextField
                    autoComplete="fname"
                    name="businessName"
                    required
                    fullWidth
                    id="businessName"
                    label="Business Name"
                    autoFocus
                />
            </Grid>

            {/** textfield to enter business type */}
            <Grid item xs={12}>
                <CssTextField
                    autoComplete="fname"
                    name="businessType"
                    required
                    fullWidth
                    id="businessType"
                    label="Business Type"
                />
            </Grid>

            {/** textfield to enter email */}
            <Grid item xs={12} sm={6}>
                <CssTextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
            </Grid>

            {/** textfield to enter phone number */}
            <Grid item xs={12} sm={6}>
                <CssTextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                />
            </Grid>

            {/** textfield to enter website */}
            <Grid item xs={12}>
                <CssTextField
                    required
                    fullWidth
                    name="link"
                    label="Website"
                    type="link"
                    id="link"
                    autoComplete="link"
                />
            </Grid>

            {/* do we upload files? */}

            {/** textfield to enter password */}
            <Grid item xs={12}>
                <CssTextField
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Grid>

            {/** textfield to enter password confirmation */}
            <Grid item xs={12}>
                <CssTextField
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Grid>
        </Grid>

            {/** button to sign up new business account after form is filled out */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}>
                Sign Up
            </Button>

        </form>
      </div>
    </Container>
  );
}
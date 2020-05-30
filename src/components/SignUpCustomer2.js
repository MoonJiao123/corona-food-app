/**
 * This file creates the Customer Sign Up option. It allows the user
 * to fill out the form to create a Customer Account.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import {Grid, Container, Button, CssBaseline, TextField, FormHelperText}
 from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

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

class SignUpCustomer2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /** states of the signup customer form */
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            password: '',
            confirmPW: '',
            /** corrections errors of signup customer form */
            addressError: '',
            cityError: '',
            stateError: '',
            zipError: '',
            passwordError: '',
            confirmPWError: '',
        }
    }

    /** sets email state */
    handleEmail = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };

    /** sets address state */
    handleAddress = address => event => {
        this.setState({
            [address]: event.target.value,
        });
    };

    /** sets city state */
    handleCity = city => event => {
        this.setState({
            [city]: event.target.value,
        });
    };

    /** sets state state */
    handleState = state => event => {
        this.setState({
            [state]: event.target.value,
        });
    };

    /** sets zip state */
    handleZip = zip => event => {
        this.setState({
            [zip]: event.target.value,
        });
    };

    /** sets password state */
    handlePassword = password => event => {
        this.setState({
            [password]: event.target.value,
        });
    };

    /** sets confirm password state */
    handleConfirmPW = confirmPW => event => {
        this.setState({
            [confirmPW]: event.target.value,
        });
    };

    /** function to check if signup customer input is valid */
    validate = () => {
        let emailError= "";
        let addressError= "";
        let cityError= "";
        let stateError= "";
        let zipError= "";
        let passwordError= "";
        let confirmPWError= "";

        // if entered email does not include @ or . 
        if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            emailError= "Invalid email";
        }

        // if entered street address is blank
        if (!this.state.address) {
            addressError = "Please enter a street";
        }
      
        // if entered city is not valid
        if (this.state.city.length < 2 || !isNaN(this.state.city)) {
            cityError = "Invalid City";
        }
      
        // if entered state is not valid
        if (this.state.state.length < 2 || !isNaN(this.state.state)) {
            stateError = "Invalid State";
        }
      
        // if entered zip code is not valid
        if (isNaN(this.state.zip) || this.state.zip.length < 5) {
            zipError = "Invalid Zip Code";
        }

        // if entered password does not reach min length requirement
        if (!this.state.password || this.state.password.length < 6 ) {
            passwordError= "Password should be atleast of length 6";
        }

        // if password and confirm password are not the same
        if (this.state.password !== this.state.confirmPW) {
            confirmPWError= "Passwords do not match";
        }

        // set validation false because name or email error
        if ( emailError || addressError || cityError ||
            stateError || zipError ||  passwordError || confirmPWError) {
            this.setState({emailError, addressError, cityError, 
                stateError, zipError, passwordError, confirmPWError});
            return false; // return not valid
        }

        return true;    // return valid
    };

    /** handles priavte routing to customer dashboard only if customer 
     * credentials enteres are valid 
     */
    handleSubmit = (event) => {
        event.preventDefault();
        // checks if customer signup information is valid
        const isValid = this.validate();
        if (isValid) {
            this.props.action.signupCustomer(
                this.state.email,
                this.state.password,
                this.state.address,
                this.state.city,
                this.state.state,
                this.state.zip
            );
        }
    };

    render () {
        const {classes} = this.props;

        return (
        /** use container to allow horizontal alignment */
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

            {/** title to create customer account */}
            <p className="sign-up-subtitle"> 
                Create a Customer Account 
            </p>

            {/** create the sign up form for customers */}
            <form className={classes.form}  >
            <Grid container spacing={2}>

                {/** textfield to enter email address */}
                <Grid item xs={12}>
                    <CssTextField
                        autoFocus
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleEmail('email')}
                    />
                    
                    {/** text to indicate user did not input valid email */}
                    {this.state.emailError ? 
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.emailError}
                    </FormHelperText> 
                    : null }
                </Grid>

                {/** textfield to enter street address */}
                <Grid item xs={12}>
                    <CssTextField 
                        required
                        fullWidth
                        id="address"
                        name="address"
                        label="Street Address"
                        autoComplete="address"
                        value={this.state.address}
                        onChange={this.handleAddress('address')}
                    />

                    {/** text to indicate uesr did not input valid address */}
                    {this.state.addressError ?
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.addressError}
                    </FormHelperText> 
                    : null}
                </Grid>

                {/** textfield to enter city */}
                <Grid item xs={12} sm={4}>
                    <CssTextField 
                        required
                        fullWidth
                        id="city"
                        name="city"
                        label="City"
                        autoComplete="city"
                        value={this.state.city}
                        onChange={this.handleCity('city')}
                    />

                    {/** text to indicate uesr did not input valid address */}
                    {this.state.cityError ?
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.cityError}
                    </FormHelperText> 
                    : null}
                </Grid>

                {/** textfield to enter state */}
                <Grid item xs={12} sm={4}>
                    <CssTextField 
                        required
                        fullWidth
                        id="state"
                        name="state"
                        label="State"
                        autoComplete="state"
                        value={this.state.state}
                        onChange={this.handleState('state')}
                    />

                    {/** text to indicate uesr did not input valid address */}
                    {this.state.stateError ?
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.stateError}
                    </FormHelperText> 
                    : null}
                </Grid>

                {/** textfield to enter zip */}
                <Grid item xs={12} sm={4}>
                    <CssTextField 
                        required
                        fullWidth
                        id="zip"
                        name="zip"
                        label="Zip"
                        autoComplete="zip"
                        value={this.state.zip}
                        onChange={this.handleZip('zip')}
                    />

                    {/** text to indicate uesr did not input valid address */}
                    {this.state.zipError ?
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.zipError}
                    </FormHelperText> 
                    : null}
                </Grid>

                {/** textfield to enter password */}
                <Grid item xs={12}>
                    <CssTextField
                        required
                        fullWidth
                        name="password"
                        label="New Password"
                        type="password"
                        autoComplete="current-password"
                        value={this.state.password}
                        onChange={this.handlePassword('password')}
                    />

                    {/** text to indicate user did not input valid password */}
                    {this.state.passwordError ? 
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.passwordError}
                    </FormHelperText> 
                    : null }
                </Grid>

                {/** textfield to enter password confirmation */}
                <Grid item xs={12}>
                    <CssTextField
                        required
                        fullWidth
                        name="password"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        value={this.state.confirmPW}
                        onChange={this.handleConfirmPW('confirmPW')}
                    />

                    {/** text to indicate user did not input valid email */}
                    {this.state.confirmPWError ? 
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.confirmPWError}
                    </FormHelperText> 
                    : null }
                </Grid>

            </Grid>

                {/** signup button after entering all information */}
                <Link to="/Customer" onClick={this.handleSubmit}
                className="button"> 
                    <Button
                        id="signup-customer"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="default"
                        className={classes.submit} >
                        Sign Up
                    </Button>
                </Link>    

            </form>
        </div>
        </Container>
        );
    }
}

export default withStyles(useStyles) (SignUpCustomer2);
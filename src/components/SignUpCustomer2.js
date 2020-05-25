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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPW: '',
            /** corrections errors of signup customer form */
            nameError: '',
            emailError: '',
            passwordError: '',
            confirmPWError: '',
        }
    }

    /** sets firstName state */
    handleFirstName = firstName => event => {
        this.setState({
            [firstName]: event.target.value,
        });
    };

    /** sets last name state */
    handleLastName = lastName => event => {
        this.setState({
            [lastName]: event.target.value,
        });
    };

    /** sets email state */
    handleEmail = email => event => {
        this.setState({
            [email]: event.target.value,
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
        let nameError= "";
        let emailError= "";
        let passwordError= "";
        let confirmPWError= "";

        // if first name or last name is empty
        if (!this.state.firstName || !this.state.lastName) {
            nameError= "Please enter both name fields"
        }

        // if entered email does not include @ or . 
        if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            emailError= "Invalid email";
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
        if (emailError || nameError || passwordError || confirmPWError) {
            this.setState({emailError, nameError, passwordError, confirmPWError});
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
                this.state.firstName,
                this.state.lastName,
                this.state.email,
                this.state.password
            );
            //window.location.assign("/Customer");

            /** BE: PRIVATE ROUTING need backend's help to fix fetch
            
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
            */
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
                        value={this.state.firstName}
                        onChange={this.handleFirstName('firstName')}
                    />

                    {/** text to indicate user did not input valid name */}
                    {this.state.nameError ? 
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.nameError}
                    </FormHelperText> 
                    : null }
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
                        value={this.state.lastName}
                        onChange={this.handleLastName('lastName')}
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
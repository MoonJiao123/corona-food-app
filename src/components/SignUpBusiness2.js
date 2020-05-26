/**
 * This file creates the Business Sign Up option. It allows the user
 * to fill out the form to create a Business Account.
 * 
 * failed form validation and incomplete private routing 
 * Contributors: Tabassum Alam
 */

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Container, CssBaseline, TextField, Grid, Button, FormHelperText} from '@material-ui/core';
import {Link} from 'react-router-dom';

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

class SignUpBusiness2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /** states of signup business form */
            businessName: '',
            email: '',
            phone: '',
            password: '',
            confirmPW: '',
            /** correction errors of signup business form */
            nameError: '',
            emailError: '',
            phoneError: '',
            passwordError: '',
            confirmPWError: '',
        }
    }
    /** sets businessName state */
    handleBusinessName = businessName => event => {
        this.setState({
            [businessName]: event.target.value,
        });
    };

    /** sets email state */
    handleEmail = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };

    /** sets phone state */
    handlePhone = phone => event => {
        this.setState({
            [phone]: event.target.value,
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

    /** function to check if signup business input is valid */
    validate = () => {
        let nameError= "";
        let emailError= "";
        let phoneError= "";
        let passwordError= "";
        let confirmPWError= "";

        // if first name or last name is empty
        if (!this.state.businessName) {
            nameError= "Please enter business name";
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

        // check for phone error 
        if (this.state.phone.length < 10 || !Number(this.state.phone)) {
            phoneError= "Invalid phone number (digits only)"
        }

        // set validation false because name or email error
        if (emailError || nameError || phoneError ||passwordError || 
            confirmPWError) {
            this.setState({emailError, nameError, phoneError, 
                passwordError, confirmPWError});
            return false; // return not valid
        }

        return true;    // return valid
    };

    /** handles priavte routing to business dashboard only if customer 
     * credentials enteres are valid 
     */
    handleSubmit = (event) => {
        event.preventDefault();
        // check is signup business information is valid
        const isValid = this.validate();
        if (isValid) {
            this.props.action.signupBusiness(
                this.state.businessName, 
                this.state.email, 
                this.state.phone, 
                this.state.password);
            //window.location.assign("/Business");

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
            /** use container to allow horizontal alignement */
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

            {/** title to create business account */}
            <p className="sign-up-subtitle"> 
                Create a Business Account 
            </p>

            {/** create the sign up form for businesses */}
            <form className={classes.form} noValidate >
            <Grid container spacing={2} >

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
                        value={this.state.businessName}
                        onChange={this.handleBusinessName('businessName')}
                    />

                    {/** text to indicate user did not input valid name */}
                    {this.state.nameError ? 
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.nameError}
                    </FormHelperText> 
                    : null }
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

                {/** textfield to enter phone number */}
                <Grid item xs={12} sm={6}>
                    <CssTextField
                        required
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        autoComplete="phone"
                        value={this.state.phone}
                        onChange={this.handlePhone('phone')}
                    />

                    {this.state.phoneError ? 
                    <FormHelperText style={{fontSize: 12, color: "red"}}>
                        {this.state.phoneError}
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

                {/** button to sign up new business account after form is filled out */}
                <Link to="/Business" onClick={this.handleSubmit}
                className="button">
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

}

export default withStyles(useStyles) (SignUpBusiness2);
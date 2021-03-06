/**
 * This file creates the Log In component for the Log In/Sign Up page.
 * It allows any user to sign in with their email and password.
 * 
 * no form validation, no private routing implemented yet
 * Contributors: Tabassum Alam
 */

import React from 'react';
import {Button, CssBaseline, TextField, Grid, Container, FormControlLabel, 
    FormHelperText, Radio, RadioGroup} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

/** style guidelines for the Log In compoenent */
const useStyles = makeStyles(theme => ({
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
        marginTop: theme.spacing(2)
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

/** LogIn Class/Component render */
class LogIn2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /** states of the login form */
            email: '',
            password: '',
            identity: '',
            /** correction errors for login form */
            emailError: '',
            passwordError: '',
        }
        this.identityError="Please choose an option above."
        this.link=""
        this.linkTo='/'

    }

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

    /** sets identity state */
    handleRadioChange = identity => event => {
        this.setState({
            [identity]: event.target.value,
        });
        this.identityError="";
        this.link = event.target.value;
        //this.handleLink()
    };

    /** to change route link based on identity */
    handleLink () {
        if (this.link === 'Customer') {
            this.linkTo= "/Customer";
        }
        else if (this.link === 'Business') {
            this.linkTo="/Business";
        }
        else {
            this.linkTo="/";
        }
    } 

    /** function to check is email and password are of valid type */
    /** BE: need a way to check if email & password types are found in database */
    validate = () => {
        let emailError= "";
        let passwordError= "";

        // if entered email does not include @ or .
        if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
            emailError= "Invalid email";
        }

        // if entered password does not reach min length requirement
        if (this.state.password.length < 6) {
            passwordError= "Invalid password";
        }

        // set validation false because email or password error 
        if (emailError || passwordError) {
            this.setState({emailError, passwordError});
            return false; // return not valid
        }

        return true;    // return valid 
    };

    /** handles where to navigate and private routing and session only if 
     * password and email are valid 
     */
    handleSubmit = (event) => {
        // api calls???
        event.preventDefault();
        // checks if input is valid email and password
        const isValid = this.validate();
        if (isValid) {
            if (this.link === 'Customer') {
                
                this.props.action.loginCustomer(this.state.email, this.state.password);
                //window.location.assign("/Customer");
            }
            else if (this.link === 'Business') {
                this.props.action.loginBusiness(this.state.email, this.state.password);
                //window.location.assign("/Business")
            }

        }
    }

render () {
  const { classes } = this.props;

  return (
  
  /** use container to allow horizontal alignment  */
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>

        {/** the log in form to fill out  */}
        <form className={classes.form}  >
        <Grid container>    

            {/** textfield to enter user email address */}
            <CssTextField
                autoFocus
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
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

            {/** textfield to enter user password */}
            <CssTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handlePassword('password')} 
            />

            {/** text to indicate user did not select identity option */}
            {this.state.passwordError ? 
                <FormHelperText style={{fontSize: 12, color: "red"}}>       
                    {this.state.passwordError}
                </FormHelperText> 
            : null}

            {/** grid to identify customer/business accounts */}
            <Grid container>
                <RadioGroup aria-label="identity" name="identifier" onChange={this.handleRadioChange('identity')}>

                    {/** subtitle indicating user to choose*/}
                    <p> I am a ... </p>

                    {/** grid to create options for identity */}
                    <Grid container>
                        {/** option to identify as customer */}
                        <Grid item>
                            <FormControlLabel
                                value="Customer"
                                control={<Radio color="default" size="small"/>}
                                label={<p> Customer </p>}
                            />
                        </Grid>
                        {/** option to identify as a business */}
                        <Grid item>
                            <FormControlLabel
                                value="Business"
                                control={<Radio color="default" size="small" />}
                                label={<p> Business </p>}
                            />
                        </Grid>
                    </Grid>
                </RadioGroup>
            </Grid>

            {/** text to indicate user did not select identity option */}
            <p><small>{this.identityError}</small></p>

        </Grid>

            {/** log in button after enterring email & password */}
            <Link to={this.linkTo} onClick={this.handleSubmit}
            className="button"> 
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="default"
                    className={classes.submit} >
                    Log In
                </Button>
            </Link>

      </form>
    </div>
  </Container>

  );

}

}

export default withStyles(useStyles) (LogIn2);
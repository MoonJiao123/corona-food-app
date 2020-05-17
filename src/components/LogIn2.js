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
import { withStyles, makeStyles, MuiThemeProvider, } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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


class LogIn2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            identity: '',
        }
        this.helperText="Please choose an option above."
        this.link=""
        this.linkTo='/'
    }

    handleEmail = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };

    handlePassword = password => event => {
        this.setState({
            [password]: event.target.value,
        });
    };

    handleRadioChange = identity => event => {
        this.setState({
            [identity]: event.target.value,
        });
        this.helperText="";
        this.link = event.target.value;
        //this.handleLink()
    };


   handleLink () {
        if (this.link == 'Customer') {
            this.linkTo= "/Customer";
        }
        else if (this.link === 'Business') {
            this.linkTo="/Business";
        }
        else {
            this.linkTo="/";
        }
    } 

    handleSubmit = (event) => {
        // api calls???
        event.preventDefault();
        if (this.link == 'Customer') {
            window.location.assign("/Customer");
        }
        else if (this.link === 'Business') {
            window.location.assign("/Business")
        }

        /** PRIVATE ROUTING need backend to work for all of this to work i think so 
         * feel free to edit or change it up as needed

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
          }); */
    }

render () {
  const { classes } = this.props;

  return (
  
  /** use container to allow horizontal alignment  */
  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>

        {/** the log in form to fill out  */}
        <form className={classes.form} noValidate >

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
                value={this.state.email}
                onChange={this.handleEmail('email')}
            />

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

            {/** grid to identify customer/business accounts */}
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
            {/** text to indicate user did not select identity option */}
            <p><small>{this.helperText}</small></p>

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

}

export default withStyles(useStyles) (LogIn2);
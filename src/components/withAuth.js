/** This file is used to verify if the user is authenticated for 
 * any pages requested that must be routed only provately.
 * Routing pages that need this page can access it by calling this withAuth()
 * 
 * Contributors: Tabassum Alam
 * source: https://medium.com/@faizanv/authentication-for-your-react-and-express-application-w-json-web-tokens-923515826e0#93c3 
 */

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      fetch('/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/LogIn" />; // edited to redirect to our login pag
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}
/** --------------------------------------------------------------------
Contributors: Darien Tsai
High level component for business dashboard.
--------------------------------------------------------------------- */

import React from 'react';
// TODO: import sub-components

/* ---------------------------------------------------------------------
Component Object: will contain the left/center/right components that make
up the business dashboard.
--------------------------------------------------------------------- */
class BusinessDashboardParent extends React.Component{

  /* ---------------------------------------------------------------------
  Constructor
  --------------------------------------------------------------------- */
  constructor(props){
    super(props);

    // TODO: Design the state
    this.state = {};
  }


  /* ---------------------------------------------------------------------
  Before Render
  TODO: Add or pass in database connection
  --------------------------------------------------------------------- */
  componentWillMount(){

  }


  /* ---------------------------------------------------------------------
  Render
  TODO: Pass props
  --------------------------------------------------------------------- */
  render(){
    return(
      // TODO: get sub component names
      <h1> welcome, business </h1>
    );
  }


  /* ---------------------------------------------------------------------
  After Render
  TODO: Add event listeners if necessary
  --------------------------------------------------------------------- */
  componentDidMount(){

  }


  /* ---------------------------------------------------------------------
  Before user logout or session expiration
  TODO: Cut database connection, save all data
  --------------------------------------------------------------------- */
  componentWillUnmount(){

  }


}

export default BusinessDashboardParent;
/** --------------------------------------------------------------------
Contributors: Darien Tsai
High level component for business dashboard.
--------------------------------------------------------------------- */

import React from 'react';
import LocationInfo from './LocationInfo'
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

    // TODO: Fill state functions
    this.state = {
      
      //Left Sidebar Props
      left: {
        companyName: "",
        totalLocations: 0,
        addLocation: {},
        logout: {}
      },

      //Center Search Props
      center: {
        locations: [
          {
            address: '',
            totalProducts: {},
            select: {}
        }
        ],
        seach: {},
      },

      //Right Sidebar Props
      right: {
        address: '',
        totalProducts: 0,
        productsList: [
          {
            name: '',
            price: 0,
            expiration: ''
          }
        ],
        updateProducts: {}
      }

    };
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
      // TODO: Get sub component names
      // TODO: Pass in props
      <div>
        {/*left*/}
        {/*center*/}
        <LocationInfo data={this.state.right}/>
      </div>
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
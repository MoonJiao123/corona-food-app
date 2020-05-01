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
        addLocation: () => alert("add location"),
        logout: () => alert("log out")
      },

      //Center Search Props
      center: {
        locations: [
          {
            address: '',
            totalProducts: 0,
            select: () => alert("location selected")
        }
        ],
        search: () => alert("search"),
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
        updateProducts: () => alert("update products")
      }

    };
  }

  /* ---------------------------------------------------------------------
  Before Render
  TODO: Add or pass in database connection, verify authentication
  --------------------------------------------------------------------- */
  componentWillMount(){
    //Testing right bar with fake data
    this.setState({
      right: {
        address: '110 William St 28th Floor, New York',
        totalProducts: 800,
        productsList: [
          {
            name: 'Beef Chuck',
            price: 14.28,
            expiration: '11/11/2020'
          },
          {
            name: 'Beef Oxtail',
            price: 12.63,
            expiration: '11/11/2020'
          },
          {
            name: 'Romaine Let',
            price: 2.28,
            expiration: '11/11/2020'
          }
        ],
        updateProducts: () => alert("update products")
      }
    });

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
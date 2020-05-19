/** --------------------------------------------------------------------
Contributors: Darien Tsai
High level component for business dashboard.
--------------------------------------------------------------------- */

import React from 'react';
import LocationInfo from './LocationInfo';
import LeftSideBar from './LeftSideBar';
import LocationSearchBar from "./LocationSearchBar";
import Locations from "./Locations";
import AddLocation from './AddLocation';
import UpdateListings from './UpdateListings';
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
        addLocation: () => {
          this.setState({formClass: this.state.formClass==="off"?"on":"off"});
        },
        logout: () => alert("log out")
      },

      //Center Search Props
      center: {
        locations: [
          {
            id: '',
            location: '',
            address: ''
            //select: () => alert("location selected") TODO
        }
        ],
        search: (e) => alert("search for " + e)
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
        updateProducts: () => {
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        }
      },

      formClass: "off",

      form: {
        submitNewLocation: () => alert("add new location"),
        closeForm: (e) => {
          e.preventDefault();
          this.setState({formClass: this.state.formClass==="off"?"on":"off"});
        },
      },

      updateClass: "off",
      
      update: {
        submitUpdate: (listings) => {
          //Repackage listings for HTTP request
          for(let i = 0; i < listings.length; i++){
            delete listings[i].idx;
            delete listings[i].onChange;
            delete listings[i].remove
          }

          //BE Call: On products Updated
          //'listings' below is the object for the fetch body
          console.log(listings);
        },
        closeForm: (e) => {
          e.preventDefault();
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        },
      }

    };
  }

  /* ---------------------------------------------------------------------
  After Render
  TODO: Add or pass in database connection, verify authentication
  --------------------------------------------------------------------- */
  componentDidMount(){
    //Alert logins on small bad screen sizes
    if(window.innerWidth <= window.innerHeight || window.innerWidth < 500 ){
      alert("Layout has not been optimized for small screens. Please log in with a larger device.");
    }

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
        updateProducts: () => {
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        }
      }
    });

    //Testing center bar with fake data
    this.setState({center: {
      locations: [
        {id: 0, location: "Location 1", address: "9927 Alderwood Lane Conway, SC 29526"},
        {id: 1, location: "Location 2", address: "332 Marvon St. Loveland, OH 45140"},
        {id: 2, location: "Location 3", address: "7380 Sherman Court Alexandria, VA 22304"},
        {id: 3, location: "Location 4", address: "332 Marvon St. Loveland, OH 45140"},
        {id: 4, location: "Location 5", address: "366 Wild Horse Drive Lansing, MI 48910"},
        {id: 5, location: "Location 6", address: "1 Creek Ave. Lebanon, PA 17042"},
        {id: 6, location: "Location 7", address: "92 Theatre Ave. Southaven, MS 38671"},
        {id: 7, location: "Location 8", address: "7441 W. Shadow Ave. Moines, IA 502650"},
        {id: 8, location: "Location 9", address: "716 Meadowbrook Street Mishawaka, IN 46544"}
      ],
      search: (e) => {
        //pack e array into object for HTTP request
        let locationSearch = {
          name: e[0],
          street: e[1],
          state: e[2],
          zip: e[3]
        }

        //BE Call: On location search
        //'locationSearch' below is the object for the fetch body
        console.log(locationSearch);
      }
      }
    });

    //Testing left bar with fake data
    this.setState({
      left: {
        companyName: "FUO-mart",
        totalLocations: 3.1415926535,
        addLocation: () => {
          this.setState({formClass: this.state.formClass==="off"?"on":"off"});
        },
        logout: () => alert("log out")
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
        <LeftSideBar data={this.state.left}/>
        <LocationSearchBar data = {this.state.center}/>
        <Locations data = {this.state.center}/>
        <LocationInfo data={this.state.right}/>
        <AddLocation data={this.state.form} toggle={this.state.formClass}/>
        <UpdateListings data={this.state.update} toggle={this.state.updateClass}/>
      </div>
    );
  }

  /* ---------------------------------------------------------------------
  Before user logout or session expiration
  TODO: Cut database connection, save all data
  --------------------------------------------------------------------- */
  componentWillUnmount(){

  }

}
export default BusinessDashboardParent;

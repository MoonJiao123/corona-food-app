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

}
export default BusinessDashboardParent;

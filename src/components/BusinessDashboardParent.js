/** ----------------------------------------------------------------------------
Contributors: Darien Tsai
High level container for business dashboard components.
----------------------------------------------------------------------------- */
import React from 'react';
import LocationInfo from './LocationInfo';
import LeftSideBar from './LeftSideBar';
import LocationSearchBar from "./LocationSearchBar";
import Locations from "./Locations";
import AddLocation from './AddLocation';
import UpdateListings from './UpdateListings';


/* -----------------------------------------------------------------------------
This is the Business Dashboard Page. Includes:

LeftSideBar.js        | Left side bar, has logout and add location buttons
LocationSearchBar.js  | Search fields at top of page center
Locations.js          | Search results at page center
LocationInfo.js       | Right side bar, has update listings button
AddLocation.js        | Modal form for adding location
UpdateListings.js     | Modal form for updating a location's listings 

Which render altogether to create the business dashboard.
----------------------------------------------------------------------------- */
class BusinessDashboardParent extends React.Component{


/* -----------------------------------------------------------------------------
Constructor is used for state design, modularized to pass as props
----------------------------------------------------------------------------- */
  constructor(props){
    super(props);
    this.state = {

      // Values for the parent
      currentLocation: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: ""
      },

  
      // Props for LeftSideBar -------------------------------------------------
      left: '',

      addLocation: () => {
        this.setState({formClass: this.state.formClass==="off"?"on":"off"});
      },


      // Props for LocationSearchBar -------------------------------------------
      search: (e) => {
        //pack e array into object for HTTP request
        let locationSearch = {
          name: e[0],
          street: e[1],
          city: e[2],
          state: e[3],
          zip: e[4]
        }

        //BE Call: On location search
        //'locationSearch' below is the search object
        console.log(locationSearch);
      },


      // Props for Location ----------------------------------------------------
      locations: [{ //Template for location
          name: '',
          street: '',
          city: '',
          state: '',
          zip: ''
      }],

      selectLocation: (sel) => {
        //BE Call: On location select
        //'sel' below is the location selected
        //Then: update LocationInfoListings
        console.log(sel);
      },


      //Props for LocationInfo -------------------------------------------------
      right: {
        address: 'No Selection',
        totalProducts: 0,
        productsList: [
          { 
            name: '',
            price: '',
            expiration: ''
          }
        ]
      },

      rightControls: {
        updateProducts: () => {
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        },

        deleteLocation: (e) => {
          let del = this.state.currentLocation;

          //BE Call: On location Delete
          //'del' below is the location to delete
          //Then: Select another location to display or display empty
          console.log(del);
        },
      },


      // Props for AddLocation--------------------------------------------------
      formClass: "off",
      form: {
        submitNewLocation: (location) => {
          //BE Call: On location add
          //'location' below is the location to add
          console.log(location);
        },

        closeForm: (e) => {
          this.setState({formClass: this.state.formClass==="off"?"on":"off"});
        },
      },


      //Props for UpdateListings------------------------------------------------
      updateListings: [],
      updateClass: "off",
      update: {
        submitUpdate: (save) => {
          //Set state to new save
          this.setState({updateListings: save});

          //Repackage listings for HTTP request
          let listings = save;
          for(let i = 0; i < listings.length; i++){
            delete listings[i].idx;
            delete listings[i].onChange;
            delete listings[i].remove
          }

          //Close the form
          this.state.update.closeForm();

          //BE Call: On products updated
          //'listings' below is the object for the fetch body
          //Then: Get current location again to get visual updates
          console.log(listings);

        },
        closeForm: (e) => {
          try{
            e.preventDefault();
          } catch(e){ console.log("saved!");}
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        },
      }
    };


  }


/* -----------------------------------------------------------------------------
Assemble page, pass state values into props

Action  | Child functionality implemented in parent, then passed down
Data    | Read only props
Initial | Starter data that may get changed
----------------------------------------------------------------------------- */
  render(){
    return(
      <div>
        <LeftSideBar       action={this.state.addLocation}    data={this.state.left}      />
        <LocationSearchBar action={this.state.search}                                     />
        <Locations         action={this.state.selectLocation} data={this.state.locations} />
        <LocationInfo      action={this.state.rightControls}  data={this.state.right}     />
        <AddLocation       action={this.state.form}           data={this.state.formClass} />
        <UpdateListings    action={this.state.update}         data={this.state.updateClass} initial={this.state.updateListings}/>
      </div>
    );
  }


/* -----------------------------------------------------------------------------
After Render
TODO: Add or pass in database connection, verify authentication
----------------------------------------------------------------------------- */
  componentDidMount(){
    //Alert logins on small bad screen sizes
    if(window.innerWidth <= window.innerHeight || window.innerWidth < 500 ){
      alert("Layout has not been optimized for small screens.Please log in with a larger device.");
    }

    //BE Call: On page load
    //Body should have session details

    //Set values for LeftSidebar
    this.setState({
      left: {
        companyName: "Error: Business Name",
        totalLocations: 0,
        logout: () => alert("log out")
      }
    });
  }

}
export default BusinessDashboardParent;

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
      businessId: '1/',

  
      // Props for LeftSideBar -------------------------------------------------
      left: '',

      addLocation: () => {
        this.setState({formClass: this.state.formClass==="off"?"on":"off"});
      },


      // Props for LocationSearchBar -------------------------------------------
      search: (e) => {
        //pack e array into object for HTTP request
        let loc = {
          street: e[0],
          city: e[1],
          state: e[2],
          zip: e[3]
        }

        // CHECK STATUSES
        //BE Call: On location search
        let base = 'https://fuo-backend.herokuapp.com/business/searchlocation/';
        let id = this.state.businessId;
        let arg = loc.street +
                  (loc.city !== ''?('.'+loc.city):'') +
                  (loc.state !== ''?','+loc.state:'') +
                  (loc.zip !== ''?' '+loc.zip:'');

        let url = base + id + arg;
        fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({locations: data, locationBg: (data.length===0?'empty':'')});
        })
        .catch(error => {
          this.setState({locations: [], locationBg: 'empty'});
        });
      },


      // Props for Location ----------------------------------------------------
      locations: [],
      locationBg: 'empty',

      selectLocation: (sel) => {
        //Error when selection not found
        if(sel === null){
          alert("Select Location failed");
          return
        }
        
        // CHECK STATUSES
        //BE Call: On location select
        //Then: update LocationInfoListings
        console.log(sel);
        let base = 'https://fuo-backend.herokuapp.com/business/selectlocation/';
        let id = this.state.businessId;
        let arg = sel.street + '.' + sel.city + ',' +  sel.state + ' ' + sel.zip;
        let url = base + id + arg;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
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
          //Then: Select another location to display or display empty
          const method = {method: 'DELETE'};
          let base = 'https://fuo-backend.herokuapp.com/business/deletelocation/';
          let id = this.state.businessId;

          let arg = del.street +
                  (del.city !== ''?('.'+del.city):'') +
                  (del.state !== ''?','+del.state:'') +
                  (del.zip !== ''?' '+del.zip:'');

          let url = base + id + arg;
          fetch(url, method)
          .then(res => res.json())
          .then(data => console.log(data));
        },
      },


      // Props for AddLocation--------------------------------------------------
      formClass: "off",
      form: {
        submitNewLocation: (location) => {
          //BE Call: On location add
          const method = {method: 'POST'};
          let base = 'https://fuo-backend.herokuapp.com/business/addlocation/';
          let id = this.state.businessId;
          let arg = location.street + '.' + location.city + ',' +  location.state + ' ' + location.zip;
          let url = base + id + arg;
          fetch(url, method)
          .then(res => res.json())
          .then(data => console.log(data));
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
          let list = JSON.parse(JSON.stringify(save))[0];
          for(let i = 0; i < list.length; i++){
            delete list[i].idx;
            delete list[i].onChange;
            delete list[i].remove
          }

          //Close the form
          this.state.update.closeForm();

          //BE Call: On products upload
          //Then: Get current location again to get visual updates
          let body = {
            product_name: list.name,
            product_img: list.image,
            category: list.category,
            price: list.price,
            expire_date: list.expiration,
            stock_amount: list.amount,
            coupon: list.rate,
            store_id: ''                 //Somehow get this
          };

          const method = {
            method: 'POST',
            body: JSON.stringify(body)
          };

          let base = 'https://fuo-backend.herokuapp.com/product/upload/';
          let id = this.state.businessId;

          let url = base + id ;
          fetch(url, method)
          .then(res => res.json())
          .then(data => console.log(data));

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
        <Locations         action={this.state.selectLocation} data={this.state.locations}   initial={this.state.locationBg}    />
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

    //BE Call: On page load TODO TODO TODO
    let base = 'https://fuo-backend.herokuapp.com/business/searchlocation/';
    let id = this.state.businessId;
    
    let url = base + id;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
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

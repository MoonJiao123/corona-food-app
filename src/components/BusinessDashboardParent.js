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
import ListingForm from './ListingForm';

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
      currentLocation: '',
      session: {
        businessId: '1/',
        user: 'business'
      },
      currentStore: '',

  
      // Props for LeftSideBar -------------------------------------------------
      left: {},

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

        //BE Call: On location search
        let base = 'https://fuo-backend.herokuapp.com/business/searchlocation/';
        let id = this.state.session.businessId;
        let arg = loc.street +
                  (loc.city !== ''?('.'+loc.city):'') +
                  (loc.state !== ''?','+loc.state:'') +
                  (loc.zip !== ''?' '+loc.zip:'');

        let url = base + id + arg;
        fetch(url,{mode: 'cors'})
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
        
        console.log(sel);
        //BE Call: On store get
        let base = 'https://fuo-backend.herokuapp.com/product/printallproduct/';
        let id = sel.store_id;
        let url = base + id;
        fetch(url)
        .then(res => res.json())
        .then(data => {
          let currentList = [];
          for(let i = 0; i < data.length; i++){
            currentList.push({
              image: data[i].product_image,
              category: data[i].category,
              name: data[i].product_name,
              amount: data[i].stock_amount,
              price: data[i].price,
              rate: data[i].coupon,
              product_id: data[i].product_id,
              expiration: data[i].expire_date
            });
          }
          let list = [];
          for(let i = 0; i < currentList.length; i++){
            list.push(this.state.fillListing(currentList[i], 7));
          }
          this.setState({
            right: {
              address: sel.address,
              totalProducts: data.length,
              productsList: data
            },
            updateListings: currentList,
            list: list,
            currentLocation: sel.address,
            currentStore: sel.store_id
          });
          
        })
        .catch(error => {
          console.log('caught');
          console.log(error);
        });
      },


      //Props for LocationInfo -------------------------------------------------
      right: {
        address: 'No Selection',
        totalProducts: 0,
        productsList: []
      },

      rightControls: {
        updateProducts: () => {
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        },

        deleteLocation: (e) => {

          //BE Call: On location Delete
          //Then: Select another location to display or display empty
          const method = {method: 'DELETE'};
          let base = 'https://fuo-backend.herokuapp.com/business/deletelocation/';
          let id = this.state.session.businessId;
          console.log(this.state.currentLocation);

          let arg = this.state.currentLocation;

          let url = base + id + arg;
          console.log(url);
          fetch(url, method)
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => {
            console.log('caught delete');
            console.log(error);
          });
        },
      },


      // Props for AddLocation--------------------------------------------------
      formClass: "off",
      form: {
        submitNewLocation: (location) => {
          //BE Call: On location add
          const method = {method: 'POST'};
          let base = 'https://fuo-backend.herokuapp.com/business/addlocation/';
          let id = this.state.session.businessId;
          let arg = location.street + '.' + location.city + ',' +  location.state + ' ' + location.zip;
          let name = '/' + location.name;
          let url = base + id + arg + name;
          fetch(url, method)
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => {
            console.log('caught add');
            console.log(error);
          });
        },

        closeForm: (e) => {
          this.setState({formClass: this.state.formClass==="off"?"on":"off"});
        },
      },


      //Props for UpdateListings------------------------------------------------
      updateListings: [],
      removeListings: [],
      list: [],
      idx: -1,
      key: 0,
      updateClass: "off",

      formControl: {
        remove: (idx) => {
          //find and remove by idx
          let listings = this.state.updateListings;
          let list = this.state.list;
          let remove = this.state.removeListings;
          let rem = null;
          
          for(let i = 0; i < list.length; i++){
            if(list[i].props.data.idx === idx){
              rem = i;
              break;
            }
          }
      
          //Not found error
          if(rem === null){
            alert("Remove failed: could not find item");
            return;
          }
      
          //Remove
          remove.push(listings[rem]);
          listings.splice(rem, 1);
          list.splice(rem, 1);
      
          //reset state
          this.setState({updateListings: listings, list: list, removeListings: remove});
        },

        onChange: (idx, obj, focus) => {
          //find and change by index
          let listings = this.state.updateListings;
          let list = this.state.list;
          let mod = null;
          
          for(let i = 0; i < listings.length; i++){
            if(list[i].props.data.idx === idx){
              mod = i;
              break;
            }
          }
      
          //Not found error
          if(mod === null){
            alert("Change failed: could not find item");
            return;
          }
      
          //Modify
          listings[mod] = obj;
          list[mod] = this.state.fillListing(listings[mod], focus);
          this.setState({updateListings: listings, list: list});
        }
      },

      update: {
        submitUpdate: () => {
          //Repackage listings for HTTP request
          let list = JSON.parse(JSON.stringify(this.state.updateListings));
          for(let i = 0; i < list.length; i++){
            delete list[i].idx;
            delete list[i].onChange;
            delete list[i].remove
          }
          //Close the form
          this.state.update.closeForm();

          let body = [];
          let ids = [];
          for(let i = 0; i < list.length; i++){
            body.push({
              product_name: list[i].name,
              product_img: list[i].image,
              category: list[i].category,
              price: list[i].price,
              expire_date: list[i].expiration,
              stock_amount: list[i].amount,
              coupon: list[i].rate
            });
            ids.push(list[i].product_id);
          }
          
          //BE Call: On products upsert
          let method = {
            method: 'POST',
            headers:  {
              'Content-Type': 'application/json'
            },
            body: {}
          };

          let base = 'https://fuo-backend.herokuapp.com/product/upsert/';
          let id = this.state.currentStore + '/';
          for(let i = 0 ; i < body.length; i++){

            let arg = ids[i];
            let url = base + id + arg;
            method.body = JSON.stringify(body[i]);
            console.log('to: ' + url);
            console.log(method);

            fetch(url, method)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => {
              console.log('caught upload');
              console.log(error);
            });
          }

          //BE Call: On products delete
          list = JSON.parse(JSON.stringify(this.state.removeListings));
          method = {method: 'DELETE'}
          base = 'https://fuo-backend.herokuapp.com/product/delete/';
          id = this.state.currentStore + '/';
          let url = '';
          let rem = [];
          console.log(list);
          for(let i = 0; i < list.length; i++){
            if(list[i].product_id !== '0'){
              url = base + id + list[i].product_id;
              fetch(url, method)
              .then(res => res.json())
              .then(data => console.log(data))
              .catch(error => {
                console.log('caught delete');
                console.log(error);
              });
            }
          }
        },

        addListing: (e) => {
          let listings = this.state.updateListings;
          let list = this.state.list;
          let newListing = {
            image:'',
            category:'None',
            name: '',
            amount: '',
            price: '',
            rate: '',
            product_id: '0',
            expiration: '',
            idx: this.state.idx,
            remove: this.state.formControl.remove,
            onChange: this.state.formControl.onChange
          }
          let newList = (<ListingForm data={newListing} key={this.state.key} action={this.state.formControl} focus={7}/>)
          listings.push(newListing);
          list.push(newList);
          this.setState({updateListings: listings, list: list, key: this.state.key+1, idx: this.state.idx-1});
        },

        closeForm: (e) => {
          try{
            e.preventDefault();
          } catch(e){ console.log("saved!");}
          this.setState({updateClass: this.state.updateClass==="off"?"on":"off"});
        },
      },

      fillListing: (list, focus) => {
          let newListing = {
            image: list.image===null?'':list.image,
            category: list.category,
            name: list.name,
            amount: list.amount,
            price: list.price,
            rate: list.rate,
            product_id: list.product_id,
            expiration: list.expiration,
            product_id: list.product_id,
            idx: this.state.idx,
            remove: this.state.formControl.remove,
            onChange: this.state.formControl.onChange
          }
          let fill = <ListingForm data={newListing} key={this.state.key} action={this.state.formControl} focus={focus}/>;
          this.setState({key: this.state.key+1, idx: this.state.idx-1});
          return fill;
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
        <UpdateListings    action={this.state.update}         data={this.state.updateClass} initial={this.state.list}/>
      </div>
    );
  }


/* -----------------------------------------------------------------------------
After Render
TODO: Add or pass in database connection, verify authentication
----------------------------------------------------------------------------- */
  componentDidMount(){
    //Alert logins on small bad screen sizes
    if(window.innerWidth / window.innerHeight < 1.7 || window.innerHeight < 760){
      alert("Layout has not been optimized for small screens.Please log in with a larger device.");
    }

    //BE Call: On page load TODO TODO TODO
    let session = window.location.hash;
    window.location.hash = '';
    console.log(session);
    let base = 'https://fuo-backend.herokuapp.com/business/printalllocation/';
    let id = this.state.session.businessId;
    
    let url = base + '1';
    fetch(url)
    .then(res => res.json())
    .then(data => {this.setState({locations: data, locationBg: ''})})
    .catch(error => {
      console.log('caught load');
      console.log(error);
    });
    
    let numLocations = 0;
    base = 'https://fuo-backend.herokuapp.com/business/numoflocations/';
    url = base + '1';
    fetch(url)
    .then(res => res.json())
    .then(data => numLocations = data)
    .catch(error => {
      console.log('caught numLocations');
      console.log(error);
    });

    let businessName = '';
    base = 'https://fuo-backend.herokuapp.com/business/getbusinessname/';
    url = base + '1';
    fetch(url)
    .then(res => res.json())
    .then(data => businessName = data)
    .catch(error => {
      console.log('caught numLocations');
      console.log(error);
    });

    //Set values for LeftSidebar
    this.setState({
      left: {
        companyName: businessName,
        totalLocations: numLocations, 
        logout: () => alert("log out")
      }
    });
  }

}
export default BusinessDashboardParent;
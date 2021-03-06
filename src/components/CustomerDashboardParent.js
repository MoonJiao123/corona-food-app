/**
 * This file creates the high level component for the customer 
 * dashboard page. It renders all other subcomponents needed to 
 * display all information to the user approproately.
 * 
 * Contributors: Tabassum Alam, Thuyet Ta, Darien
 */

import React from 'react';
import CustomerHeader from './CustomerHeader'
import ShopItems from './ShopItems'
import Cart from './Cart'
import SearchFilters from './SearchFilters';
import {connect} from 'react-redux'
import {refreshed, getList} from './actions/cartActions'
import store from '../index'

class CustomerDashboardParent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    showShoppingList = () => {
        this.setState({show:true});

        //BE Call get items
        let base = 'https://fuo-backend.herokuapp.com/cart/list/';
        let id = store.getState().customer;
        let url = base + id;
        fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        if(res.status === 200){
            return res.json();
        }
        else{
            throw new Error('Could not get cart');
        }
      })
      .then(data => {
          //Set state here
          let add = [];
          for(let i = 0; i < data.length; i ++){
              add.push(Object.assign({}, data[i].product));
          }
          this.props.getList(add);
        })
      .catch(err => {
          console.log("caught cart");
          console.log(err);
      });
      
    };

    hideShoppingList = () => {
        this.setState({show:false});
    };

    render () {
        return (
            <div id="customer">
                <CustomerHeader handleClick={this.showShoppingList}/>
                <SearchFilters/>
                <ShopItems/>
                <Cart show={this.state.show} handleClose={this.hideShoppingList}> </Cart>
            </div>
        );
    }

    componentDidMount(){
        let body = {
            token: localStorage.getItem("fuo-c")
        };
      
        //BE Call refresh
        fetch('https://fuo-backend.herokuapp.com/users/me/from/token/customer', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(body)
        })
        .then(res => {
            if(res.status === 200){
            return res.json()
            }
            else{
            window.location.assign('https://corona-food.herokuapp.com/');
            throw new Error('There is no session');
            }
        })
        .then(data => {
            this.props.refreshed(data.user)
        })
        .catch(err => {
            console.log("caught c refresh");
            console.log(err);
            window.location.assign('https://corona-food.herokuapp.com/');
        });
    }
}
const mapStateToProps = (state)=>{
    return {
        customer: state.customer,
        address: state.address,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        refreshed: (session)=>{dispatch(refreshed(session))},
        getList: (list) => {dispatch(getList(list))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomerDashboardParent);
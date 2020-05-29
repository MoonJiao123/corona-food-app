/**
 * This file creates the high level component for the customer 
 * dashboard page. It renders all other subcomponents needed to 
 * display all information to the user approproately.
 * 
 * Contributors: Tabassum Alam, Thuyet Ta
 */

import React from 'react';
import CustomerHeader from './CustomerHeader'
import ShopItems from './ShopItems'
import Cart from './Cart'
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
          console.log(data)
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
        console.log(store.getState());
        return (
            <div id="customer">
                <CustomerHeader handleClick={this.showShoppingList}/>
                <ShopItems/>
                <Cart show={this.state.show} handleClose={this.hideShoppingList}> </Cart>
            </div>
        );
    }

    componentDidMount(){
        let body = {
            token: localStorage.getItem("fuo")
        };
        console.log(body);
      
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
            throw new Error('There is no session');
            }
        })
        .then(data => {
            console.log(data.user.customer_id);
            //set state for customer
        })
        .catch(err => {
            console.log("caught c refresh");
            console.log(err);
            this.setState({currentMessage: 'Something went wrong...', currentStatus:'bad'});
            window.location.replace('localhost:3000');
            window.location.assign('localhost:3000');
        });
    }
}

export default CustomerDashboardParent;
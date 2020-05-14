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
import ShoppingListItem from './ShoppingListItem'
import ShoppingListParent from './ShoppingListParent'

class CustomerDashboardParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            searchBar: {

            },

            searchResultsList: {
                productsList: [{
                    name: '',
                    price: 0,
                    expiration: '',
                    business: '',
                    category: '',
                    address: ''
                }],
                // addCoupon: () => ..... etc
            },
            
            shoppingList: {
                item: [{
                    name: '',
                    price: 0,
                    business: '',
                    category: '',
                    address: '',
                    couponBarCode: '',
                    remove: false
                }],
            },

            listItem: {

            },

            show: false
        };
    }

    componentWillMount() {

    }

    showShoppingList = () => {
        this.setState({show:true});
    };

    hideShoppingList = () => {
        this.setState({show:false});
    };

    render () {
        return (
            <div>
                <CustomerHeader handleClick={this.showShoppingList}/>
                <ShopItems/>
                <ShoppingListParent show={this.state.show} handleClose={this.hideShoppingList}> </ShoppingListParent>
            </div>

        );
    }

    componentDidMount () {

    }

    componentWillUnmount () {

    }
}

export default CustomerDashboardParent;
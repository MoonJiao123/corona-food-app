/**
 * This file creates the high level component for the customer 
 * dashboard page. It renders all other subcomponents needed to 
 * display all information to the user approproately.
 * 
 * Contributors: Tabassum Alam
 */

import React from 'react';

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

        };
    }

    componentWillMount() {

    }

    render () {
        return (

            <h1> welcome, customer </h1>

        );
    }

    componentDidMount () {

    }

    componentWillUnmount () {

    }
}

export default CustomerDashboardParent;
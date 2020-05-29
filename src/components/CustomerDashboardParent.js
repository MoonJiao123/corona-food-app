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
import ShoppingListItem from './ShoppingListItem'
import ShoppingListParent from './ShoppingListParent'


class CustomerDashboardParent extends React.Component {
    constructor(props) {
        super(props);
    }

    // shop items

    componentWillMount() {
        this.setState({show:false});
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
                <Cart show={this.state.show} handleClose={this.hideShoppingList}> </Cart>
            </div>
        );
    }
}

export default CustomerDashboardParent;
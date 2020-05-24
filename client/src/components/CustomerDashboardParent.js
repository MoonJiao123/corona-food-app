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

// cart actions
const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';

//add cart action
const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}




class CustomerDashboardParent extends React.Component {
    constructor(props) {
        super(props);
    }

    // shop items
    componentWillMount() {
        this.setState({
                items: [
                    {id: 0, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                    {id: 1, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                    {id: 2, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                    {id: 3, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                ],
                addItems: []
            }
        );
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
                <ShopItems data={this.state.items}/>
                <ShoppingListParent show={this.state.show} handleClose={this.hideShoppingList}> </ShoppingListParent>
            </div>
        );
    }
}

export default CustomerDashboardParent;
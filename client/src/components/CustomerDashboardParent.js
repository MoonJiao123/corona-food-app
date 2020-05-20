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
    }

    componentDidMount(){

    }

    componentWillUnmount () {

    }

    componentWillMount() {
        this.setState({
                items: [
                    {id: 0, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                    {id: 1, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                    {id: 2, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                    {id: 3, src: "https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg", name: "Tomatoes", exp:"6/6/1998", qnt:"6",price:"99"},
                ]
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
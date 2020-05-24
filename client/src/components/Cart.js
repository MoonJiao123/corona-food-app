import React from 'react';
import ShoppingListItem from './ShoppingListItem';

/* ---------------------------------------------------------------------
Component Object: will contain a list of user saved shopping items
--------------------------------------------------------------------- */

class ShoppingListParent extends React.Component{

    render(){
        console.log("TTA");
        console.log(this.props);
        // TODO map data to shopping list items, add keys
        const items = null;
        let key = 0;

        const showHideClassName = this.props.show ? "shopping-list" : "display-none";

        //TODO: fill props
        return(
            <div id={showHideClassName}>
                <button id="close-shopping-list" onClick={this.props.handleClose}>X</button>
                <div id="shopping-list-container">
                    {/* TODO list goes here */}
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                    <ShoppingListItem/>
                </div>
                <button id="clear-shopping-list" onClick={null}>Clear</button>
            </div>
        );
    }
}
export default Cart;
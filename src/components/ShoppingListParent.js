/** --------------------------------------------------------------------
Contributors: Darien Tsai
High level component shopping list
--------------------------------------------------------------------- */
import React from 'react';
import ShoppingListItem from './ShoppingListItem';

/* ---------------------------------------------------------------------
Component Object: will contain a list of user saved shopping items
--------------------------------------------------------------------- */
class ShoppingListParent extends React.Component{

  render(){
    // TODO map data to shopping list items, add keys
    const items = null;
    let key = 0;

    //TODO: fill props
    return(
      <div id="shopping-list">

        {/** Button to close shopping list */}
        <button id="close-shopping-list" onClick={null}>X</button>

        {/** List of saved coupons */}
        <div id="shopping-list-container">
          <ShoppingListItem/>
          <ShoppingListItem/>
          <ShoppingListItem/>
        </div>

        {/** Button to clear shopping list */}
        <button id="clear-shopping-list" onClick={null}>Clear</button>
      </div>
    );
  }
}
export default ShoppingListParent;
/** --------------------------------------------------------------------
Contributors: Darien Tsai
High level component shopping list
--------------------------------------------------------------------- */
import React from 'react';
import ShoppingListItem from 'ShoppingListItem';

/* ---------------------------------------------------------------------
Component Object: will contain a list of user saved shopping items
--------------------------------------------------------------------- */
class ShoppingListParent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // TODO map data to shopping list items, add keys
    const items = null;
    let key = 0;

    return(
      <div id="shopping-list">
        <button id="close-shopping-list" onClick={/*TODO*/}>X</button>
        <div id="shopping-list-container">
          {/* TODO list goes here */}
        </div>
        <button id="clear-shopping-list" onClick={/*TODO*/}>Clear</button>
      </div>
    );
  }
}
export default ShoppingListParent;
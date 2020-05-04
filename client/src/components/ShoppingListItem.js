/** --------------------------------------------------------------------
Contributors: Darien Tsai
Reusable component for a shopping list item
--------------------------------------------------------------------- */

import React from 'react';

class ShoppingListItem extends React.Component{
  constructor(props){
    super(props);
  }

/* ---------------------------------------------------------------------
Reusable list item: indidual user saved shopping items
--------------------------------------------------------------------- */
  render(){
    return(
      <div className="shopping-list-item">

        <div classname="shopping-list-item-left">
          <p>
            <span>category icon</span>
            Item name
          </p>
          <p>Address</p>
          <p>Business name</p>
        </div>

        <div classname="shopping-list-item-mid">
          <div>
            <p>Price</p>
            <p>Savings</p>
          </div>
          <img/>
        </div>

        <div className="shopping-list-item-right">
          <button onClick={/*TODO */}>X</button>
        </div>

      </div>
    );
  }
}
export default ShoppingListItem;
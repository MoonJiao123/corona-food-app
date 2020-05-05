/** --------------------------------------------------------------------
Contributors: Darien Tsai
Reusable component for a shopping list item
--------------------------------------------------------------------- */

import React from 'react';

class ShoppingListItem extends React.Component{
  
/* ---------------------------------------------------------------------
Reusable list item: indidual user saved shopping items
--------------------------------------------------------------------- */
  render(){

    //TODO: fill props
    return(
      <div className="shopping-list-item">

        <div className="shopping-list-item-left">
          <p className="shopping-list-item-name">
            <span className="shopping-list-item-icon">category icon</span>
            Item name
          </p>
          <p className="shopping-list-item-address">Address</p>
          <p className="shopping-list-item-business">Business</p>
        </div>

        <div classname="shopping-list-item-mid">
          <div>
            <p>Price</p>
            <p>Savings</p>
          </div>
          {/** TODO: Add generated coupon here */}}
        </div>

        <div className="shopping-list-item-right">
          <button onClick={null}>X</button>
        </div>

      </div>
    );
  }
}
export default ShoppingListItem;
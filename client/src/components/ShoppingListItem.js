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

        {/** Category, Item Name, Address, Business displays */}
        <div className="shopping-list-item-left">
          <p className="shopping-list-item-name">
            <span className="shopping-list-item-icon">icon </span>
            Item name
          </p>
          <p className="shopping-list-item-address">Address</p>
          <p className="shopping-list-item-business">Business</p>
        </div>

        {/** Price, Discount displays */}
        <div className="shopping-list-item-mid">
          <div>
            <p className="shopping-list-price">$3.00</p>
            <p className="shopping-list-discount">-20%</p>
          </div>
          {/** TODO: Add generated coupon here */}
        </div>

        {/** Remove coupon button */}
        <div className="shopping-list-item-right">
          <button title="Remove" onClick={null}>X</button>
        </div>

      </div>
    );
  }
}
export default ShoppingListItem;
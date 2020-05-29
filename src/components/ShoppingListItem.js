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
          {this.props.data.product_name}
          </p>
          <p className="shopping-list-item-address">Address</p>
          <p className="shopping-list-item-business">Business</p>
        </div>

        <div className="shopping-list-item-mid">
          <div>
            <p className="shopping-list-price">{this.props.data.price}</p>
            <p className="shopping-list-discount">{this.props.data.discount}</p>
          </div>
          {/** TODO: Add generated coupon here */}
        </div>

        <div className="shopping-list-item-right">
          <button title="Remove" onClick={this.props.remove(this.props.id)}>X</button>
        </div>

      </div>
    );
  }
}
export default ShoppingListItem;
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ShoppingListItem from './ShoppingListItem';
import { removeItem} from './actions/cartActions'
import store from '../index'

/* ---------------------------------------------------------------------
Component Object: will contain a list of user saved shopping items
--------------------------------------------------------------------- */

class Cart extends React.Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleClear = () => {
        let base = 'https://fuo-backend.herokuapp.com/cart/delete/';
        let id = store.getState().customer_id;
        let url = base + id;
        fetch(url, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
        })
        .then(res => {
            if(res.status === 200){
                return res.json()
            }
            else{
                throw new Error('There is no session');
            }
        })
        .then(data => {
            console.log(data);
            //set state for customer
        })
        .catch(err => {
            console.log("caught clear");
            console.log(err);
        });
    }

    render(){
        let addedItems = this.props.items.length ? (
            this.props.items.map(item=> {
                return (
                    <div className="shopping-list-item">
                        <div className="shopping-list-item-left">
                            <p className="shopping-list-item-name">
                                <span className="shopping-list-item-icon">icon</span>
                                {item.name}
                            </p>
                            <p className="shopping-list-item-address">Address</p>
                            <p className="shopping-list-item-business">Business</p>
                        </div>

                        <div className="shopping-list-item-mid">
                            <div>
                                <p className="shopping-list-price">${item.price}</p>
                                <p className="shopping-list-discount">{item.quantity}</p>
                            </div>
                        </div>

                        <div className="shopping-list-item-right">
                            <button title="Remove" onClick={()=>{this.handleRemove(item.id)}}>X</button>
                        </div>
                    </div>
                )
            })
        ):(
            <p>Your cart is empty</p>
        )
        // TODO map data to shopping list items, add keys
        const items = null;
        let key = 0;

        const showHideClassName = this.props.show ? "shopping-list" : "display-none";

        //TODO: fill props
        return(
            <div id={showHideClassName}>
                <button id="close-shopping-list" onClick={this.props.handleClose}>X</button>
                <div id="shopping-list-container">
                    {addedItems}
                </div>
                <button id="clear-shopping-list" onClick={null}>Clear</button>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)


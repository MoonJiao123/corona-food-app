import React from 'react';
import Barcode from 'react-barcode';
import {connect} from 'react-redux';
import {getList} from './actions/cartActions'
import store from '../index'

/* ---------------------------------------------------------------------
Component Object: will contain a list of user saved shopping items
--------------------------------------------------------------------- */
var list_key = 1;
class Cart extends React.Component{

    handleRemove = (id)=>{

        //BE Call delete item
        let base = 'https://fuo-backend.herokuapp.com/cart/delete/';
        let user = store.getState().customer + '/';
        let url = base + user + id;
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
            let add = [];
            for(let i = 0; i < data.length; i ++){
                add.push(Object.assign({}, data[i].product));
            }
            //this.props.removeItem(add);
            this.props.getList(add);
        })
        .catch(err => {
            console.log("caught remove");
            console.log(err);
        });
    }

    handleClear = () => {
        //BE Call clear cart
        let base = 'https://fuo-backend.herokuapp.com/cart/delete/';
        let id = store.getState().customer;
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
                throw new Error('Failed to clear');
            }
        })
        .then(data => {
            //this.props.cartCleared(data);
            this.props.getList(data);
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
                    <div className="shopping-list-item" key={list_key++}>

                        <Barcode width={1} value={item.coupon + " off"} />

                        <div className="shopping-list-item-left">
                            <p className="shopping-list-item-name">
                                {item.product_name}
                            </p>
                            <p className="shopping-list-item-address">{item.store_product.address}</p>
                            <p className="shopping-list-item-business">{item.store_product.business.name}</p>
                        </div>

                        <div className="shopping-list-item-mid">
                            <div>
                                <p className="shopping-list-price">${item.discounted_price}</p>
                                <p className="shopping-list-discount">${item.price}</p>
                            </div>
                        </div>

                        <div className="shopping-list-item-right">
                            <button title="Remove" onClick={()=>{this.handleRemove(item.product_id)}}>-</button>
                        </div>
                    </div>
                )
            })
        ):(
            <p>Your cart is empty</p>
        )

        const showHideClassName = this.props.show ? "shoppinglist-parent" : "display-none";

        return(
            <div id={showHideClassName}>
                <div id="shopping-list">
                    <button id="close-shopping-list" onClick={this.props.handleClose}>X</button>
                    <div id="shopping-list-container">
                        {addedItems}
                    </div>
                    <button id="clear-shopping-list" onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getList: (list)=>{dispatch(getList(list))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)


import React,{Component} from 'react';
import styled from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import store from '../index';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';

const ItemsContainer = styled.div`
    width: 80%;
    height: 90%;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
const Item = styled.div`
    padding: 20px 30px;
    height: 120px;
    display: flex;
    position:relative;
    &: nth-child(2n){
        border-top:  1px solid #E1E8EE;
        border-bottom:  1px solid #E1E8EE; 
    }
`

const Image = styled.img`
    margin-right: 60px;
    max-width: 30%;
    max-height:100%;
`
const Description = styled.div`
    padding-top: 10px;
    margin-right: 60px;
    width: 115px;
`
const ItemName = styled.h3`
    padding-bottom: 5px;
`
const Price = styled.div`
    width: 83px;
    padding-top: 15px;
    font-size: 16px;
    position: absolute;
    left: 85%;
`
const AddToCartButton = styled.button`
    color: #67d367;
    border-radius: 30px;
    border: none;
    outline: none;
    display: flex;
    margin-top: 8px;
    padding: 6px;
    position: absolute;

    transition: fill 0.25s;
    &: hover {
        background-color: #67d367;
        color: white; 
    }
`;
var search_key = -1;
class ShopItems extends Component{

    handleRemove = (id)=>{
        this.props.removeItem(id);

        //BE Call delete item
        let base = 'https://fuo-backend.herokuapp.com/cart/delete/';
        let user = store.getState().customer_id + '/';
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
            this.props.removeItem(data);
            //set state for customer
        })
        .catch(err => {
            console.log("caught remove");
            console.log(err);
        });
    }

    handleClick = (id)=>{
        //BE Call add to cart
        let base = 'https://fuo-backend.herokuapp.com/cart/add/';
        let arg = store.getState().customer + '/';
        let url = base + arg + id;
        
        fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        if(res.status === 200){
            return res.json();
        }
        else{
            throw new Error('Could not get cart');
        }
      })
      .then(data => {          
            this.props.addToCart(data);
        })
      .catch(err => {
          console.log("caught cart");
          console.log(err);
      });
    }

    render () {
        // individual item
        let items = this.props.items.map(
            (item) => {
                
                return (
                    <Item key={search_key--}>
                        <Image src={item.product_img}/>
                        <Description>
                            <ItemName>{item.product_name}</ItemName>
                            <h5>Good by: {item.exp}</h5>
                            <h5>Quantity: {item.amount}</h5>
                        </Description>

                        <Price>
                            <h3>${item.price}</h3>
                            <AddToCartButton onClick={()=>{this.handleClick(item.product_id)}}> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
                        </Price>
                    </Item>
                )
        });

        return (
            //item list
            <ItemsContainer>
                {items}
            </ItemsContainer>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        shoppingItems: state.shoppingItems
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (cart)=>{dispatch(addToCart(cart))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopItems)
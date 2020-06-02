import React,{Component} from 'react';
import styled from 'styled-components';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import store from '../index';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';

const ItemsContainer = styled.div`
    width: 60%;
    height: 90%;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;
    overflow-y: auto;
`

const Item = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 5px solid white;
    border-right: 5px solid white;
    box-sizing: border-box;
    overflow: hidden;
    &: hover {
        border-left: 5px solid #73f073;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        height: 50%;
        border-bottom: 2px solid gray;
        text-align: center;

        &: hover {
            border-right: 5px solid #73f073;
        }
      }
`

const Image = styled.img`
    width: 13%;
    @media (max-width: 800px) {
        width: auto;
        height: 30%;
      }
`
const Description = styled.div`
    width: 50%;

    @media (max-width: 800px) {
        width: 90%;
      }
`
const ItemName = styled.h3`
    font-size: 1.5em;
    text-overflow: ellipse
`
const Price = styled.div`
    outline: none;
    border: none;
    padding: 1%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    algin-items: center;
    width: 20%;

    @media (max-width: 800px) {
        width: 50%;
        line-height: 2.5;
      }
`
const AddToCartButton = styled.button`
    color: #67d367;
    border: none;
    outline: none;
    width: 3em;
    height: 3em;
    padding: 2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 50%;

    &: hover {
        background-color: #67d367;
        color: white; 
    }
`;
var search_key = -1;
class ShopItems extends Component{

    handleClick = (id)=>{
        //BE Call add to cart
        let base = 'https://fuo-backend.herokuapp.com/cart/add/';
        let arg = store.getState().customer + '/';
        let url = base + arg + id;
        fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
        //body: JSON.stringify(body)
      })
      .then(res => {
        if(res.status === 200){
            return res.json();
        }
        else{
            throw new Error('could not add to cart');
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
                            <h5>Good by: {item.expire_date}</h5>
                            <h5>Original Amount: {item.stock_amount}</h5>
                            <h5>Miles: {item.distance.toFixed(2)}</h5>
                        </Description>

                        <Price>
                            <h3>${item.discounted_price.toFixed(2)}</h3>
                            <AddToCartButton onClick={()=>{this.handleClick(item.product_id)}}> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
                        </Price>
                    </Item>
                )
        });

        return (
            //item list
            <ItemsContainer className={this.props.bg}>
                {items}
            </ItemsContainer>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        bg: state.bg
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (cart)=>{dispatch(addToCart(cart))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopItems)
import React,{Component} from 'react';
import styled from 'styled-components'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import {connect} from 'react-redux'
import {addToCart} from './actions/cartActions'

const ItemsContainer = styled.div`
    width: 80%;
    height: 90%;
    margin: 80px auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
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

class ShopItems extends Component{
    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render () {
        console.log("Shop Items");
        console.log(this.props);
        // individual item
        let items = this.props.items.map(
            (item) => {
                return (
                    <Item>
                        <Image src={item.img}/>
                        <Description>
                            <ItemName>{item.name}</ItemName>
                            <h5>Good by: {item.exp}</h5>
                            <h5>Quantity: {item.qnt}</h5>
                        </Description>

                        <Price>
                            <h3>${item.price}</h3>
                            <AddToCartButton onClick={()=>{this.handleClick(item.id)}}> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
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
        items: state.items
    }
}
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopItems)

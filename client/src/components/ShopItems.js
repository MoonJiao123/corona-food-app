import React from 'react';
import styled from 'styled-components'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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

export default function ShopItems() {
    return (
        <ItemsContainer>
            {/* Item 1 */}
            <Item>
                <Image src="https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg"/>
                <Description>
                    <ItemName>Tomatoes</ItemName>
                    <h5>Good by: 5/6/2020</h5>
                    <h5>Quantity: 5</h5>
                </Description>

                <Price>
                    <h3>$549</h3>
                    <AddToCartButton> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
                </Price>
            </Item>
            {/* Item 2 */}
            <Item>
                <Image src="https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg"/>
                <Description>
                    <ItemName>Tomatoes</ItemName>
                    <h5>Good by: 5/6/2020</h5>
                    <h5>Quantity: 5</h5>
                </Description>

                <Price>
                    <h3>$549</h3>
                    <AddToCartButton> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
                </Price>
            </Item>
            {/* Item 3 */}
            <Item>
                <Image src="https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg"/>
                <Description>
                    <ItemName>Tomatoes</ItemName>
                    <h5>Good by: 5/6/2020</h5>
                    <h5>Quantity: 5</h5>
                </Description>

                <Price>
                    <h3>$549</h3>
                    <AddToCartButton> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
                </Price>
            </Item>
            {/* Item 4 */}
            <Item>
                <Image src="https://eatforum.org/content/uploads/2018/05/EAT_pasta_tomato_basil_2018_1200x675-900x675.jpg"/>
                <Description>
                    <ItemName>Tomatoes</ItemName>
                    <h5>Good by: 5/6/2020</h5>
                    <h5>Quantity: 5</h5>
                </Description>

                <Price>
                    <h3>$549</h3>
                    <AddToCartButton> <AddShoppingCartIcon fontSize={'large'}/> </AddToCartButton>
                </Price>
            </Item>



        </ItemsContainer>
    );
}
import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SortIcon from '@material-ui/icons/Sort';

const Header = styled.div`
    position: absolute; /* stay in place on scroll and position relative to view */
    right: 0;
    top: 0;
    height: 70px;
    width: 100%;
    color: white;
    background-color: #67d367;
    overflow-x: hidden; /* disable horizontal scroll */
    display: flex;
    overflow: visible;
`;

const Title = styled.h1`
    top: 50%;
    padding-left: 30px;
    position: absolute;
    -ms-transform: translateY(-50%); /* align vertically */
    transform: translateY(-50%);
`;
const SearchBar = styled.div`
    border-radius: 30px;
    width: 50%;
    margin: 0;
    display: flex;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

const SearchInput = styled.input`
    type="text";
    color: 'black';
    placeholder: "Enter item";
    font-size: 20px;
    position: flex;
    margin-left: 30px;
    top: 50%;
    width: 100%;
    outline: none;
    border: none;
`

const SearchButton = styled.button`
    color: #67d367;
    border-radius: 30px;
    border: none;
    outline: none;
    padding: 16px;
    display: flex;

    transition: fill 0.25s;
    &: hover {
        color: white;
        background-color: #67d367;
      }
`;

const CartButton = styled.button`
    color: white;
    text-size: 30px;
    background-color: #67d367;
    margin-right: 30px;
    border: none;
    outline: none;
    margin-top: 16px;
    margin-bottom: 16px;

    position: absolute;
    right: 5px;
    transition: fill 0.25s;
    &: hover {
        color: #cccccc;
    }
`;

const TextButton = styled.button`
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%); /* align vertically */
    transform: translateY(-50%);
    right: 100px;
    padding: 5px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    outline: none;
    background: white;
    &: hover {
            color: white;
            background: black;
    }
`;

const Dropbtn = styled.button`
  display: inline-block;
  position: relative;
  left: 10 px;
  color: #67d367;
  text-align: center;
  text-decoration: none;
  position: absolute;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: white;
  &: hover {
         color: white;
         background: black;
  }
  z-index: 1;
`;

const DropDownContent = styled.div`
  position:absolute;
  display: none;
  top: 10%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const DropDownLi = styled.li`
  float:bottom;
  display: inline-block;
  position: absolute;
  top: 100px;
  left: 20px;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
  z-index:9;
`;

const SubA = styled.a`
  color: black;
  position:relative;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
  z-index:99;
`;


/** function to create the Header component */
class CustomerHeader extends Component {
    handleClick = action => {
        if (!action) return;

        if (this.props.onClick) this.props.onClick(action);
     };

    render = () => {
    return (
      <Header>
            <Title>
                FUO
            </Title>
            <DropDownLi>
                       <Dropbtn onClick={() => this.handleClick("DropDown")}>
                                    Sort <SortIcon/>
                       </Dropbtn>
                       <DropDownContent>
                          {" "}
                          <SubA onClick={() => this.handleClick("Link1")}>Sort A</SubA>
                          <SubA onClick={() => this.handleClick("Link2")}>Sort B</SubA>
                          <SubA onClick={() => this.handleClick("Link3")}>Sort C</SubA>
                        </DropDownContent>
            </DropDownLi>

            <SearchBar>
                        <SearchInput
                            placeholder = "Search Item"
                        />
            <SearchButton> <SearchIcon/> </SearchButton>
            </SearchBar>


            <TextButton type="submit" size={"small"}> Log Out </TextButton>
            <CartButton> <ShoppingCartIcon fontSize='large'/> </CartButton>
      </Header>
    );
    };
}

export default CustomerHeader;

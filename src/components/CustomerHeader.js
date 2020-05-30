import React, { Component } from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import store from '../index';
import {connect} from 'react-redux';
import {searchedItem, setBg} from './actions/cartActions';


const Header = styled.div`
    height: 8%;
    width: 100%;
    color: white;
    background-color: #67d367;
    overflow-x: hidden; /* disable horizontal scroll */
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

const Title = styled.h1``;

const SearchInput = styled.input`
    type="text";
    color: 'black';
    placeholder: "Enter item";
    font-size: 1.5em;
    padding: .5% 1.5%;
    width: 50%;
    outline: none;
    border: none;
    border-radius: 25px;
`

const CartButton = styled.button`
    color: white;
    text-size: 30px;
    background-color: #67d367;
    border: none;
    outline: none;
    transition: fill 0.25s;
    &: hover {
        color: #dddddd;
    }
`;

const TextButton = styled.button`
    padding: .3% .5%;
    font-size: 1em;
    width: 5em;
    text-align: center;
    border-radius: 5px;
    border: none;
    outline: none;
    background: white;
    white-space: nowrap;
    &: hover {
            color: white;
            background: green;
    }
`;

/** function to create the Header component */
class CustomerHeader extends Component {
    constructor(props){
      super(props);
    
      //bindings
      this.handleSearch = this.handleSearch.bind(this);
      this.logout = this.logout.bind(this);
    }

    keyPress = e => {
      if(e.keyCode == 13){
         this.handleSearch(e);
      }
   }

    handleSearch = e => {
      if(e.target.value === ''){
        return;
      }

      //BE Call search
      let obj = store.getState();
      let base = 'https://fuo-backend.herokuapp.com/product/';
      let id = obj.customer + '/';
      let arg = obj.sort + '/' +
                obj.category + '/' +
                e.target.value.trim().split(' ').join(';') + '/' +
                (obj.low===''?'0':obj.low) + '/' +
                (obj.high===''?'1000':obj.high);
      let url = base + id + arg;
      console.log(url);
      fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        if( res.status === 200){
          return res.json();
        }
        else{
          throw new Error("bad search");
        }
      })
      .then(data => {
        console.log(data)
        this.props.searchedItem(data);
        this.props.setBg(data.length);
      })
      .catch(err => {
          console.log("caught search");
          console.log(err);
      });
    }

    logout = e => {
      e.preventDefault();
      localStorage.clear();
      window.location.assign('landing.html');
    }

    render = () => {
    return (
      <Header>
            <Title>FUO</Title>
            <SearchInput placeholder="Search Item" /*onChange={this.handleSearch}*/ onKeyDown={this.keyPress}/>
            <CartButton type="button" onClick={this.props.handleClick}> <ShoppingCartIcon fontSize='large'/> </CartButton>
            <TextButton size={"small"} onClick={this.logout}> Log Out </TextButton>
      </Header>
    );
    };
}

const mapStateToProps = (state)=>{
  return {
      items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      searchedItem: (items)=>{dispatch(searchedItem(items))},
      setBg: (bg)=>{dispatch(setBg(bg))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CustomerHeader);

import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {setSort, setCat, setLow, setHi} from './actions/cartActions';

class SearchFilters extends React.Component{

  handleSort = (e) => {
    console.log(e.target.value);
    this.props.setSort(e.target.value);
  }

  handleCategory = (e) => {
    console.log(e.target.value);
    this.props.setCat(e.target.value);
  }

  handleMin = (e) =>{
    console.log(e.target.value);
    this.props.setLow(e.target.value);
  }

  handleMax = (e) =>{
    console.log(e.target.value);
    this.props.setHi(e.target.value);
  }

  render(){
    return(
      <div id="searchFilters">
        <FormControl className="filter">
          <InputLabel >Sort</InputLabel>
          <Select
            value={this.props.sort}
            onChange={this.handleSort}>
            <MenuItem value={'Distance'}>Closest Distance</MenuItem>
            <MenuItem value={'Price'}>Lowest Price</MenuItem>
            <MenuItem value={'Expiration'}>Freshness</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filter">
          <InputLabel >Category</InputLabel>
          <Select
            value={this.props.category}
            onChange={this.handleCategory}>
            <MenuItem value={'None'}>None</MenuItem>
            <MenuItem value={'Vegetable'}>Vegetable</MenuItem>
            <MenuItem value={'Meat'}>Meat</MenuItem>
            <MenuItem value={'Grain'}>Grain</MenuItem>
            <MenuItem value={'Fruit'}>Fruit</MenuItem>
            <MenuItem value={'Dairy'}>Dairy</MenuItem>
            <MenuItem value={'Snack'}>Snack</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Min $" onChange={this.handleMin} className="filter"/>
        <TextField label="Max $" onChange={this.handleMax} className="filter"/>

      </div>);
  }

}

const mapStateToProps = (state)=>{
  return {
      category: state.category,
      sort: state.sort,
      low: state.low,
      high: state.high
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      setSort: (sort)=>{dispatch(setSort(sort))},
      setCat: (cat)=>{dispatch(setCat(cat))},
      setLow: (low)=>{dispatch(setLow(low))},
      setHi: (hi)=>{dispatch(setHi(hi))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchFilters);
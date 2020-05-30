import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import store from '../index';
import {setSort, setCat, setLow, setHi} from './actions/cartActions';

class SearchFilters extends React.Component{

  constructor(props) {
    super(props);

    this.state={
      minError: '',
      maxError: '',
    }
  }

  handleSort = (e) => {
    this.props.setSort(e.target.value);
  }

  handleCategory = (e) => {
    this.props.setCat(e.target.value);
  }

  handleMin = (e) =>{
    if (!Number(e.target.value) && e.target.value) {
      this.setState({minError: "Numbers only"});
    }
    else {
      this.setState({minError: ""});
      this.props.setLow(e.target.value);
    }
  }

  handleMax = (e) =>{
    if (!Number(e.target.value) && e.target.value) {
      this.setState({maxError: "Numbers only"});
    }
    else {
      this.setState({maxError: ""});
      this.props.setHi(e.target.value);
    }
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
            <MenuItem value={'Seafood'}>Seafood</MenuItem>
            <MenuItem value={'Grain'}>Grain</MenuItem>
            <MenuItem value={'Fruit'}>Fruit</MenuItem>
            <MenuItem value={'Dairy'}>Dairy</MenuItem>
            <MenuItem value={'Snack'}>Snack</MenuItem>
          </Select>
        </FormControl>

        <TextField label="Min $" onChange={this.handleMin} className="filter"
        value={store.getState().low} helperText={this.state.minError}/>

        <TextField label="Max $" onChange={this.handleMax} className="filter"
        value={store.getState().high} helperText={this.state.maxError}/>

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
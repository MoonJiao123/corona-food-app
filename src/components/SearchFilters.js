import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class SearchFilters{

  render(){
    return(
      <div id="searchFilters">
        <FormControl className="filter">
          <InputLabel >Sort Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}>
            <MenuItem value={'Distance'}>Closest Distance</MenuItem>
            <MenuItem value={'Price'}>Lowest Price</MenuItem>
            <MenuItem value={'Expiration'}>Freshness</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filter">
          <InputLabel >Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}>
            <MenuItem value={'None'}>None</MenuItem>
            <MenuItem value={'Vegetable'}>Vegetable</MenuItem>
            <MenuItem value={'Meat'}>Meat</MenuItem>
            <MenuItem value={'Grain'}>Grain</MenuItem>
            <MenuItem value={'Fruit'}>Fruit</MenuItem>
            <MenuItem value={'Dairy'}>Dairy</MenuItem>
            <MenuItem value={'Snack'}>Snack</MenuItem>
          </Select>
        </FormControl>


      </div>);
  }

}

export default SearchFilters;
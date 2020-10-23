import React from 'react'
import covidLogo from '../../img/covidlogo.jpg';
import './header.css';
import {FormControl, Select,MenuItem } from '@material-ui/core';

const Header = ({countryChangeHandler,countries,country}) => {
  return (
    <header>
      <img className="header__img" src={covidLogo} alt=""/>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={country}
          onChange={countryChangeHandler}
        >
          <MenuItem value="global">Global</MenuItem>
          {countries.map((country)=>(
            <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </header>
  )
}

export default Header

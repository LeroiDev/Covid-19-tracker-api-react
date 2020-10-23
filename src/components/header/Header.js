import React, { useEffect, useState } from 'react'
import covidLogo from '../../img/covidlogo.jpg';
import './header.css';
import {FormControl, Select,MenuItem } from '@material-ui/core';
import axios from 'axios';

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('worldwide');
  const [countryInfo,setCountryInfo] = useState({});

  useEffect(()=>{
      const fetchData = async()=>{
          const res = await axios.get("https://disease.sh/v3/covid-19/countries");
          const countries = res.data.map((country)=>({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          setCountries(countries);
      }
        fetchData();
  },[])

const countryChangeHandler=async(e)=>{
setCountry(e.target.value);
const data = e.target.value === 'worldwide' ? await axios.get("https://disease.sh/v3/covid-19/countries/all") : await axios.get(`https://disease.sh/v3/covid-19/countries/${e.target.value}`);
setCountryInfo(data.data);
}

  return (
    <header>
      <img className="header__img" src={covidLogo} alt=""/>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={country}
          onChange={countryChangeHandler}
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country)=>(
            <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </header>
  )
}

export default Header

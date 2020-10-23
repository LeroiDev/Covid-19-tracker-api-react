import React,{useState,useEffect} from 'react';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Map from './components/map/Map';
import './app.css';
import LiveCases from './components/livecases/LiveCases';
// nope
import axios from 'axios';
// utility class
import {sortData} from './utility/util';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('global');
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

// header drop down list
  useEffect(()=>{
    const fetchData = async()=>{
        const res = await axios.get("https://disease.sh/v3/covid-19/countries");
        const countries = res.data.map((country)=>({
          name: country.country,
          value: country.countryInfo.iso2
        }));
        setCountries(countries);
        const sortedData = sortData(res.data)
        setTableData(sortedData);
    }
      fetchData();
},[])
// populate cards on app load only have an on change handler for global
useEffect(()=>{
const fetchData = async ()=>{ 
const data = await axios.get("https://disease.sh/v3/covid-19/all");
setCountryInfo(data.data)
}
fetchData();
},[])

  const countryChangeHandler=async(e)=>{
    setCountry(e.target.value);
    const data = e.target.value === 'global' ? await axios.get("https://disease.sh/v3/covid-19/all") : await axios.get(`https://disease.sh/v3/covid-19/countries/${e.target.value}`);
    setCountryInfo(data.data);
    }
  return (
    <div className="app">
    <div className="app__left">
    <Header country={country} countries={countries} countryChangeHandler={countryChangeHandler}/>
    <Cards countryInfo={countryInfo}/>
    <Map/>
    </div>
    <div className="app__right">
      <LiveCases tableData={tableData}/>
    </div>
    </div>
  );
}

export default App;

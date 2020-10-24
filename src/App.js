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
// leaflet headache css
import "leaflet/dist/leaflet.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country,setCountry] = useState('global');
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  // leaflet headache to get working
  const [mapCenter,setMapCenter] = useState({lat:34.80746, lng: -40.4796});
  const [mapZoom,setMapZoom] = useState(1);
  // state for MAP component all countries data not just the name and value
  const[mapCountries,setMapCountries] = useState([]);
  const [casesType,setCasesType] = useState('cases');

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
        setMapCountries(res.data);
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

// ONCHANGE DROP DOWN COUNTRY SELECTION - note map and cards depend on this
  const countryChangeHandler=async(e)=>{
    setCountry(e.target.value);
    const data = e.target.value === 'global' ? await axios.get("https://disease.sh/v3/covid-19/all") : await axios.get(`https://disease.sh/v3/covid-19/countries/${e.target.value}`);
    setCountryInfo(data.data);

    if(e.target.value !== 'global'){
      setMapCenter([data.data.countryInfo.lat , data.data.countryInfo.long])
      console.log(data.data.countryInfo); 
    }
    else{
        setMapCenter({lat:34.80746, lng: -40.4796})
    } 
    setMapZoom(3);
    }

// returned jsx end of functions 
  return (
    <div className="app">
    <div className="app__left">
    <Header country={country} countries={countries} countryChangeHandler={countryChangeHandler}/>
    <Cards casesType={casesType} setCasesType={setCasesType} countryInfo={countryInfo}/>
    <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
    </div>
    <div className="app__right">
      <LiveCases casesType={casesType} tableData={tableData}/>
    </div>
    </div>
  );
}

export default App;

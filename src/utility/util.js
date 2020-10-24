// import for leafletmap tooltip function
import React from "react";
import numeral from "numeral";
import {Circle,Popup} from "react-leaflet";
import '../components/map/map.css';

// used in useEffect for drop down list to be sorted most to least cases
export const sortData = (data) =>{
  const sortedData = [...data];
  sortedData.sort((a,b) =>{
    return a.cases > b.cases ? -1 : 1;
  });
  return sortedData;
}

// used in Map component
// note 3 objects -- cases - recovered - deaths
// drawing circles on map with a tooltip
export const showDataOnMap = (data,casesType='cases') => {
  let count = 1445545454;
  return data.map(country => (
        <Circle
          key={count--}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          fillOpacity={0.4}
          color={casesTypeColors[casesType].hex}
          fillColor={casesTypeColors[casesType].hex}
          radius={
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
          }
        >
          <Popup>
            <div className="popup__container">
              <div className="popup__flag" style={{backgroundImage:`url(${country.countryInfo.flag})`}}></div>
              <div className="popup__name">{country.country}</div>
              <div className="popup__cases">Cases: {numeral(country.cases).format("0,0")}</div>
              <div className="popup__recovered">Recovered: {numeral(country.recovered).format("0,0")}</div>
              <div className="popup__deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
            </div>
          </Popup>
        </Circle>
  ));
} 

// CASES FOR PICKING ON MAP with above function showDataOnMap
const casesTypeColors ={
  cases:{
    hex:"#cc1034",
    multiplier: 800,
  },
  recovered:{
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths:{
    hex: "fb4443",
    multiplier: 2000,
  },
};

// Function for formatting numbers to look better for end user
export const formatStat = (stat)=>{
return  stat ? `+${numeral(stat).format("0.0a")}` : "";
}

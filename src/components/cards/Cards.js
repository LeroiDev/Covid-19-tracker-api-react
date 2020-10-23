import React from 'react'
import './cards.css';
import InfoBox from './InfoBox';

const Cards = ({countryInfo}) => {

  return (
    <section>
      <InfoBox title={ countryInfo.country === 'undefined' ? `${countryInfo.country} Cases` : "Global Cases"} 
      cases={`${countryInfo.todayCases} Cases Today`}
        total={countryInfo.cases}
      />
      <InfoBox title={ countryInfo.country === 'undefined' ? `${countryInfo.country} Recovered` : "Global Recovered Cases"} 
      cases={`${countryInfo.todayRecovered} Recovered Today`}
        total={countryInfo.recovered}
      />
      <InfoBox title={countryInfo.country === 'undefined' ? `${countryInfo.country} Deaths` : "Global Deaths"} 
      cases={`${countryInfo.todayDeaths} deaths today`}
        total={countryInfo.deaths}
      />
    </section>
  )
}

export default Cards

import React from 'react'
import './cards.css';
import InfoBox from './InfoBox';
import {formatStat} from '../../utility/util';

const Cards = ({casesType,countryInfo,setCasesType}) => {

  return (
    <section>
      <InfoBox
      isRed
      active={casesType==="cases"}
      onClick ={e=>setCasesType('cases')}
      title={countryInfo.country && countryInfo.country !== 'undefined' ? `${countryInfo.country} Cases` : "Cases"} 
      cases={formatStat(countryInfo.todayCases) + " today"}
        total={formatStat(countryInfo.cases)}
      />
      <InfoBox 
      active={casesType==="recovered"}

      onClick ={e=>setCasesType('recovered')}
      title={countryInfo.country && countryInfo.country !== 'undefined' ? `${countryInfo.country} Recovered` : "Recovered Cases"} 
      cases={formatStat(countryInfo.todayRecovered) + " today"}
        total={formatStat(countryInfo.recovered)}
      />
      <InfoBox 
      isBlack
      active={casesType==="deaths"}
      onClick ={e=>setCasesType('deaths')}
      title={countryInfo.country && countryInfo.country !== 'undefined' ? `${countryInfo.country} Deaths` : "Deaths"} 
      cases={formatStat(countryInfo.todayDeaths) +" today"}
        total={formatStat(countryInfo.deaths)}
      />
    </section>
  )
}

export default Cards

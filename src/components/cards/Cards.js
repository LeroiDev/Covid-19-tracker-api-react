import React, { useEffect, useState } from 'react'
import './cards.css';
import InfoBox from './InfoBox';
import axios from 'axios';

const Cards = () => {
  const [hasCovid,setHasCovid] = useState(0);
  const [todayCovid,setTodayCovid]=useState(0);
  const [recovered,setRecovered] = useState(0);
  const [recoveredToday,setRecoveredToday] = useState(0);
  const [deaths,setDeaths]=useState(0);
  const [deathsToday,setDeathsToday]=useState(0);
// as component loads
useEffect(()=>{
  const fetchData = async() =>{
  const response = axios.get("https://disease.sh/v3/covid-19/all");
  setHasCovid((await response).data.cases)
  setTodayCovid((await response).data.todayCases)
  setRecovered((await response).data.recovered)
  setRecoveredToday((await response).data.todayRecovered)
  setDeaths((await response).data.deaths)
  setDeathsToday((await response).data.todayDeaths)
  }
  fetchData();
},[])

  return (
    <section>
      <InfoBox title="Global Coronavirus Cases" 
      cases={`${todayCovid} Cases Today`}
        total={hasCovid}
      />
      <InfoBox title="Global Recovered Cases" 
      cases={`${recoveredToday} Recovered Today`}
        total={recovered}
      />
      <InfoBox title="Global Coronavirus Deaths" 
      cases={`${deathsToday} deaths today`}
        total={deaths}
      />
    </section>
  )
}

export default Cards

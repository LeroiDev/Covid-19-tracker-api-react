import React, { useEffect, useState } from 'react';
import './linegraph.css';
import {Line} from 'react-chartjs-2';
import numeral from 'numeral';

// https://disease.sh/v3/covid-19/historical/all?lastdays=120
const LineGraph = ({casesType="cases"}) => {
  const [data,setData] = useState({});

  // this was a bit of a tough one, chart data
  // - lastDataPoint to get the difference

  const buildChartData = (data,casesType='cases') =>{
    const chartData =[];
    let lastDataPoint;
    for(let date in data.cases){
      if(lastDataPoint){
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        }
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  }

  useEffect(()=>{
    const fetchData = async()=>{
    await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
    .then(res=>res.json())
    .then(resData =>{
      const chartData = buildChartData(resData, casesType);
      setData(chartData);
    });
    }
    fetchData();
  },[casesType])

  return (
    // no initial data passed need a conditional here to make provision.
    <div>
      <h1>Graph needs data format</h1>
      {data?.length > 0 && <Line 
        options={options}
        data={{
          datasets: [
          {
            backgroundColor: "rgba(204,16,52,0.5)",
            borderColor:"#cc1034",
            data:data,
          },
          ]
        }}/>}
    </div>
  );
}

// OPTIONS FROM DOCUMENTATION REACT CHARTS JS 2
const options ={
  legend:{
    display:false,
  },
    elements:{
      point:{
        radius: 3,
      },
    },
    maintainAspectRatio: false,
    tooltips:{
      mode:'index',
      intersect: false,
      callbacks:{
        label:function (tooltipItem, data){
          return numeral(tooltipItem.value).format("+0,0");
        }
      },
    },
    scales:{
      xAxes:[
        {
          type: "time",
          time:{
            format:"MM/DD/YY",
            tooltipFormat: "ll"
          },
        },
      ],
      yAxes:[
        {
          gridLines:{
            display:false,
          },
          ticks:{
            // include $ sign in the ticks
            callback: function (value,index,values){
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
}
// note numeral package needed to be installed
// npm i numeral
export default LineGraph

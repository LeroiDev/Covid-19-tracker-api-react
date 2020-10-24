import React from 'react'
import {Card, CardContent} from '@material-ui/core';
import Table from './Table';
import './livecases.css';
import LineGraph from './LineGraph';

const LiveCases = ({casesType,tableData}) => {
  return (
    <div className="card">
    <Card >
      <CardContent className='card__one' >
      <h3>LIVE CASES BY COUNTRY</h3> 
        <Table countries={tableData}>
        </Table>
      </CardContent>
      <div className="card__two">
        <CardContent>
  <h3>GLOBAL {casesType}</h3>
        <LineGraph casesType={casesType} />
        </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default LiveCases

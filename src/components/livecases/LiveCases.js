import React from 'react'
import {Card, CardContent} from '@material-ui/core';
import Table from './Table';
import './livecases.css';
import LineGraph from './LineGraph';

const LiveCases = ({tableData}) => {
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
        <h3>WORLDWIDE new CASES</h3>
        <LineGraph />
        </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default LiveCases

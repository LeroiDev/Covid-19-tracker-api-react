import React from 'react'
import {Card, CardContent} from '@material-ui/core';
import Table from './Table';
import './livecases.css';

const LiveCases = ({tableData}) => {
  return (
    <div className="card">
    <Card >
      <CardContent >
      <h3>LIVE CASES BY COUNTRY</h3> 
        <Table className="table" countries={tableData}>
        </Table>
        <h3>WORLDWIDE new CASES</h3>
        {/* GRAPH */}
      </CardContent>
      </Card>
    </div>
  )
}

export default LiveCases

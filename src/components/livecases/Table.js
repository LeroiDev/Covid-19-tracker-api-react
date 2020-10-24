import React from 'react'
import './table.css'
import {formatStat} from '../../utility/util';
const Table = ({countries}) => {
  let count = 1;
  return (
    <div className="table">
    <table>
    <tbody>
        {countries.map(country=>(
            <tr key={count++}>
              <td key={country.country}>{country.country}</td>
              <td key={country.cases}><strong>{formatStat(country.cases)}</strong></td>
            </tr>
           ))}
  </tbody>
  </table>
  </div>
  )
}

export default Table

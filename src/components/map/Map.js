import React from 'react';
import './map.css';
// note this documentation is a disaster, oof
import {Map as LeafletMap, TileLayer } from 'react-leaflet';
// utility function for circle creation popup
import {showDataOnMap} from '../../utility/util';

const Map = ({countries,casesType,center,zoom}) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  )
}

export default Map

import React from 'react';
import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Map from './components/map/Map';
import './app.css';
import LiveCases from './components/livecases/LiveCases';

const App = () => {
  return (
    <div className="app">
    <div className="app__left">
    <Header/>
    <Cards/>
    <Map/>
    </div>
    <div className="app__right">
      <LiveCases/>
    </div>
    </div>
  );
}

export default App;

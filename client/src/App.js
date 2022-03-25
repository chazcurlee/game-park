import React from 'react';
import axios from 'axios'
import { Routes, Route, useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import GetToken from './components/GetToken';
import RewardsGet from './components/RewardsGet';
import Showcase from './components/Showcase';
import GamesNRides from './components/GamesNRides'
// import PullData from './components/DataPull';
import {useState, useEffect} from 'react'


const App = () => {


  


    

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="games-n-rides" element={<GamesNRides />} />
        <Route path="/get-token" element={<GetToken />} />
        <Route path="rewards-get" element={<RewardsGet />} />
        <Route path="showcase" element={<Showcase />} />
        {/* <Route path="datapull" element={<PullData />} /> */}
      </Routes>
    </div>
  );


  
  
}

export default App;

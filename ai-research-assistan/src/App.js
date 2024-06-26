import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch, redirect, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Components/header';
import Home from './Pages/home';
import { useState } from 'react';
import Auth from './auth';
import PrivateRoute from './rutaprivada';
import Profile from './Pages/profile';
import Signout from './Pages/signout';


function App() {

  return (

    <Router>
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/app" element= {< Home/> } />
      <Route path="profile" element= {<Profile/> } />
      <Route path="signout" element= {<Signout/> } />

      
    </Routes>
    
  </Router>

  );

}

export default App;

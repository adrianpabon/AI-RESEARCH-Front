import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch, redirect, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Components/header';
import Home from './Pages/home';
import Sidebar from './Components/sidebar';
import ToggleButton from './Components/togglebutton';
import { useState } from 'react';
import Auth from './auth';
import PrivateRoute from './rutaprivada';


function App() {

  return (

    <Router>
      <Header />
    <Routes>
      <Route path="login" element={<Auth />} />
      <Route path="/app" element= {< Home/> } />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    
  </Router>

  );

}

export default App;

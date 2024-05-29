import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/header';
import Home from './Pages/home';
import Sidebar from './Components/sidebar';
import ToggleButton from './Components/togglebutton';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header />
      <Sidebar isOpen={isSidebarOpen} />
      <ToggleButton toggleSidebar={toggleSidebar} />
      <div className={`transition-margin duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Home />
      </div>
    </div>
  );

}

export default App;

import React from 'react';
import Header from './components/Header';
import Offers from './components/Offers';
import Footer from './components/Footer';
import Landingpage from './components/Landingpage'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Dish1 from './pages/Dish1';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landingpage/>
      <Offers />
      <Footer />
    </div>
  );
};

export default App;
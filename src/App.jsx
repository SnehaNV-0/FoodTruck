import React from 'react';
import Header from './components/Header';
import Offers from './components/Offers';
import Footer from './components/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Dish1 from './pages/Dish1';
import Dish2 from './pages/Dish2';
import Dish3 from './pages/Dish3';
import Dish4 from './pages/Dish4';
import Dish5 from './pages/Dish5';
import Dish6 from './pages/Dish6';
import Dish7 from './pages/Dish7';
import Dish8 from './pages/Dish8';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Routes>
      <Route path={'/'} element={<Offers/>}/>
      <Route path={'/dish1'} element={<Dish1/>}/>
      <Route path={'/dish2'} element={<Dish2/>}/>
      <Route path={'/dish3'} element={<Dish3/>}/>
      <Route path={'/dish4'} element={<Dish4/>}/>
      <Route path={'/dish5'} element={<Dish5/>}/>
      <Route path={'/dish6'} element={<Dish6/>}/>
      <Route path={'/dish7'} element={<Dish7/>}/>
      <Route path={'/dish8'} element={<Dish8/>}/>

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Component/NavBar/Navbar';
import { HeroSection } from './Component/HeroSection/HeroSection';
// import Footer from './Component/Footer/Footer';


function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
         <Route exact path="/" element={<HeroSection />} />
         
        </Routes>
    </Router>
  );
}

export default App;


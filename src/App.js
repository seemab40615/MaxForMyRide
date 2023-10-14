import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Component/NavBar/Navbar';
import { HeroSection } from './Component/HeroSection/HeroSection';
// import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="max-w-[1920px] m-auto">
      <Router>
        <NavBar />
        <Routes>
         <Route exact path="/" element={<HeroSection />} />
         
        </Routes>
    </Router>

    </div>
  );
}

export default App;


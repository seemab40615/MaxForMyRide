import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Component/NavBar/Navbar';
import { Landing } from './Component/LandingPage/Landing';
// import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="max-w-[1920px] m-auto">
      <Router>
        <NavBar />
        <Routes>
         <Route exact path="/" element={<Landing />} />
         
        </Routes>
    </Router>

    </div>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavBar } from './Component/NavBar/Navbar';
// import Footer from './Component/Footer/Footer';


function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          {/* <Route exact path="/" element={<HomeSection />} />
          <Route path="*" element={<HomeSection />} /> */}
        </Routes>
    </Router>
  );
}

export default App;


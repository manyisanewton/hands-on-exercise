import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Day1 from "./Components/Day1";
import Day2 from "./Components/Day2";
import Day3 from "./Components/Day3";
import Day4 from "./Components/Day4";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Day1/>} />
        <Route path="/Day2" element={<Day2/>} />
        <Route path="/Day3" element={<Day3 />} />
        <Route path="/Day4" element={<Day4 />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

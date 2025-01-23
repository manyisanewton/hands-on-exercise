import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav>
      <Link to="/">Day1</Link> | <Link to="/Day2">Day2</Link> | <Link to="/Day3">Day3</Link>{" "}|
      <Link to="/Day4">Day4</Link>
    </nav>
  );
}

export default Navbar;

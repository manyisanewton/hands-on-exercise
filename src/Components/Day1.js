import React, { useState } from 'react';
import './Day1.css'; // Import the CSS file

const Day1 = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="click-counter">

    <h1 style={{ fontFamily: 'Bungee Spice, cursive', color: 'darkblue' }}> Day 1  image and text on it with a counter button</h1>
      <button className="click-button" onClick={handleClick}>
        Click Me
      </button>
      <p className="click-message">You clicked this button {counter} times</p>
    </div>
  );
};

export default Day1;

import React from 'react';
import './Header.css';

const Header = ({ title, tagline }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <p className="header-tagline">{tagline}</p>
    </header>
  );
};

export default Header;

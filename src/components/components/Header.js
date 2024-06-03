// src/components/components/Header.js
import React from 'react';

const Header = ({ text }) => {
  return (
    <div className="component header">
      <h1>{text || 'Header'}</h1>
    </div>
  );
};

export default Header;

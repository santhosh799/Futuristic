// src/components/components/Footer.js
import React from 'react';

const Footer = ({ text }) => {
  return (
    <div className="component footer">
      <footer>{text || 'Footer'}</footer>
    </div>
  );
};

export default Footer;

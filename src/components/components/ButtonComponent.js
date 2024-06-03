// src/components/components/ButtonComponent.js
import React from 'react';

const ButtonComponent = ({ label }) => {
  return (
    <div className="component button-component">
      <button>{label || 'Click Me'}</button>
    </div>
  );
};

export default ButtonComponent;

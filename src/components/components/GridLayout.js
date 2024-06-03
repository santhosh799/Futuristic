// src/components/components/GridLayout.js
import React from 'react';

const GridLayout = ({ children = [] }) => {
  if (!Array.isArray(children)) {
    children = [children];
  }

  return (
    <div className="component grid-layout">
      <div className="grid">
        {children.map((child, index) => (
          <div key={index} className="grid-item">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;

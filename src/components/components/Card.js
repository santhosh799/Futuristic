// src/components/components/Card.js
import React from 'react';

const Card = ({ title, image, content }) => {
  return (
    <div className="component card">
      {image && <img src={image} alt="Card image" />}
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </div>
  );
};

export default Card;

// src/components/components/ImageHolder.js
import React from 'react';

const ImageHolder = ({ src }) => {
  return (
    <div className="component image-holder">
      <img src={src || 'https://via.placeholder.com/150'} alt="placeholder" />
    </div>
  );
};

export default ImageHolder;

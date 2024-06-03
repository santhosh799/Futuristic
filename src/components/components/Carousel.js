// src/components/components/Carousel.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel';

const Carousel = ({ images }) => {
  return (
    <div className="component carousel">
      <ReactCarousel>
        {(images || ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']).map((src, index) => (
          <div key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;

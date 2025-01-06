import React, { useState } from 'react';
import './carousel.css';

interface CarouselItem {
  image: string;
  title: string;
  description?: string; // Optional property, you can remove this if you don't use it.
}

interface CarouselProps {
  data: CarouselItem[];
}

function Carousel({ data }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0); // TypeScript infers the type as number

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const currentItem = data[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-item">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="carousel-image"
        />
        <div className="carousel-caption">
          <h3>{currentItem.title}</h3>
          {currentItem.description && <p>{currentItem.description}</p>}
        </div>
      </div>

      <button className="carousel-button prev" onClick={goToPrevious}>
        &#10094; {/* Left Arrow */}
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
}

export default Carousel;
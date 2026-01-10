import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-top md:object-center"
            />
          </div>
        ))}
        
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentSlide ? 'bg-primary border border-white' : 'bg-transparent border border-white opacity-70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

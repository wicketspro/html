'use client';

import { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';

// Import images so bundler can resolve paths correctly
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import banner4 from '../assets/banner4.jpg';
import banner5 from '../assets/banner5.jpg';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of imported images
  const banners = [banner1, banner2, banner3, banner4, banner5];

  // autoplay every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="hero-banner">
      <img
        src={banners[currentSlide]}
        alt={`Banner ${currentSlide + 1}`}
        className="banner-image"
      />

      {/* arrows */}
      <button
        className="nav-btn prev"
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + banners.length) % banners.length
          )
        }
      >
        ‹
      </button>
      <button
        className="nav-btn next"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
      >
        ›
      </button>

      {/* dots */}
      <div className="indicators">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;

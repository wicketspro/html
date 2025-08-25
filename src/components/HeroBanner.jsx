'use client';

import { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    './src/assets/banner1.jpg',
    './src/assets/banner2.jpg',
    './src/assets/banner3.jpg',
    './src/assets/banner4.jpg',
    './src/assets/banner5.jpg',
  ];

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

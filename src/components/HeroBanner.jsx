'use client';

import { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const banners = [
    {
      title: 'প্রিমিয়াম ক্রিকেট বেটিং',
      subtitle:
        'বিশ্বমানের এজেন্ট সার্ভিস এবং সর্বোচ্চ নিরাপত্তার সাথে আপনার বেটিং যাত্রা শুরু করুন',
      image: '/cricket-betting-casino-banner.png',
      cta: 'এখনই যোগ দিন',
      stats: { users: '১০,০০০+', agents: '৫০০+', success: '৯৮%' },
    },
    {
      title: '২৪/৭ প্রিমিয়াম সাপোর্ট',
      subtitle:
        'আমাদের বিশেষজ্ঞ টিম সর্বদা আপনার সেবায় নিয়োজিত। যেকোনো সমস্যার তাৎক্ষণিক সমাধান পান',
      image: '/support-banner.jpg',
      cta: 'সাপোর্ট নিন',
      stats: { response: '৩০ সেকেন্ড', availability: '২৪/৭', rating: '৪.৯★' },
    },
    {
      title: 'এজেন্ট পার্টনার প্রোগ্রাম',
      subtitle:
        'উচ্চ কমিশন, বোনাস এবং দীর্ঘমেয়াদী আয়ের সুযোগ। আমাদের সাথে যুক্ত হয়ে আপনার ভবিষ্যৎ গড়ুন',
      image: '/partner-banner.jpg',
      cta: 'পার্টনার হন',
      stats: { commission: '৪০%', bonus: '৫০,০০০৳', partners: '১,০০০+' },
    },
  ];

  // autoplay logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [banners.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  // smooth scroll helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero-banner"
      style={{
        backgroundImage: `url(${banners[currentSlide].image})`,
      }}
    >
      <div className="hero-overlay"></div>

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🏏</span>
            <span>বাংলাদেশের #১ ক্রিকেট বেটিং প্ল্যাটফর্ম</span>
          </div>

          <h1 className="hero-title">{banners[currentSlide].title}</h1>
          <p className="hero-subtitle">{banners[currentSlide].subtitle}</p>

          <div className="hero-stats">
            {Object.entries(banners[currentSlide].stats).map(([key, value]) => (
              <div key={key} className="stat-item">
                <div className="stat-value">{value}</div>
                <div className="stat-label">
                  {key === 'users' && 'সক্রিয় ব্যবহারকারী'}
                  {key === 'agents' && 'বিশ্বস্ত এজেন্ট'}
                  {key === 'success' && 'সফলতার হার'}
                  {key === 'response' && 'গড় রেসপন্স টাইম'}
                  {key === 'availability' && 'সেবার সময়'}
                  {key === 'rating' && 'গ্রাহক রেটিং'}
                  {key === 'commission' && 'সর্বোচ্চ কমিশন'}
                  {key === 'bonus' && 'সাইনআপ বোনাস'}
                  {key === 'partners' && 'সক্রিয় পার্টনার'}
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons now clickable */}
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              <span>{banners[currentSlide].cta}</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollToSection('faq')}
            >
              <span>আরও জানুন</span>
            </button>
          </div>

          {/* TRUST INDICATORS (with icons) */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <span>১০০% নিরাপদ</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
                </svg>
              </div>
              <span>তাৎক্ষণিক পেমেন্ট</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <span>লাইভ বেটিং</span>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="visual-container">
            <img
              src={banners[currentSlide].image}
              alt={banners[currentSlide].title}
              className="hero-image"
              loading="lazy"
            />
            <div className="visual-overlay"></div>
          </div>
        </div>

        {/* NAVIGATION BUTTONS */}
        <button
          className="nav-btn nav-prev"
          onClick={prevSlide}
          aria-label="পূর্ববর্তী"
        >
          ‹
        </button>
        <button
          className="nav-btn nav-next"
          onClick={nextSlide}
          aria-label="পরবর্তী"
        >
          ›
        </button>

        {/* SLIDE INDICATORS */}
        <div className="slide-indicators">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`স্লাইড ${index + 1}`}
            >
              {index === currentSlide && isAutoPlaying && (
                <div className="indicator-progress" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

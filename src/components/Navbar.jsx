'use client';

import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const sections = ['home', 'agents', 'complaints', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Brand + Logo */}
        <div className="nav-brand">
          <img
            src="/logo192.png" // replace with your logo path
            alt="Logo"
            className="nav-logo"
          />
          <h2>Wickets Pro</h2>
        </div>

        {/* Menu */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button
            className={`nav-link ${activeSection === 'agents' ? 'active' : ''}`}
            onClick={() => scrollToSection('agents')}
          >
            আমাদের এজেন্টস
          </button>
          <button
            className={`nav-link ${
              activeSection === 'complaints' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('complaints')}
          >
            হেল্প ডেস্ক
          </button>
          <button
            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
            onClick={() => scrollToSection('faq')}
          >
            সাধারণ প্রশ্নোত্তর
          </button>

          {/* Social Icons */}
          <div className="social-icons">
            {/* Facebook Page */}
            <a href="#" className="social-icon facebook" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12...z" />
              </svg>
            </a>
            {/* Group */}
            <a href="#" className="social-icon group" aria-label="Group">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12.75c1.63 0 3.07.39...z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="social-icon youtube" aria-label="YouTube">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016...z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

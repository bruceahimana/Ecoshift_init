import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/components/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle scroll behavior for navbar hiding
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`navbar ${isHidden ? 'navbar-hidden' : ''}`}>
        <div className="nav-container">
          {/* Logo Section - Name and motto on left side */}
          <div className="logo-section">
            <Link to="/" className="nav-logo">
              <img 
                src="/images/logo.png" 
                alt="EcoShift Initiative" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback" style={{display: 'none'}}>
                <div className="logo-text">ES</div>
              </div>
            </Link>
            
            <div className="logo-text-content">
              <h2 className="logo-name">EcoShift Initiative</h2>
              <p className="nav-motto">Driving sustainable change for Greater Future</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu desktop-only">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          </div>

          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle desktop-only"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="menu-toggle mobile-only" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="mobile-menu-content">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMenu}>Home</Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={toggleMenu}>About</Link>
          <Link to="/projects" className={`mobile-nav-link ${isActive('/projects') ? 'active' : ''}`} onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={toggleMenu}>Contact</Link>
          
          {/* Mobile Theme Toggle */}
          <button 
            className="mobile-theme-toggle"
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
          >
            {darkMode ? (
              <>
                <i className="fas fa-sun"></i>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <i className="fas fa-moon"></i>
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
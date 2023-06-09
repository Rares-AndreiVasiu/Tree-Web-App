import React, { useState, useEffect } from 'react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './Contact';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-link-item">
            <a href="/home" >Home</a>
          </li>
          <li className="navbar-link-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-link-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        {isMobile && (
          <div className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span className="navbar-toggle-icon"></span>
            <span className="navbar-toggle-icon"></span>
            <span className="navbar-toggle-icon"></span>
          </div>
        )}
      </div>
    </nav>
  //   const renderPage = () => {
  //   if (currentPage === 'home') {
  //     return <HomePage />;
  //   } else if (currentPage === 'about') {
  //     return <AboutPage />;
  //   }
  //   else if (currentPage === 'contact') {
  //     return <ContactPage />;
  //   }
  // };

  );
};

export default Navbar;

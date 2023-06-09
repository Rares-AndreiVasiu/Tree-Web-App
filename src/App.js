import React, { useState } from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './Contact';
import Navbar from './Navbar';
import CardComponents from './CardComponents';
import {Grid} from "@nextui-org/react";
import { Card1 } from './Card1';
import { render } from '@testing-library/react';

const App = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage />;
    } else if (currentPage === 'about') {
      return <AboutPage />;
    }
    else if (currentPage === 'contact'){
        return <ContactPage />;
    }
  };

  return (
    <div>
        <Navbar />
        {renderPage()}
    </div>
  );
};

export default App;
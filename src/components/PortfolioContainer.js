import React, { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Delivery from './pages/Delivery';
import Testimonials from './pages/Testimonials';
import Who from './pages/Who';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Products') {
      return <Products />;
    }
    if (currentPage === 'Delivery') {
      return <Delivery />;
    }
    if (currentPage === 'Testimonials') {
      return <Testimonials />;
    }
    if (currentPage === 'Who') {
      return <Who />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
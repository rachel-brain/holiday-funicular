import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Delivery from './components/pages/Delivery';
import Testimonials from './components/pages/Testimonials';
import Who from './components/pages/Who';
import Contact from './components/pages/Contact';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faToiletPaperBlank, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
// library.add(faToiletPaperBlank, faTimes, faBars)

function App() {
  return (
    <>
      <Router>
      <Navbar />  
      <Switch>
        <Route path='/' exact component={() => <Home />} />
        <Route path='/About' exact component={() => <About />} />
        <Route path='/Products' exact component={() => <Products />} />
        <Route path='/Delivery' exact component={() => <Delivery />} />
        <Route path='/Testimonials' exact component={() => <Testimonials />} />
        <Route path='/Who' exact component={() => <Who />} />
        <Route path='/Contact' exact component={() => <Contact />} />
      </Switch>
      <Footer />  
      </Router>   
    </>
  );
}

export default App;
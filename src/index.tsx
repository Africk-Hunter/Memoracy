import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Footer />
  </React.StrictMode>
);


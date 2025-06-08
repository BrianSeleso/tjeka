/*Thube Creations +266 59000909*/

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return React.createElement('div', { className: 'App' },
    React.createElement(Header, null),
    React.createElement('main', null,
      React.createElement(Hero, null),
      React.createElement(Services, null),
      React.createElement(About, null),
      React.createElement(Gallery, null),
      React.createElement(Contact, null)
    ),
    React.createElement(Footer, null)
  );
}

export default App;
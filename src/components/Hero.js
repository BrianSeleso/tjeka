/*Thube Creations +266 59000909*/

import React from 'react';
import backgroundImage from './images/back-home.jpg';

function Hero() {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return React.createElement('section', { 
    id: 'home', 
    className: 'hero',
    style: heroStyle
    },
    React.createElement('div', { className: 'hero-overlay' }),
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'hero-content' },
        React.createElement('h1', null, 'Precision in Every Pane'),
        React.createElement('p', null, 'Quality aluminium and glass solutions in Teyateyaneng, Lesotho'),
        React.createElement('a', { href: '#contact', className: 'btn' }, 'Contact Us')
      )
    )
  );
}

export default Hero;
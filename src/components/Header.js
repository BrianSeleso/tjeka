/*Thube Creations +266 59000909*/

import React, { useState, useEffect } from 'react';
import logo from './images/logo1.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return React.createElement('header', { className: `header ${isScrolled ? 'scrolled' : ''}` },
    React.createElement('div', { className: 'container' },
      React.createElement('a', { href: '#home', className: 'logo' },
        React.createElement('img', { src: logo, alt: 'Tjeka Tjeka Aluminium Works Logo' }),
        'Tjeka Tjeka Aluminium Works'
      ),
      React.createElement('nav', { className: 'nav' },
        React.createElement('ul', { className: `nav-list ${isMenuOpen ? 'active' : ''}` },
          React.createElement('li', null, React.createElement('a', { href: '#home', className: 'nav-link' }, 'Home')),
          React.createElement('li', null, React.createElement('a', { href: '#services', className: 'nav-link' }, 'Services')),
          React.createElement('li', null, React.createElement('a', { href: '#about', className: 'nav-link' }, 'About')),
          React.createElement('li', null, React.createElement('a', { href: '#gallery', className: 'nav-link' }, 'Gallery')),
          React.createElement('li', null, React.createElement('a', { href: '#contact', className: 'nav-link' }, 'Contact'))
        ),
        React.createElement('div', { 
          className: `hamburger ${isMenuOpen ? 'active' : ''}`,
          onClick: toggleMenu
        },
          React.createElement('span', { className: 'bar' }),
          React.createElement('span', { className: 'bar' }),
          React.createElement('span', { className: 'bar' })
        )
      )
    )
  );
}

export default Header;
/*Thube Creations +266 59000909*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'footer-grid' },
        React.createElement('div', { className: 'footer-about' },
          React.createElement('h3', null, 'Tjeka Tjeka Aluminium Works'),
          React.createElement('p', null, 'Quality aluminium and glass solutions in Lesotho since 2010.')
        ),
        React.createElement('div', { className: 'footer-links' },
          React.createElement('h3', null, 'Quick Links'),
          React.createElement('ul', null,
            React.createElement('li', null, React.createElement('a', { href: '#home' }, 'Home')),
            React.createElement('li', null, React.createElement('a', { href: '#services' }, 'Services')),
            React.createElement('li', null, React.createElement('a', { href: '#about' }, 'About')),
            React.createElement('li', null, React.createElement('a', { href: '#contact' }, 'Contact'))
          )
        ),
        React.createElement('div', { className: 'footer-social' },
          React.createElement('h3', null, 'Follow Us'),
          React.createElement('div', { className: 'social-icons' },
            React.createElement('a', { 
              href: 'https://www.facebook.com/profile.php?id=100064875753284', 
              target: '_blank',
              rel: 'noopener noreferrer'
            }, 
              React.createElement(FontAwesomeIcon, { icon: faFacebookF })
            ),
            React.createElement('a', { 
              href: '#', 
              target: '_blank',
              rel: 'noopener noreferrer'
            }, 
              React.createElement(FontAwesomeIcon, { icon: faInstagram })
            ),
            React.createElement('a', { 
              href: '#', 
              target: '_blank',
              rel: 'noopener noreferrer'
            }, 
              React.createElement(FontAwesomeIcon, { icon: faWhatsapp })
            )
          )
        )
      ),
      React.createElement('div', { className: 'footer-bottom' },
        React.createElement('p', null, `© ${currentYear} Tjeka Tjeka Aluminium Works. All Rights Reserved.`),
        React.createElement('p', null, 'Created By Thube Creations +266 5900 0909')
      )
    )
  );
}

export default Footer;
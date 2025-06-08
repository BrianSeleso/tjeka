/*Thube Creations +266 59000909*/

import React from 'react';
import backgroundImage from './images/back-home.jpg';

function Hero() {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    marginTop: '80px',
    position: 'relative'
  };

  return React.createElement('section', { 
    id: 'home', 
    className: 'hero',
    style: heroStyle
    },
    React.createElement('div', { 
      className: 'hero-overlay',
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    }),
    React.createElement('div', { 
      className: 'container',
      style: {
        width: '100%',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }
    },
      React.createElement('div', { 
        className: 'hero-content',
        style: {
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px'
        }
      },
        React.createElement('h1', { 
          style: {
            fontSize: '3.5rem',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            lineHeight: '1.2'
          }
        }, 'Precision in Every Pane'),
        React.createElement('p', { 
          style: {
            fontSize: '1.5rem',
            marginBottom: '30px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }
        }, 'Quality aluminium and glass solutions in Teyateyaneng, Lesotho'),
        React.createElement('a', { 
          href: '#contact', 
          className: 'btn',
          style: {
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }
        }, 'Contact Us')
      )
    )
  );
}

export default Hero;
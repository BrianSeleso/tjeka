/*Thube Creations +266 59000909*/

import React from 'react';
import workshopImage from './images/workshop.png';

function About() {
  return React.createElement('section', { id: 'about', className: 'about section-padding' },
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'about-grid' },
        React.createElement('div', { className: 'about-content' },
          React.createElement('h2', { className: 'section-title' }, 'About Us'),
          React.createElement('p', null, 
            'Located in Teyateyaneng, Lesotho, Tjeka Tjeka Aluminium Works is committed to delivering reliable aluminium and glass solutions with a focus on quality craftsmanship.'
          ),
          React.createElement('p', null,
            'With years of experience in the industry, we take pride in our attention to detail and commitment to customer satisfaction. Our team of skilled professionals ensures every project meets the highest standards.'
          )
        ),
        React.createElement('div', { className: 'about-image' },
          React.createElement('img', { 
            src: workshopImage, 
            alt: 'Aluminium workshop',
            className: 'workshop-img'
          })
        )
      )
    )
  );
}

export default About;
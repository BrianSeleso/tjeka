/*Thube Creations +266 59000909*/

import React from 'react';
import windowIcon from './images/window.png';
import doorIcon from './images/door.png';
import glassIcon from './images/glass.png';

function Services() {
  const services = [
    {
      icon: windowIcon,
      title: 'Window Installation',
      description: 'Professional installation of high-quality aluminium windows for residential and commercial properties.'
    },
    {
      icon: doorIcon,
      title: 'Garage Door Services',
      description: 'Custom aluminium garage doors designed for durability, security, and aesthetic appeal.'
    },
    {
      icon: glassIcon,
      title: 'Glass Services',
      description: 'Expert glass solutions including cutting, installation, and repair for all your needs.'
    }
  ];

  return React.createElement('section', { id: 'services', className: 'services section-padding' },
    React.createElement('div', { className: 'container' },
      React.createElement('h2', { className: 'section-title' }, 'Our Services'),
      React.createElement('div', { className: 'services-grid' },
        services.map((service, index) => 
          React.createElement('div', { key: index, className: 'service-card' },
            React.createElement('div', { className: 'service-icon' },
              React.createElement('img', { 
                src: service.icon, 
                alt: service.title,
                className: 'service-img'
              })
            ),
            React.createElement('h3', null, service.title),
            React.createElement('p', null, service.description)
          )
        )
      )
    )
  );
}

export default Services;
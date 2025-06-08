/*Thube Creations +266 59000909*/

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!emailRegex.test(formData.email.trim())) newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return React.createElement('section', { id: 'contact', className: 'contact section-padding' },
    React.createElement('div', { className: 'container' },
      React.createElement('h2', { className: 'section-title' }, 'Contact Us'),
      React.createElement('div', { className: 'contact-grid' },
        React.createElement('div', { className: 'contact-info' },
          React.createElement('h3', null, 'Get in Touch'),
          React.createElement('div', { className: 'info-item' },
            React.createElement('i', { className: 'fas fa-map-marker-alt' }),
            React.createElement('p', null, 'Old Mansoor Building, Police Road, Opposite Tyre Boss, Teyateyaneng, Lesotho, 200')
          ),
          React.createElement('div', { className: 'info-item' },
            React.createElement('i', { className: 'fas fa-phone' }),
            React.createElement('p', null, '+266 2250 0347')
          ),
          React.createElement('div', { className: 'info-item' },
            React.createElement('i', { className: 'fas fa-envelope' }),
            React.createElement('p', null, 'sales@tjekatjeka.co.za')
          ),
          React.createElement('div', { className: 'map-container' },
            React.createElement('iframe', { 
              src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.123456789012!2d27.7487654!3d-29.1534567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA5JzEyLjQiUyAyN8KwNDQnNTUuNiJF!5e0!3m2!1sen!2sls!4v1621234567890!5m2!1sen!2sls',
              width: '100%',
              height: '300',
              style: { border: 0 },
              allowFullScreen: '',
              loading: 'lazy'
            })
          )
        ),
        React.createElement('div', { className: 'contact-form' },
          React.createElement('form', { id: 'contactForm', onSubmit: handleSubmit },
            React.createElement('div', { className: 'form-group' },
              React.createElement('input', {
                type: 'text',
                id: 'name',
                name: 'name',
                placeholder: 'Your Name',
                value: formData.name,
                onChange: handleChange,
                style: { borderColor: errors.name ? 'red' : '' },
                required: true
              }),
              errors.name && React.createElement('p', { className: 'error' }, errors.name)
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('input', {
                type: 'email',
                id: 'email',
                name: 'email',
                placeholder: 'Your Email',
                value: formData.email,
                onChange: handleChange,
                style: { borderColor: errors.email ? 'red' : '' },
                required: true
              }),
              errors.email && React.createElement('p', { className: 'error' }, errors.email)
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('textarea', {
                id: 'message',
                name: 'message',
                rows: '5',
                placeholder: 'Your Message',
                value: formData.message,
                onChange: handleChange,
                style: { borderColor: errors.message ? 'red' : '' },
                required: true
              }),
              errors.message && React.createElement('p', { className: 'error' }, errors.message)
            ),
            React.createElement('button', { type: 'submit', className: 'btn' }, 'Send Message')
          )
        )
      )
    )
  );
}

export default Contact;
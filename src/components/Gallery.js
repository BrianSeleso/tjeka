/*Thube Creations +266 59000909*/

import React, { useState } from 'react';

// Import first 8 images (you can import more as needed)
import img1 from './images/gallery/1.jpg';
import img2 from './images/gallery/2.jpg';
import img3 from './images/gallery/3.jpg';
import img4 from './images/gallery/4.jpg';
import img5 from './images/gallery/5.jpg';
import img6 from './images/gallery/6.jpg';
import img7 from './images/gallery/7.jpg';
import img8 from './images/gallery/8.jpg';

function Gallery() {
  const [showAllImages, setShowAllImages] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  // Gallery images (first 8 shown by default)
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  
  // Sample video data (replace with your actual videos)
  const videos = [
    {
      id: 'video1',
      title: 'Joint Venture with Matebele Group of Companies',
      thumbnail: './images/gallery/video-thumb3.jpg',
      url: 'https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2F100064875753284%2Fvideos%2F293862893576151%2F&show_text=false&width=560&t=0',
      isFacebook: true
    },
    {
      id: 'video2',
    title: 'Inside Lesothos best Aluminium and glass Company',
    thumbnail: './images/gallery/video-thumb2.jpg',
    url: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F100064875753284%2Fvideos%2F847780723117348%2F&show_text=false&width=476&t=0',
    isFacebook: true,
    width: 476,
    height: 476
    },
    {
      id: 'video3',
      title: 'Two automated garage doors succesfully installed',
      thumbnail: './images/gallery/video-thumb2.jpg',
      url: 'https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2F100064875753284%2Fvideos%2F677218860507500%2F&show_text=false&width=560&t=0',
      isFacebook: true
    }
    
];
  return React.createElement('section', { id: 'gallery', className: 'gallery section-padding' },
    React.createElement('div', { className: 'container' },
      // Photo Gallery Section
      React.createElement('h2', { className: 'section-title' }, 'Our Work Gallery'),
      React.createElement('div', { className: 'gallery-grid' },
        galleryImages.slice(0, showAllImages ? galleryImages.length : 8).map((image, index) =>
          React.createElement('div', { key: `img-${index}`, className: 'gallery-item' },
            React.createElement('img', { 
              src: image, 
              alt: `Our work sample ${index + 1}`,
              className: 'gallery-img'
            })
          )
        )
      ),
      
      // See More Button
      !showAllImages && galleryImages.length > 8 && 
        React.createElement('div', { className: 'see-more-container' },
          React.createElement('button', { 
            className: 'btn see-more-btn',
            onClick: () => setShowAllImages(true)
          }, 'See More Photos')
        ),
      
      // Videos Section Toggle
      React.createElement('div', { className: 'video-toggle' },
        React.createElement('button', {
          className: `btn video-toggle-btn ${showVideos ? 'active' : ''}`,
          onClick: () => setShowVideos(!showVideos)
        }, showVideos ? 'Hide Videos' : 'View Our Videos')
      ),
      
      // Videos Section
      showVideos && React.createElement('div', { className: 'videos-section' },
        React.createElement('h3', { className: 'video-section-title' }, 'Our Videos'),
        React.createElement('div', { className: 'videos-grid' },
          videos.map(video =>
            React.createElement('div', { key: video.id, className: 'video-item' },
              React.createElement('h4', { className: 'video-title' }, video.title),
              React.createElement('div', { className: 'video-container' },
                React.createElement('iframe', {
                  src: video.url,
                  title: video.title,
                  frameBorder: '0',
                  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                  allowFullScreen: true
                })
              )
            )
          )
        )
      )
    )
  );
}

export default Gallery;
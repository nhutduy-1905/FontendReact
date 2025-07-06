import React from 'react';
import './ZipBanner.css';


const ZipBanner = () => {
  return (
    <div className="zip-banner">
     <img src="./zip-logo.png" alt="Zip" className="zip-logo" />
      <div className="zip-text">
        <span className='blue-bar' />
        <strong>own</strong> it now, up to 6 months interest free{' '}
        <a href="#" className="learn-more">learn more</a>
      </div>
    </div>
  );
};

export default ZipBanner;

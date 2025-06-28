import React from 'react';
import './TopBar.css';
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className ="day-lable">Mon–Thu:</span>
        <span className="time-lable">9:00 AM – 5:30 PM <FaChevronDown className='arrow-icon'/> </span>
      </div>
      
      <div className="topbar-center">
        <span>
          Visit our showroom in 1234 Street Address City Address, 1234
        </span>
        <a href="/contact" className="contact-link">Contact Us </a>
      </div>
      <div className="topbar-right">
       
        <span>Call Us: (00) 1234 5678</span>
        <FaFacebookF className="icon" />
        <FaInstagram className="icon" />
      </div>
    </div>
  );
}

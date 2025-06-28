import React from 'react';
import './Header.css';
import {FaSearch, FaShoppingCart} from 'react-icons/fa';

export default function Header(){
    return (
        <header className ='navbar'>
            <div className='logo'>
                <img src= "/Logo.png" alt= "logo" />
            </div>
            <nav className='nav-links'>
               <a href="#">Laptops</a>
               <a href="#">Desktop PCs</a>
               <a href="#">Networking Devices</a>
               <a href="#">Printers & Scanners</a>
               <a href="#">PC Parts</a>
               <a href="#">All other Products</a>
               <a href="#">Repairs</a>
               <button className='deal-btn'>Our Deals</button>
            </nav>
           <div className='nav-icons'>
            <FaSearch />
            <FaShoppingCart />
            <img src='/images.jpg' alt='Avatar' className='avatar' />
           </div>
            
        </header>
    )
}
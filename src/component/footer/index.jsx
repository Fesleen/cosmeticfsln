import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='py-4 pt-10 pb-10' style={{ backgroundColor: 'black' }}>
      <div className="container mx-auto px-4">
        <hr className='border-white pb-5' />
        <div className='flex items-center justify-between flex-wrap'>
          <div className='block mb-5'>
            <h2 className="text-white font-playfair text-xl mb-4">Company</h2>
            <Link to="/" className="text-white font-playfair text-xl block mb-2">Information</Link>
            <Link to="/contact" className="text-white font-playfair text-xl block mb-2">Contact</Link>
            <Link to="/about" className="text-white font-playfair text-xl block mb-2">About</Link>
          </div>
          <div className='block mb-5'>
            <h2 className="text-white font-playfair text-xl mb-4">Location</h2>
            <a href="https://www.google.com/maps?q=South+Los+Angeles" target="_blank" rel="noopener noreferrer" className="text-white font-playfair text-xl block mb-2">
              South Los Angeles
            </a>
            <Link to="tel:+998903660527" className="text-white font-playfair text-xl block mb-2">+1234567890</Link>

            <p className="text-white font-playfair text-xl mb-2">We're always ready to speak with you!</p>
          </div>
          <div className='block mb-5'>
            <h2 className="text-white font-playfair text-xl mb-4">Get in touch</h2>
            <Link to="mailto:mosajonovae@gmail.com" className="text-white font-playfair text-xl block mb-2">infobao-contact@gmail.com</Link>
            <a href="https://www.instagram.com/musajanova_e" target="_blank" rel="noopener noreferrer" className="text-white font-playfair text-xl block mb-2">Instagram</a>
            <a href="https://www.facebook.com/musajanova_e" target="_blank" rel="noopener noreferrer" className="text-white font-playfair text-xl block mb-2">Facebook</a>
            <a href="https://www.instagram.com/musajanova_e" target="_blank" rel="noopener noreferrer" className="text-white font-playfair text-xl block mb-2">Twitter</a>
          </div>
        </div>
        <hr className='border-white' />
        <div className='flex items-center justify-between pt-10'>
          <div className="w-2/3 md:w-1/4">
            <Link to="/" className='text-white'>
              <h1 className='text-white font-playfair text-2xl'>INFO BAO</h1>
            </Link>
          </div>
          <p className='text-white'>2024@infobao. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

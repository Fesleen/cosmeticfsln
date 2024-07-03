import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <hr className='bg-black border-black mt-24' style={{ height: '2px' }} />
      <h1 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-playfair font-medium mt-20 mb-28">Contact</h1>
      <div className='flex flex-wrap justify-around items-center text-center'>
        <div className='block mb-6 lg:mb-0'>
          <div className='flex items-center mb-4'>
            <h3 className="text-black text-xl sm:text-xl md:text-2xl font-playfair mr-2">Phone number:</h3>
            <a href="tel:+1234567890" className="text-black font-playfair text-xl">+1234567890</a>
          </div>
          <div className='flex items-center mb-4'>
            <h3 className="text-black text-xl sm:text-xl md:text-2xl font-playfair mr-2">Email:</h3>
            <a href="mailto:mosajonovae@gmail.com" className="text-black font-playfair text-xl">infobao-contact@gmail.com</a>
          </div>
        </div>
        <div className='block mb-6 lg:mb-0'>
          <div className='flex items-center mb-4'>
            <h3 className="text-black text-xl sm:text-xl md:text-2xl font-playfair mr-2">Location:</h3>
            <a href="https://www.google.com/maps?q=South+Los+Angeles" target="_blank" rel="noopener noreferrer" className="text-black font-playfair text-xl">South Los Angeles</a>
          </div>
          <div className='flex items-center mb-4 md-custom:hidden'>
            <h3 className="text-black text-xl sm:text-xl md:text-2xl font-playfair mr-2">Language:</h3>
            <span className="text-black font-playfair text-xl">Russian, English, Ukrainian, Spanish.</span>
          </div>
        </div>
      </div>
     <h1 className="text-black text-center text-xl sm:text-xl md:text-2xl font-playfair font-medium mt-40 mb-20">We hope you like this site and you want will back on this site!</h1>
     <hr className='bg-black border-black mb-36' style={{ height: '2px' }} />
    </div>
  );
}

export default Contact;

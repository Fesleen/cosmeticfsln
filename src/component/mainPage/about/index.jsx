import React from 'react';
import { Link } from 'react-router-dom';
import About from "../../../images/about/about-home.svg";

const MainAbout = () => {
  return (
    <div className="container mx-auto mt-20 py-4 px-4">
      <h1 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold mb-20">About Us</h1>
      <div className='flex flex-wrap justify-between items-center'>
        <div className='w-full lg:w-1/2'>
          <h1 className="text-black text-2xl sm:text-xl md:text-4xl font-playfair mb-10">Start new info</h1>
          <p className="text-black text-xl sm:text-xl md:text-xl font-playfair mb-8">
            When you want to buy new cosmetics, you need to know about the cosmetics. This site helps you find the cosmetics you want. We can help you get acquainted with cosmetics. You can find information about skin problems for teenagers, adults, and elderly women.
            We tell you about face skin cosmetics, hair cosmetics, and makeup cosmetics. We have three sections: Korean cosmetics, American cosmetics, and European cosmetics.
          </p>
          <p className="text-black text-xl sm:text-xl md:text-xl font-playfair">
            We talk about brands such as CHI (American hair cosmetics), Some by Mi (Korean face cosmetics), La Roche-Posay (French face cosmetics), and other brands. We take into account different price ranges because not everyone can buy expensive cosmetics, but all women want to look beautiful. That's why we started this project! All women can buy cosmetics!
          </p>
        </div>
        <div className='w-full lg:w-1/3 mt-8 lg:mt-0'>
          <img className='w-full h-auto' src={About} alt="About Us" />
        </div>
      </div>
      <div className='text-center mt-8'>
        <button className="text-black border-2 border-black w-32 text-lg sm:text-xl md:text-2xl font-playfair p-1">
          <Link to="/about">More</Link>
        </button>
      </div>
      <hr className='text-black mt-36' />
    </div>
  );
};

export default MainAbout;

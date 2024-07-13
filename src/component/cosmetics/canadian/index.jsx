import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CanadianGet } from '../../../redux/cosmetics/canadian';
import { useNavigate } from 'react-router-dom';

const CanadianCosmetics = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(CanadianGet());
  }, [dispatch]);

  const canadian = useSelector((state) => state.canadian.canadianGet);
  const canadianData = canadian?.data?.filter((_, index) => index !== 1 && index !== 3).slice(0, expanded ? 8 : 3);

  const handleNavigate = (elemId) => {
    console.log(elemId);
    navigate(`/product-page/${elemId}`); // Navigate to '/product/:id' route
  };

  const handleExpand = () => {
    setExpanded(true);
    
  };

  return (
    <div className="container py-10 px-10">
      <h1 className="text-black text-center font-playfair text-2xl mb-20">Information about Cosmetics</h1>
      <hr className='bg-black-500 h-2 pb-5' />
      <p className="text-black text-center font-playfair text-2xl mb-4 mt-10">Canadian Cosmetics</p>
      <div className="flex flex-wrap justify-around mb-10">
        {canadianData?.map((elem) => (
          <div key={elem.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 text-center mb-10">
            <div onClick={() => handleNavigate(elem.id)} className="transition-shadow duration-300 ease-in-out hover:shadow-lg p-4 cursor-pointer">
              <img className="w-full h-64" src={elem.api_featured_image} alt="Powder" />
              <h1 className="text-center text-lg sm:text-2xl md:text-3xl font-playfair font-semibold">{elem.name}</h1>
            </div>
          </div>
        ))}
      </div>
      {!expanded && (
        <div className='text-center mt-8'>
          <button onClick={handleExpand} className="text-black border-2 border-black w-32 text-lg sm:text-xl md:text-2xl font-playfair p-1 mb-24">
            More
          </button>
        </div>
      )}
      <hr className='bg-black-500 h-2 pb-5' />
    </div>
  );
};

export default CanadianCosmetics;

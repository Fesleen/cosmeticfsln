import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CanadianGetById } from '../../../redux/cosmetics/canadian';
import { useParams } from 'react-router-dom';

const ProductAbout = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(CanadianGetById(id));
  }, [dispatch, id]);

  const canadianById = useSelector((state) => state.canadian.canadianGetById);

  if (!canadianById.data) {
    return <p className="container mx-auto mt-20 text-center">Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-full lg:w-1/3 mb-4">
          <img className="w-full h-auto lg:h-full object-cover" src={canadianById.data.api_featured_image} alt="Product" />
        </div>
        <div className="w-full sm:w-full lg:w-2/3 mb-4 sm:text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{canadianById.data.name}</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:text-center">Brand: {canadianById.data.brand}</p>
          <p className="text-sm sm:text-base leading-relaxed sm:text-center">{canadianById.data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;

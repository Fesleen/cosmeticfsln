import React from 'react';
import { useParams } from 'react-router-dom';

const ProductAbout = () => {
  const { id } = useParams();

  // Use `id` to fetch and display product details

  return (
    <div>
      <h2>Product ID: {id}</h2>
      {/* Display product details based on `id` */}
    </div>
  );
};

export default ProductAbout;

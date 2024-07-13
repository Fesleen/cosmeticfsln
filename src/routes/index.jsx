import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPages from '../pages/main';
import AboutPages from '../pages/about/about';
import ContactPages from '../pages/contact';
import BlogPages from '../pages/blog';
import CosmeticsPages from '../pages/cosmetics';
import ProductPage from '../pages/product'; // Adjust the import path if necessary

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPages />} />
      <Route path="/about" element={<AboutPages />} />
      <Route path="/blog" element={<BlogPages />} />
      <Route path="/contact" element={<ContactPages />} />
      <Route path="/cosmetic" element={<CosmeticsPages />} />
      <Route path="/product-page/:id" element={<ProductPage />} /> {/* Updated route with dynamic `id` parameter */}
    </Routes>
  );
}

export default RouterComponent;

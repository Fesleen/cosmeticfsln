import React from 'react'
import Product from '../../component/product-page/product'
import Footer from '../../component/footer'
import Navbar from '../../component/navbar/navbar'
import ProductAbout from '../../component/product-page/about'

const ProductPages = () => {
  return (
    <>
    <Navbar/>
    <ProductAbout/>
    <Product/>
    <Footer/>
    </>
  )
}

export default ProductPages
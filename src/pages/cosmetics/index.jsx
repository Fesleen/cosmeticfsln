import React from 'react'
import Navbar from '../../component/navbar/navbar'
import Footer from '../../component/footer'
import CanadianCosmetics from '../../component/cosmetics/canadian'
import VeganCosmetics from '../../component/cosmetics/vegan'

const CosmeticsPages = () => {
  return (
    <>
    <Navbar/>
    <CanadianCosmetics/>
    <VeganCosmetics/>
    <Footer/>
    </>
  )
}

export default CosmeticsPages
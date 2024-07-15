import React from 'react'
import Footer from '../../component/footer'
import MainAbout from '../../component/mainPage/about'
import MainNavbar from '../../component/navbar/mainNavbar'
import CanadianCosmetics from '../../component/cosmetics/canadian'
import BlogEyes from '../../component/blog/eye'

const MainPages = () => {
  return (
    <>
      <MainNavbar />
      <MainAbout />
      <CanadianCosmetics />
      <BlogEyes />
      <Footer />
    </>
  )
}

export default MainPages
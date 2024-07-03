import React from 'react'
import Footer from '../../component/footer'
import MainAbout from '../../component/mainPage/about'
import MainCosmetics from '../../component/mainPage/cosmetics'
import MainBlog from '../../component/mainPage/blog'
import MainNavbar from '../../component/navbar/mainNavbar'

const MainPages = () => {
  return (
    <>
    <MainNavbar/>
    <MainAbout/>
    <MainCosmetics/>
    <MainBlog/>
    <Footer/>
    </>
  )
}

export default MainPages
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPages from "../pages/main";
import AboutPages from "../pages/about/about";
import ContactPages from "../pages/contact";
import BlogPages from "../pages/blog";
import CosmeticsPages from "../pages/cosmetics";
import ProductPages from "../pages/product";

function RouterComponent() {
   return(
      <Routes>
         <Route path={"/"} element={<MainPages/>} />
         <Route path={"/about"} element={<AboutPages/>} />
         <Route path={"/blog"} element={<BlogPages/>} />
         <Route path={"/contact"} element={<ContactPages/>} />
         <Route path={"/cosmetic"} element={<CosmeticsPages/>} />
         <Route path={"/product"} element={<ProductPages/>} />
      </Routes>
   )
}

export default RouterComponent
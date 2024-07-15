import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { EyesGet } from "../../../redux/blogs/eyes";
import LiquidImages from "../../../images/blog/liquid .png";
import PencilImages from "../../../images/blog/pencil.png";
import { Link, useNavigate } from "react-router-dom";




const BlogEyes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(EyesGet());
  }, [dispatch]);

  const eyes = useSelector((state) => state.eyes.eyesGet);
  const eyesData = eyes?.data?.slice(0, 1);

  const handleNavigate = (elemId) => {
    console.log(elemId);
    navigate("/cosmetic");
  };
  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-black text-center text-xl sm:text-2xl md:text-3xl font-playfair font-medium ">Eyes</h1>
      <div>
        {eyesData?.map((elem) => (
          <div key={elem.id} className="flex justify-around flex-wrap mt-20 mb-10">
            <div onClick={() => handleNavigate(elem.id)} className="w-full sm:w-1/3 md:w-1/3 text-center relative mb-20">
              <img className="w-full h-96" src={LiquidImages} alt="Powder" />
              <h1 className="absolute text-center text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold left-32 bottom-44">{elem.category}</h1>
            </div>
            <div onClick={() => handleNavigate(elem.id)} className="w-full sm:w-1/3 md:w-1/3 text-center relative mb-10">
              <img className="w-full h-96" src={PencilImages} alt="Cream" />
              <h1 className="absolute text-center text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold left-32 bottom-52">pencil</h1>
            </div>
          </div>
        ))}
        <div className='text-center mt-8'>
          <button className="text-black border-2 border-black w-32 text-lg sm:text-xl md:text-2xl font-playfair p-1 mb-24">
            <Link to="/cosmetic">More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogEyes
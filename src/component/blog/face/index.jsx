import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaceGet } from "../../../redux/blogs/face";
import PowderImages from "../../../images/blog/powend.png";
import CreamImages from "../../../images/blog/cream.png";
import { Link, useNavigate } from "react-router-dom";


const BlogFace = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FaceGet());
  }, [dispatch]);

  const face = useSelector((state) => state.face.faceGet);
  const faceData = face?.data?.slice(0, 1);

  const handleNavigate = (elemId) => {
    console.log(elemId);
    navigate("/cosmetic");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-playfair font-medium mt-20 mb-28">Blogs</h1>
      <hr className='bg-black border-black mb-20' style={{ height: '2px' }} />
      <h1 className="text-black text-center text-xl sm:text-3xl md:text-3xl font-playfair font-medium mt-12">Face</h1>
      <div>
        {faceData?.map((elem) => (
          <div key={elem.id} className="flex justify-around flex-wrap mt-20 mb-10">
            <div onClick={() => handleNavigate(elem.id)} className="w-full sm:w-1/3 md:w-1/3 text-center relative mb-20">
              <img className="w-full h-96" src={PowderImages} alt="Powder" />
              <h1 className="absolute text-center text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold left-32 bottom-44">{elem.category}</h1>
            </div>
            <div onClick={() => handleNavigate(elem.id)} className="w-full sm:w-1/3 md:w-1/3 text-center relative mb-10">
              <img className="w-full h-96" src={CreamImages} alt="Cream" />
              <h1 className="absolute text-center text-3xl sm:text-4xl md:text-5xl font-playfair font-semibold left-32 bottom-52">cream</h1>
            </div>
          </div>
        ))}
        <div className='text-center mt-8'>
          <button className="text-black border-2 border-black w-32 text-lg sm:text-xl md:text-2xl font-playfair p-1">
            <Link to="/cosmetic">More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default BlogFace;

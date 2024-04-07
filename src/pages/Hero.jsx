import { Link } from "react-router-dom";
import React from "react";
import colorlogo from "../assets/colorlogo.png";
import model2 from "../assets/model2.png";

const Hero = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center gap-4">
      <nav className="bg-white shadow-md h-20 p-5 w-full flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img src={colorlogo} alt="" className=" h-7 sm:h-10" />
          <span className="logo text-transparent font-bold text-2xl sm:text-4xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
            Sandesh
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link to='/login' className="text-md sm:text-xl font-semibold">LogIn</Link>
          <Link to='/register' className="text-white text-md sm:text-lg bg-gradient-to-br from-amber-400 to-orange-600 p-2 sm:p-3 font-semibold cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:-translate-y-1">
            Register
          </Link>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row gap-1 sm:gap-8 w-11/12 sm:w-9/12 mt-0 lg:mt-0 sm:mt-10 h-full justify-around items-center">
        <div className="flex flex-col gap-7 w-80 lg:w-96">
          <div className="flex flex-col text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span>You can chat</span>
            <span>anywhere, anytime</span>
          </div>
          <div className="text-md sm:text-lg lg:text-xl text-slate-500 flex flex-col gap-5">
            <p>
              Sandesh makes it easy and fun to stay in touch & communicate
              anywhere, anytime with your favourite people.
            </p>
            <Link to='/register' className="text-white max-w-max text-md sm:text-lg bg-gradient-to-br from-amber-400 to-orange-600 p-2 sm:p-3 font-semibold cursor-pointer rounded-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:-translate-y-1">
              Start Chatting Now
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={model2}
            alt=""
            className=" w-[500px]  z-20 drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-full p-1 text-center text-sm">&copy; 2024 | Project by Ankit Saini</div>
    </div>
  );
};

export default Hero;

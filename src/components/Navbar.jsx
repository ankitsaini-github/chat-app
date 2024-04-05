import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import whitelogo from '../assets/whitelogo.png';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="Navbar flex items-center bg-gradient-to-r from-orange-500 to-amber-500 h-14 p-3 justify-between text-white">
      <div className="gap-3 hidden md:flex items-center">
        <img src={whitelogo} alt="" className="h-6"/>
        <span className="logo text-xl font-bold ">Sandesh</span>
      </div>
      <div className="user flex gap-4">
        <img
          src={currentUser.photoURL}
          alt=""
          className="bg-amber-300 h-7 w-7 rounded-full object-cover"
        />
        <span className="font-semibold">{currentUser.displayName}</span>
        <button className="bg-amber-100 text-orange-600 text-xs cursor-pointer px-2 rounded-lg font-semibold" onClick={()=>signOut(auth)}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar flex items-center bg-gradient-to-r from-orange-500 to-amber-500 h-14 p-3 justify-between text-amber-100">
      <span className="logo text-xl font-bold hidden md:block">Sandesh</span>
      <div className="user flex gap-4">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className="bg-amber-300 h-7 w-7 rounded-full object-cover"
        />
        <span className="font-semibold">Ankit</span>
        <button className="bg-amber-100 text-orange-600 text-xs cursor-pointer px-2 rounded-lg font-semibold">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;

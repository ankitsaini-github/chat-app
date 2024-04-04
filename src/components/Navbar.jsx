import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar flex items-center bg-orange-950 h-14 p-3 justify-between text-amber-200">
      <span className="logo text-xl font-bold hidden md:block">Sandesh</span>
      <div className="user flex gap-4">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className="bg-amber-400 h-7 w-7 rounded-full object-cover"
        />
        <span>Ankit</span>
        <button className="bg-orange-900 text-amber-400 text-xs cursor-pointer px-2 rounded-sm">
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

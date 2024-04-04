import React from "react";

const Search = () => {
  return (
    <div className="search border-b border-b-amber-600">
      <div className="searchform p-3">
        <input
          type="text"
          className=" bg-transparent outline-none text-amber-200 placeholder:text-orange-300"
          placeholder="Search user ..."
        />
      </div>
      <div className="userchat p-3 flex items-center gap-3 text-amber-200 cursor-pointer hover:bg-amber-600">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className=" w-14 h-14 rounded-full object-cover"
        />
        <div className="userchatinfo">
          <span>Ankit</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

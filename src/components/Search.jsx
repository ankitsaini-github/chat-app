import React from "react";

const Search = () => {
  return (
    <div className="search border-b border-b-slate-300">
      <div className="searchform p-3">
        <input
          type="text"
          className=" bg-transparent outline-none text-slate-600 placeholder:text-slate-500"
          placeholder="Search user ..."
        />
      </div>
      <div className="userchat p-3 flex items-center gap-3 text-slate-600 cursor-pointer hover:bg-slate-300">
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

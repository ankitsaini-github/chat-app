import React from "react";

const Message = () => {
  const owner = true;
  return (
    <div
      className={`message flex gap-5 mb-5 ${owner ? "flex-row-reverse" : ""}`}
    >
      <div className="msginfo flex flex-col text-amber-600 font-light">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className="h-10 w-10 rounded-full object-cover border border-amber-400"
        />
        <span>Just now</span>
      </div>
      <div
        className={`msgcontent max-w-[80%] flex flex-col gap-3 ${
          owner ? " items-end" : ""
        }`}
      >
        <p
          className={`rounded-lg py-2 px-4 max-w-max ${
            owner
              ? "rounded-se-none bg-amber-500 text-white"
              : "rounded-ss-none bg-white"
          }`}
        >
          hello
        </p>
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className={`w-1/2 rounded-lg py-3 px-4 ${
            owner ? "rounded-se-none bg-amber-500" : "rounded-ss-none bg-white"
          }`}
        />
      </div>
    </div>
  );
};

export default Message;

import React, { useContext, useEffect, useRef } from "react";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const owner = message.senderId === currentUser.uid? true : false;

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handledate=(d)=>{
    let t = d.toDate()
    return t.toLocaleTimeString()
  }
  return (
    <div
      className={`message flex gap-5 mb-5 ${owner ? "flex-row-reverse" : ""}`}
    >
      <div className="msginfo flex flex-col text-amber-600 font-light">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="h-10 w-10 rounded-full object-cover border border-amber-400"
        />
        <span>{handledate(message.date)}</span>
      </div>
      <div
        className={`msgcontent max-w-[80%] flex flex-col gap-3 ${
          owner ? " items-end" : ""
        }`}
      >
        {message.text.length>0 &&<p
          className={`rounded-lg py-2 px-4 max-w-max ${
            owner
              ? "rounded-se-none bg-amber-500 text-white"
              : "rounded-ss-none bg-white"
          }`}
        >
          {message.text}
        </p>}
        {message.img 
          && <img
                src={message.img}
                alt=""
                className={`w-1/2 rounded-lg py-1 px-1 ${
                  owner ? "rounded-se-none bg-amber-500" : "rounded-ss-none bg-white"
                }`}
              />}
      </div>
    </div>
  );
};

export default Message;

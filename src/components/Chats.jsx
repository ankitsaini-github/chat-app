import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';

import { AuthContext } from '../context/AuthContext';
import { ChatContext } from "../context/ChatContext";
import { db } from '../firebase';

const Chats = ({openChat}) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  
  const { dispatch } = useContext(ChatContext);
  
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid])
  
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    openChat();
  };
  
  return (
    <div className='chats overflow-y-scroll'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div className="userchat p-3 flex items-center gap-4 text-slate-800 cursor-pointer hover:bg-slate-300" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <img
            src={chat[1].userInfo.photoURL}
            alt=""
            className=" w-14 h-14 rounded-full object-cover"
          />
          <div className="userchatinfo">
            <span className='text-xl font-semibold'>{chat[1].userInfo.displayName}</span>
            <p className='text-sm text-gray-500'>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default Chats
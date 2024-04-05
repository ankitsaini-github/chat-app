import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';

import { ChatContext } from '../context/ChatContext'
import Message from './Message'
import { db } from '../firebase';

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const {data} = useContext(ChatContext)
  
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className='messageS bg-orange-200 p-3 overflow-y-scroll' style={{height:'calc(100% - 112px)'}}>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}

export default MessageBox
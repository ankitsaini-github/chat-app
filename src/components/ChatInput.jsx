import React, { useContext, useState } from "react";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import addimg from "../assets/addimg.png";
import attatch from "../assets/attatch.png";
import { v4 as uuid } from "uuid";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if(img){
      const storageRef = ref(storage, uuid());

      await uploadBytesResumable(storageRef, img).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        });
    }else{
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className="input h-14 bg-white p-3 flex items-center justify-between">
      <input
        type="text"
        placeholder="Message"
        className="w-9/12 border-none outline-none text-lg"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send flex items-center gap-4">
        {/* <img src={attatch} alt="" className="h-6 w-6 cursor-pointer" /> */}
        <input type="file" id="uploadImage" className="hidden" onChange={(e) => setImg(e.target.files[0])}/>
        <label htmlFor="uploadImage block">
          <img src={addimg} alt="" className="h-6 w-6 cursor-pointer" />
        </label>
        <button
          className="border-none py-1 px-3 text-white bg-amber-500 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

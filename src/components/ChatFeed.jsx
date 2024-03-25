import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import React from "react";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} className="w-full ">
          <div className="msg-block">
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
          <div
            className={`read-rcpt ${
              isMyMessage ? "mr-[18px] ml-0" : "mr-0 ml-[68px]"
            }`}
          >
            read
          </div>
        </div>
      )
    })
  };

  if (!chat) return <div/>;

  return (
    <div className="chat-feed ">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div className="h-[100px]" />
      <div className="msg-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
    )
};

export default ChatFeed;

import React, { useContext } from 'react'

import { ChatContext } from '../context/ChatContext'
import ChatInput from './ChatInput'
import MessageBox from './MessageBox'
import adduser from '../assets/adduser.png'
import more from '../assets/more.png'

const ChatContainer = (props) => {
  const {data} = useContext(ChatContext)
  return (
    <div className={`chat w-full sm:w-4/6 absolute sm:static h-full z-50 top-0 ${props.isOpen?' right-0':' -right-full'} ease-out duration-300`}>
      <div className="chatinfo h-14 flex items-center justify-between p-3 bg-gradient-to-r from-orange-600 to-orange-700 text-amber-100">
        <span className=''><button className="font-extrabold text-xl p-1 block sm:hidden" onClick={()=>props.closeChat()}>&#9776;</button></span>
        <span className='font-semibold'>{data.user?.displayName}</span>
        <div className="chaticon flex gap-4">
          <img src={adduser} alt="" className=' h-5 cursor-pointer'/>
          <img src={more} alt="" className=' h-5 cursor-pointer'/>
        </div>
      </div>
      <MessageBox/>
      <ChatInput/>
    </div>
  )
}

export default ChatContainer
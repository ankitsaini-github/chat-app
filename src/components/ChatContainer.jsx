import ChatInput from './ChatInput'
import MessageBox from './MessageBox'
import React from 'react'
import adduser from '../assets/adduser.png'
import more from '../assets/more.png'

const ChatContainer = () => {
  return (
    <div className='chat flex-2'>
      <div className="chatinfo h-14 flex items-center justify-between p-3 bg-gradient-to-r from-orange-600 to-orange-700 text-amber-100">
        <span className='font-semibold'>Ankit</span>
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
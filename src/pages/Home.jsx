import React, { useState } from 'react'

import ChatContainer from '../components/ChatContainer'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isChatOpen,setIsChatOpen]=useState(false)
  const closeChatHandler=()=>{
    setIsChatOpen(false)
  }
  const openChatHandler=()=>{
    setIsChatOpen(true)
  }
  return (
    <div className='home bg-gradient-to-br from-amber-300 to-orange-400 h-svh flex justify-center items-center'>
      <div className="Container w-full h-full md:w-11/12 md:h-5/6 md:shadow-xl rounded-xl flex overflow-hidden relative">
        <Sidebar openChat={openChatHandler}/>
        <ChatContainer closeChat={closeChatHandler} isOpen={isChatOpen}/>
      </div>
    </div>
  )
}

export default Home
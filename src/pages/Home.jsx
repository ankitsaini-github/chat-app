import ChatContainer from '../components/ChatContainer'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='home bg-amber-300 h-svh flex justify-center items-center'>
      <div className="Container w-11/12 h-5/6 border border-white rounded-xl flex overflow-hidden">
        <Sidebar/>
        <ChatContainer/>
      </div>
    </div>
  )
}

export default Home
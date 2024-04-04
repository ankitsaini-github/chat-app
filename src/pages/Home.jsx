import ChatContainer from '../components/ChatContainer'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='home bg-gradient-to-br from-amber-300 to-orange-400 h-svh flex justify-center items-center'>
      <div className="Container w-full h-full md:w-11/12 md:h-5/6 md:shadow-xl rounded-xl flex overflow-hidden">
        <Sidebar/>
        <ChatContainer/>
      </div>
    </div>
  )
}

export default Home
import Chats from '../components/Chats'
import Navbar from '../components/Navbar'
import React from 'react'
import Search from '../components/Search'

const Sidebar = () => {
  return (
    <div className='sidebar flex-1 bg-amber-900'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
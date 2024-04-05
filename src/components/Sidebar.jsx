import React, { useState } from 'react'

import Chats from '../components/Chats'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Sidebar = () => {
  return (
    <div className='sidebar flex-1 bg-slate-100'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
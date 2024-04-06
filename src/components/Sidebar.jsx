import React, { useState } from 'react'

import Chats from '../components/Chats'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Sidebar = (props) => {
  return (
    <div className='sidebar w-full sm:w-2/6 bg-slate-100 z-10'>
      <Navbar/>
      <Search/>
      <Chats openChat={props.openChat}/>
    </div>
  )
}

export default Sidebar
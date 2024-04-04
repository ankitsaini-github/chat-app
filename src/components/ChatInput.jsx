import React from 'react'
import addimg from '../assets/addimg.png'
import attatch from '../assets/attatch.png'

const ChatInput = () => {
  return (
    <div className='input h-14 bg-white p-3 flex items-center justify-between'>
      <input type="text" placeholder='Message' className='flex-1 border-none outline-none text-lg'/>
      <div className="send flex items-center gap-4">
        <img src={attatch} alt="" className='h-6 w-6 cursor-pointer'/>
        <input type="file" id="uploadImage" className='hidden'/>
        <label htmlFor='uploadImage'>
          <img src={addimg} alt="" className='h-6 w-6 cursor-pointer'/>
        </label>
        <button className='border-none py-1 px-3 text-white bg-amber-500 rounded'>Send</button>
      </div>
    </div>
  )
}

export default ChatInput
import Message from './Message'
import React from 'react'

const MessageBox = () => {
  return (
    <div className='messageS bg-amber-200 p-3 overflow-y-scroll' style={{height:'calc(100% - 112px)'}}>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default MessageBox
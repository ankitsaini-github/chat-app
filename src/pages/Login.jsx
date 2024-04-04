import React from 'react'

const Login = () => {
  return (
    <div className='f-container bg-gradient-to-br from-amber-300 to-orange-400 h-svh flex justify-center items-center'>
      <div className='f-wrapper bg-white py-5 px-16 rounded-lg flex flex-col gap-3 items-center shadow-xl'>
        <span className="logo text-transparent font-bold text-4xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Sandesh</span>
        <span className="title text-amber-400 text-xl">Log In</span>
        <form className='flex flex-col gap-4'>
          <input className='w-64 p-4 border-b border-b-amber-300 outline-none' type='email' placeholder='Email'/>
          <input className='w-64 p-4 border-b border-b-amber-300 outline-none' type='password' placeholder='Password'/>
          <button className='text-white bg-gradient-to-br from-amber-400 to-orange-500 p-3 font-bold cursor-pointer rounded-md mt-4'>Log in</button>
          <p className=' mt-3 text-amber-500 text-lg'>You don't have an account? Signup</p>
        </form>
      </div>
    </div>
  )
}

export default Login
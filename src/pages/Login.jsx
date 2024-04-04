import React from 'react'

const Login = () => {
  return (
    <div className='f-container bg-amber-200 h-svh flex justify-center items-center'>
      <div className='f-wrapper bg-white py-5 px-16 rounded-lg flex flex-col gap-3 items-center shadow-xl'>
        <span className="logo text-orange-400 font-bold text-4xl">Sandesh</span>
        <span className="title text-amber-400 text-xl">Log In</span>
        <form className='flex flex-col gap-4'>
          <input className='w-64 p-4 border-b border-b-amber-300' type='email' placeholder='Email'/>
          <input className='w-64 p-4 border-b border-b-amber-300' type='password' placeholder='Password'/>
          <button className='text-white bg-amber-400 p-3 font-bold cursor-pointer rounded-md mt-4'>Log in</button>
          <p className=' mt-3 text-amber-500 text-lg'>You don't have an account? Signup</p>
        </form>
      </div>
    </div>
  )
}

export default Login
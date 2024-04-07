import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react'

import { auth } from "../firebase";
import colorlogo from '../assets/colorlogo.png';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home")
      
      console.log('user logged in !')
      setError(null)
    } catch (error) {
      console.log('full error === ',error)
      console.log("err is = ", error.code);
      setError(error.code);
    }
  };

  return (
    <div className='f-container bg-gradient-to-br from-amber-300 to-orange-400 h-svh flex justify-center items-center relative'>
      <div className='f-wrapper bg-white py-5 px-16 rounded-lg flex flex-col gap-3 items-center shadow-xl'>
        <div className="flex gap-4 items-center cursor-pointer" onClick={()=>{navigate('/')}}>
          <img src={colorlogo} alt="" className="h-10"/>
          <span className="logo text-transparent font-bold text-4xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
            Sandesh
          </span>
        </div>
        <span className="title text-amber-500 text-xl">Log In</span>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input className='w-64 p-4 border-b border-b-amber-300 outline-none' type='email' placeholder='Email' autoComplete=""/>
          <input className='w-64 p-4 border-b border-b-amber-300 outline-none' type='password' placeholder='Password' autoComplete=""/>
          <button className='text-white bg-gradient-to-br from-amber-400 to-orange-500 p-3 font-bold cursor-pointer rounded-md mt-4'>Log in</button>
          {error && <p className=" text-red-600">{error}</p>}
          <p className=' mt-3 text-amber-500 text-lg'>Don't have an account? <Link to='/register' className="underline hover:text-orange-500">Sign up</Link>.</p>
        </form>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center bg-amber-700 w-full p-2"><p className="text-white text-xs">&copy; 2024 | Project by Ankit Saini</p></div>
    </div>
  )
}

export default Login
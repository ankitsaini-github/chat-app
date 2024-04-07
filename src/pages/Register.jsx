import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import addImg from "../assets/addimage.png";
import colorlogo from '../assets/colorlogo.png';

const Register = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    if(!file){
      setError('Avatar not added')
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, email.replace('@','').replace('.',''));

      await uploadBytesResumable(storageRef, file).then(
        () => {
          getDownloadURL(storageRef).then(async(downloadURL) => {
            // console.log("File available at", downloadURL);
            try {
              await updateProfile(res.user,{
                displayName: displayName,
                photoURL: downloadURL,
              })
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate('/home')
              
            } catch (error) {
              console.log('error uploading...',error)
              setError(error.code)
            }
          });
        }
      );
      
      console.log('user registered !')
      setError(null)
    } catch (error) {
      console.log('full error === ',error)
      console.log("err is = ", error.code);
      setError(error.code);
    }
  };

  return (
    <div className="f-container bg-gradient-to-br from-amber-300 to-orange-400 h-svh flex justify-center items-center">
      <div className="f-wrapper bg-white py-5 px-16 rounded-lg flex flex-col gap-3 items-center shadow-xl">
        <div className="flex gap-4 items-center cursor-pointer" onClick={()=>{navigate('/')}}>
          <img src={colorlogo} alt="" className="h-10"/>
          <span className="logo text-transparent font-bold text-4xl bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
            Sandesh
          </span>
        </div>
        <span className="title text-amber-500 text-xl">Register</span>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="w-64 p-4 border-b border-b-amber-300 outline-none"
            type="text"
            placeholder="Display Name"
            autoComplete=""
            required
          />
          <input
            className="w-64 p-4 border-b border-b-amber-300 outline-none"
            type="email"
            placeholder="Email"
            autoComplete=""
          />
          <input
            className="w-64 p-4 border-b border-b-amber-300 outline-none"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <input
            className="w-64 p-4 border-b border-b-amber-300 hidden"
            type="file"
            id="profilepicUpload"
          />
          <label
            htmlFor="profilepicUpload"
            className="flex items-center gap-3 text-amber-400 text-sm cursor-pointer"
          >
            <img src={addImg} alt="upload profile pic" className=" w-10" />
            <span>Add an avatar</span>
          </label>
          <button className="text-white bg-gradient-to-br from-amber-400 to-orange-500 p-3 font-bold cursor-pointer rounded-md mt-4">
            Sign up
          </button>
          {error && <p className=" text-red-600">{error}</p>}
          <p className=" mt-3 text-amber-500 text-lg">
            Have an account? <Link to='/login' className="underline hover:text-orange-500">Log in</Link>.
          </p>
        </form>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center bg-amber-700 w-full p-2"><p className="text-white text-xs">&copy; 2024 | Project by Ankit Saini</p></div>
    </div>
  );
};

export default Register;

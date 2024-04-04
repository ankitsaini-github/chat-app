import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userchat p-3 flex items-center gap-4 text-amber-200 cursor-pointer hover:bg-amber-600">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className=" w-14 h-14 rounded-full object-cover"
        />
        <div className="userchatinfo">
          <span className='text-xl font-semibold'>Ankit</span>
          <p className='text-sm text-yellow-100'>wassup!!</p>
        </div>
      </div>

      <div className="userchat p-3 flex items-center gap-4 text-amber-200 cursor-pointer hover:bg-amber-600">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className=" w-14 h-14 rounded-full object-cover"
        />
        <div className="userchatinfo">
          <span className='text-xl font-semibold'>Ankit</span>
          <p className='text-sm text-yellow-100'>wassup!!</p>
        </div>
      </div>

      <div className="userchat p-3 flex items-center gap-4 text-amber-200 cursor-pointer hover:bg-amber-600">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
          alt=""
          className=" w-14 h-14 rounded-full object-cover"
        />
        <div className="userchatinfo">
          <span className='text-xl font-semibold'>Ankit</span>
          <p className='text-sm text-yellow-100'>wassup!!</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chats
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

function login() {
  return (
    <div className='flex flex-wrap'>
    {/* picture */}
      <div className='shadow-r-3xl w-[70%] h-screen text-center'>
        <img src='https://media.istockphoto.com/id/979833570/photo/different-color-running-shoes.jpg?s=1024x1024&w=is&k=20&c=yIN0xIv4Vr250sMkIMkRFvmDipMfPdOBvVMUYHQ5UoQ=' alt='backgroundShoeImage' 
        className='w-full h-full'
        />
      </div>


    {/* Login Form */}
      <div className='flex flex-col p-2 gap-3 shadow-l-3xl border-zinc-500 w-[30%] h-screen text-center items-center justify-center'> 
        {/* Inputs */}
        <input type='text' className='border-b-3 border-zinc-400 max-h-12 w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder={'Email'} />
        <input type='password' className='border-b-3 border-zinc-400 max-h-12 w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder='Password'/> 

        {/* Buttons */}
        <div className='flex flex-row items-center justify-between gap-38'>
          <h3 className='text-sm font-semibold text-yellow-700 hover:cursor-pointer'>Forgot Password?</h3>
          <button className='border-1 border-yellow-500 bg-zinc-200 text-yellow-500 rounded-xl py-1 px-7'>Sign In</button>
        </div>
      </div>

    </div>
  )
}

export default login
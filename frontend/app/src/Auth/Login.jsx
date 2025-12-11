import { useState } from "react"

function login() {

  const [active, setActive ] = useState('Sign-Up');


  return (
    <div className='flex flex-wrap'>
    {/* picture */}
      <div className='relative shadow-r-3xl w-screen max-w-[70%] h-screen'>
        <div className='flex w-full h-full'>
        <img src='https://media.istockphoto.com/id/979833570/photo/different-color-running-shoes.jpg?s=1024x1024&w=is&k=20&c=yIN0xIv4Vr250sMkIMkRFvmDipMfPdOBvVMUYHQ5UoQ=' alt='backgroundShoeImage' className='w-full h-full object-cover' />
        </div>

        <div className='absolute top-1/2 -translate-y-1/2 right-0 flex flex-col justify-between gap-2 z-[100]'>
          <button onClick={()=>{setActive('Sign-In')}} className={active === 'Sign-In' ? `px-9 py-1.5 bg-orange-500 text-2xl text-white rounded-l-xl shadow hover:cursor-pointer` : `px-9 py-1.5 bg-zinc-100/30 text-2xl text-orange-600 rounded-l-xl shadow hover:cursor-pointer hover:opacity-80`}>
            Sign In
          </button>
          <button onClick={()=>{setActive('Sign-Up')}} className={active === 'Sign-Up' ? `px-9 py-1.5 bg-orange-500 text-2xl text-white rounded-l-xl shadow hover:cursor-pointer` : `px-9 py-1.5 bg-zinc-100/30 text-2xl text-orange-600 rounded-l-xl shadow hover:cursor-pointer hover:opacity-80`}>
            Sign Up
          </button>
        </div>
      </div>


    {/* Login Form Sign-In */}
    {active === 'Sign-In' &&
      <div className='flex flex-col p-2 gap-3 shadow-l-3xl w-screen max-w-[30%] h-screen text-center items-center justify-center'> 
        {/* Inputs */}
        <input type='text' className='border-b-3 border-zinc-400 max-h-12 w-full max-w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder={'Email'} />
        <input type='password' className='border-b-3 border-zinc-400 max-h-12 w-full max-w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder='Password'/> 
        <button className='w-full max-w-[80%] border-1 border-orange-500 bg-transparent font-bold text-orange-500 rounded-xl py-1 px-7 hover:cursor-pointer hover:text-orange-400 hover:border-orange-400 hover:bg-zinc-100'>Sign In</button>
        <h3 className='text-sm font-semibold text-orange-700 hover:cursor-pointer hover:text-orange-500'>Forgot Password?</h3>
      </div>
    }

    {/* Login Form Sign-Up */}
    {active === 'Sign-Up' &&
      <div className='flex flex-col p-2 gap-4 shadow-l-3xl w-screen max-w-[30%] h-screen text-center items-center justify-center'> 
        {/* Inputs */}
        <input type='text' className='border-b-3 border-zinc-400 max-h-12 w-full max-w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder={'First Name'} />
        <input type='text' className='border-b-3 border-zinc-400 max-h-12 w-full max-w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder={'Last Name'} />
        <input type='text' className='border-b-3 border-zinc-400 max-h-12 w-full max-w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder={'Email'} />
        <input type='password' className='border-b-3 border-zinc-400 max-h-12 w-full max-w-[80%] p-2 placeholder-gray-700 shadow-sm' placeholder='Password'/> 
        <button className='w-full max-w-[80%] border-1 border-orange-500 bg-transparent font-bold text-orange-500 rounded-xl py-1 px-7 hover:cursor-pointer hover:text-orange-400 hover:border-orange-400 hover:bg-zinc-100'>Sign Up</button>
        <button className='w-full max-w-[80%] border-1 border-orange-500 bg-orange-500 font-bold text-white rounded-xl py-1 px-7 hover:cursor-pointer hover:text-orange-200 hover:border-orange-400/80 hover:bg-orange-500/80'>Cancel</button>
      </div>
    }
      

    </div>
  )
}

export default login
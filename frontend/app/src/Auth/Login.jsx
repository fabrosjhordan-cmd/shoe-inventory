import { use, useEffect, useState } from "react"
import { IoMdMail } from "react-icons/io";
import { FaLock, FaCheck   } from "react-icons/fa";
import { GiRunningShoe  } from "react-icons/gi";
import { supabase } from "../supabaseClient";

function login() {

  const [active, setActive ] = useState('Sign-In');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) =>{
      setLoading(true)
  }

  const handleSignup = async(event) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if(error) console.log(error.message)
    setLoading(false)
  }

  const handleClear = (event) =>{
    event.preventDefault();
    setLoading(true);
    setEmail('')
    setPassword('')
    setLoading(false);
  }

  return (
    <div className='flex flex-wrap'>
  
    {/* picture */}
      <div className='relative shadow-r-3xl w-screen max-w-[70%] h-screen'>
        <div className='flex w-full h-full'>
        <img src='https://media.istockphoto.com/id/979833570/photo/different-color-running-shoes.jpg?s=1024x1024&w=is&k=20&c=yIN0xIv4Vr250sMkIMkRFvmDipMfPdOBvVMUYHQ5UoQ=' alt='backgroundShoeImage' className='w-full h-full object-cover scale-x-[1]' />
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
        {/* Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* <GiRunningShoe  className="w-32 h-32 text-orange-500 p-4 border-1 rounded-full z-20"/> */}
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500"/>
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500 scale-x-[-1]"/>
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500 scale-x-[-1] scale-y-[-1]"/>
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500 scale-y-[-1]"/>
          <h1 className="absolute inset-0 flex items-center justify-center w-32 h-32 text-center text-yellow-400 font-semibold text-xl items-center z-10 text-shadow-2xl">CHECKERS</h1>
        </div>

        {/* Inputs */}
        {/* Email */}
        <div className="relative w-full max-w-[80%]">
          <IoMdMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600'/>
          <input type='email' className='border-b-3 border-zinc-400 max-h-12 w-full p-2 pl-10 placeholder-gray-700 shadow-sm' placeholder={'Email'} />
        </div>

        {/* Password */}
        <div className='relative w-full max-w-[80%]'>
        <FaLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600' />
          <input type='password' className='border-b-3 border-zinc-400 max-h-12 w-full p-2 pl-10 placeholder-gray-700 shadow-sm' placeholder='Password'/> 
        </div>
        <button className='w-full max-w-[80%] border-1 border-orange-500 bg-transparent font-bold text-orange-500 rounded-xl py-1 px-7 hover:cursor-pointer hover:text-orange-400 hover:border-orange-400 hover:bg-zinc-100'>Sign In</button>
        <h3 className='text-sm font-semibold text-orange-700 hover:cursor-pointer hover:text-orange-500'>Forgot Password?</h3>
      </div>
    }

    {/* Login Form Sign-Up */}
    {active === 'Sign-Up' &&
      <form onSubmit={handleSignup} className='flex flex-col p-2 gap-4 shadow-l-3xl w-screen max-w-[30%] h-screen text-center items-center justify-center'> 
         {/* Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* <GiRunningShoe  className="w-32 h-32 text-orange-500 p-4 border-1 rounded-full z-20"/> */}
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500"/>
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500 scale-x-[-1]"/>
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500 scale-x-[-1] scale-y-[-1]"/>
          <FaCheck  className="absolute inset-0 w-32 h-32 text-orange-500 scale-y-[-1]"/>
          <h1 className="absolute inset-0 flex items-center justify-center w-32 h-32 text-center text-yellow-400 font-semibold text-xl items-center z-10 text-shadow-2xl">CHECKERS</h1>
        </div>
        {/* Inputs */}
        {/* Email */}
          <div className="relative w-full max-w-[80%]">
            <IoMdMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600'/>
            <input type='email' className='border-b-3 border-zinc-400 max-h-12 w-full p-2 pl-10 placeholder-gray-700 shadow-sm' placeholder={'Email'} value={email} onChange={(e)=> setEmail(e.target.value)} required={true}/>
          </div>
          {/* Password */}
          <div className='relative w-full max-w-[80%]'>
          <FaLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600' />
            <input type='password' className='border-b-3 border-zinc-400 max-h-12 w-full p-2 pl-10 placeholder-gray-700 shadow-sm' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required={true}/> 
          </div>
          <button className='w-full max-w-[80%] border-1 border-orange-500 bg-transparent font-bold text-orange-500 rounded-xl py-1 px-7 hover:cursor-pointer hover:text-orange-400 hover:border-orange-400 hover:bg-zinc-100' onClick={handleSignup} disabled={loading}>{loading ? 'Creating Account...' : 'Create Account'}</button>
          <button className='w-full max-w-[80%] border-1 border-orange-500 bg-orange-500 font-bold text-white rounded-xl py-1 px-7 hover:cursor-pointer hover:text-orange-200 hover:border-orange-400/80 hover:bg-orange-500/80' onClick={handleClear}>{loading ? 'Clearing...' : 'Clear'}</button>

      </form>
    }
      

    </div>
  )
}

export default login
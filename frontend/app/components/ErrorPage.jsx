import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
    <div className='text-[90px] font-semibold my-2'>Page Not Found ❌</div>
    <div>
    <Link to={'/'}>
      <button className='bg-red-300 border border-1 border-zinc-300 text-lg rounded-md p-2 my-2'>Go to home page </button>
    </Link>
    </div>
    </div>
  )
}

export default ErrorPage
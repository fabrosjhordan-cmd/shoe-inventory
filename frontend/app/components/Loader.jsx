import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function Loader() {
  return (
    <Suspense
        fallback={
        <div class="h-screen flex items-center justify-center">
            <div class="animate-spin h-10 w-10 border-4 borderg-grey-300 border-t-orange-500 rounded-full"></div>
        </div>
        }
    >
        <Outlet />
    </Suspense>
  )
}

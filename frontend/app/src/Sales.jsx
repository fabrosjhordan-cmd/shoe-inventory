import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Contents'

function Sales({page}) {
  return (
  <div className='w-full flex'>
    <SideBar page={page} />
    <Content />
  </div>
  )
}

export default Sales
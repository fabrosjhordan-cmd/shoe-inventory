import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Contents'

function Inventory({link, page}) {
  return (
   <div className='w-full flex'>
    <SideBar page={page}/>
    <Content link={link}/>
  </div>
  )
}

export default Inventory
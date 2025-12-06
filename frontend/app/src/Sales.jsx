import React from 'react'
import SideBar from '../components/SideBar'
import Content from '../components/Contents'

function Sales({page, link}) {
  return (
  <div className='w-full flex'>
    <SideBar page={page} />
    <Content link={link} />
  </div>
  )
}

export default Sales
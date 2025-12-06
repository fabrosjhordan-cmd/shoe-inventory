import React from 'react'
import SideBar from '../../components/SideBar'
import Content from '../../components/Contents'

function ProductDetails({link}) {
  return (
  <div className='w-full flex'>
    <SideBar  />
    <Content link={link} />
  </div>
  )
}

export default ProductDetails
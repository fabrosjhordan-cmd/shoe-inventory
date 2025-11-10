import { useState } from 'react';
import { useEffect } from 'react'
import SideBar from '../components/SideBar';
import Content from '../components/Contents';

function App({link, page}) {
  const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:8081/users')
  //   .then(res => res.json())
  //   .then(data =>setData(data))
  //   .catch(err => console.log(err));
  // }, [])
  return (
  <div className='w-full flex'>
    <SideBar page={page} />
    <Content link={link}/>
    
  </div>
  )
}

export default App

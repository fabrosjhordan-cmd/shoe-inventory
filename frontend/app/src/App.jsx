import { useState } from 'react';
import { useEffect } from 'react'
import SideBar from '../components/SideBar';

function App() {
  const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:8081/users')
  //   .then(res => res.json())
  //   .then(data =>setData(data))
  //   .catch(err => console.log(err));
  // }, [])
  return (
  <div>
    <SideBar />
  </div>
  )
}

export default App

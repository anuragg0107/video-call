import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [value, setValue] = useState()
   
  const navigate = useNavigate();

  const handleClick = useCallback(() =>{
  navigate(`/room/${value}`)
  },[navigate, value])
  return (
    <div>
      <input type='text' placeholder='Enter your name' value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={handleClick}>Join</button>
    </div>
  )
}

export default Home
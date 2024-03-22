import React from 'react'
import Bg from '../assets/BG.png'
import Navbar from '../components/Navbar'

const Donate = () => {
  return (
    <div className=' h-screen bg-cover' style={{backgroundImage: `url(${Bg})`}}>
        <Navbar />
    </div>
  )
}

export default Donate
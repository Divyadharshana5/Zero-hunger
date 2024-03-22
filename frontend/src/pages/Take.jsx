import React from 'react'
import Bg from '../assets/BG.png'
import Navbar from '../components/Navbar'

const Take = () => {
  return (
    <div className=' h-screen bg-cover' style={{backgroundImage: `url(${Bg})`}}>
        <Navbar />
    </div>
  )
}

export default Take
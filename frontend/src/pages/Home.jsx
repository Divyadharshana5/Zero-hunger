import React from 'react'
import Bg from '../assets/BG.png'
import Navbar from '../components/Navbar'
import HomeImg from '../assets/home.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' h-screen bg-cover font-mono' style={{backgroundImage: `url(${Bg})`}}>
        <Navbar />
        <div className=" pt-[13%] mx-20">
          <div className=" flex justify-between items-center rounded-2xl space-x-32 p-6 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
              <div className=" items-center">
                <p className=' text-4xl font-semibold text-green-400'>Empowering Lives, <span className=' text-red-400'>Ending Hunger Globally.</span></p>
                <p className=' text-2xl font-medium pt-3'>Zero Hunger empowers individuals and organizations to take meaningful action in the fight against hunger, fostering a sense of unity and compassion.</p>
                <div className=" space-x-6 pt-6 ">
                  <Link to='/donate' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black'>Donate</Link>
                  <Link to='/take' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black'>Takeaway</Link>
                </div>
              </div> 
              <img className=' h-96 w-auto' src={HomeImg} alt="" />

          </div>
        </div>
    </div>
  )
}

export default Home
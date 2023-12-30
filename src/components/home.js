import React from 'react'
import Navbar from './navbar'
import bannerbackgroud from '../assets/home-banner-background.png'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={bannerbackgroud} alt="" />
          </div>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>

          </h1>
        </div>
    </div>
  )
}

export default Home;


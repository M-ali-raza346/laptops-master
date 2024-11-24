import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Port from '@/components/Portfolio'
import Products from '@/components/Products'
import Rendering from '@/components/Rendering'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Port/>
      <Products/>
      <Rendering/>
      <Footer/>
    </div>
  )
}

export default page

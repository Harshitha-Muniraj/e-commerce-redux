import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProduct/FeaturedProducts'
import Category from '../../components/categories/Category'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <>
      <Slider/>
      <FeaturedProducts/>
      <Category/>
      <Contact/>
   </>
  )
}

export default Home
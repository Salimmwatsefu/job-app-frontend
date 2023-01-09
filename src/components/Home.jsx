import React from 'react'

import JobsCards from './JobsCards';
import About from './About'
import Categories from './Categories'
import CustomerCards from './CustomerCards'
import Footer from './Footer'
import Hero from './Hero'


function Home() {
  return (
    <div>
      <Hero />
      <About />
       <Categories />
      <CustomerCards />
      <JobsCards />
      <Footer />
    </div>
    
  )
}

export default Home
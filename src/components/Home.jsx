import React from 'react'

import JobsCards from './JobsCards';
import About from './About'
import CustomerCards from './CustomerCards'
import Footer from './Footer'
import Hero from './Hero'


function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CustomerCards />
      <JobsCards />
      <Footer />
    </div>
    
  )
}

export default Home
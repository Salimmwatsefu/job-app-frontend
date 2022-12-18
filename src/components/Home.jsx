import React from 'react'
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
      <Footer />
    </div>
    
  )
}

export default Home
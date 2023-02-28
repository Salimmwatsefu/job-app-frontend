import React from 'react'

// import JobsCards from './JobsCards';
import About from './About'
import Categories from './Categories'
import CustomerCards from './CustomerCards'
import Footer from './Footer'
import Hero from './Hero'
import JobsCards from './JobsCards'

function Home() {


  return (
    <div>
      <Hero />
      <About />
       <Categories />
      <CustomerCards />
      <div className='bg-gray-50'>
      <JobsCards />
      </div>
      <Footer />
    </div>
    
  )
}

export default Home
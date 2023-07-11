import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id="about">
      <div className="">
  <div class=" bg-[#BA4B2F] pt-6 shadow-sm md:h-[98vh]">
    

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-[59px] ">
      <img
        alt="Laptop"
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=100"
       
        class="h-[550px] ml-20 w-[480px] rounded-t-full object-cover hidden md:block"
      />

      <div className='md:ml-14 ml-5'>
        <h2 class="md:text-6xl font-bold text-white ">
          About Us
        </h2>

        <p class="mt-4 md:text-base text-sm text-white md:w-[480px]">
        Welcome to our job website! We are a dedicated team of
                professionals committed to connecting job seekers with their
                dream careers. Our website offers a wide variety of job listings
                across various industries, making it easier for job seekers to
                find the right opportunity for them.In addition to connecting
                job seekers with job opportunities, we also offer a variety of
                resources and tools to help them in their job search. This
                includes resume building tips, interview preparation advice, and
                career development resources. We work closely with top employers
                and recruiters to ensure that our job listings are current and
                relevant. We also have a team of experts who review and verify
                all job listings to ensure that they are legitimate and that job
                seekers are not scammed.
        </p>

        <div class="mt-10 md:pb-0 pb-7 ">
          <Link
            to="/signup"
            class="inline-block  border-white border-2 hover:bg-white hover:text-[#BA4B2F] text-slate-50 transition-all duration-500 px-5 py-3 text-sm font-bold "
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About
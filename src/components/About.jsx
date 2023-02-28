import React from 'react'

function About() {
  return (
    <div id="about">
      <div className="">
      <div className="absolute inset-10 bg-white/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-blue/75 sm:to-blue/75">
     </div>
  <div class="bg-gray-100 p-6 shadow-sm">
   
   

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-20 bg-gray-900 h-[550px]">
      

      <img
        alt="Laptop"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
       
        class="h-full w-full object-cover opacity-80 "
        
      />
      

    



      <div className=' '>
        <h2 class="text-4xl font-bold text-white mt-36">
          About Us
        </h2>

        
        <p class="mt-4 text-md text-white ">
        Welcome to our job website! We are a dedicated team of
                professionals committed to connecting job seekers with their
                dream careers. Our website offers a wide variety of job listings
                across various industries, making it easier for job seekers to
                find the right opportunity for them.In addition to connecting
                
        </p>

        <div class="mt-10">
          <a
            href="/jobs"
            class="inline-block rounded-lg bg-slate-50 hover:bg-gray-700 px-5 py-3 text-base font-medium text-gray-800 hover:text-white text-center items-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About
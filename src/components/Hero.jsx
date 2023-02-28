import React from "react";
import Carousel from 'react-bootstrap/Carousel';



function Hero() {
  return (
    <div>
     
  
  {/*<section
  class="relative bg-[url(https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset bg-white/75  sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Let us find you a

        <strong class="block font-extrabold text-gray-800">
          New Job.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
      Empowering job seekers to connect, discover and explore opportunities to advance their careers and achieve success
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="/jobs"
          class="block w-full rounded bg-gray-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
        href="#about"
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  </section>*/}



    <Carousel fade>
      <Carousel.Item interval={1000} className="text-black">
    
 <div className="absolute inset-0 bg-white/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/50 sm:to-white/">
     </div>
      <img
          className="d-block w-screen h-[550px] object-cover object-center"
         // src="https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1260&q=900"
        // src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1260&q=900"
        //src="https://images.unsplash.com/photo-1612832164313-ac0d7e07b5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlbW90ZSUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1260&q=900"
      src="https://images.unsplash.com/photo-1637782855823-5423b6afb07b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxyZW1vdGUlMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1260&q=900" 
//src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHJlbW90ZWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1260&q=900"  
alt="First slide"
        />
        
        <Carousel.Caption className="text-white ">
          <div>
          <h3 className="uppercase font-bold text-5xl text-blue-600">Work <span className="text-white">Remotely</span></h3>
          <p className="text-2xl  gap-10">Empowering job seekers to connect, discover and explore opportunities to advance their careers and achieve success</p>
          </div>       
        </Carousel.Caption>
      </Carousel.Item>
      
    <Carousel.Item interval={4000}>
    <div className="absolute inset-0 bg-white/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/25 sm:to-white/25">
     </div>
    <img
          className="d-block w-screen h-[550px] object-cover object-center"
          //src="https://images.unsplash.com/photo-1653669486960-9d4c6f3fcbdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1260&q=900"
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1260&q=900"
        
          alt="Second slide"
        />
    
       
        <Carousel.Caption className="text-white">
          <h3 className="uppercase font-bold text-5xl">Collective <span className="text-blue-600">Universe</span></h3>
          <p className="text-2xl gap-10">Empowering job seekers to connect, discover and explore opportunities to advance their careers and achieve success</p>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <div className="absolute inset-0 bg-white/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/5 sm:to-white/50">
     </div>
        
        <img
         //className="absolute bg-[url(https://img.freepik.com/free-photo/geometric-background-with-copy-space_24972-1806.jpg?size=626&ext=jpg&ga=GA1.1.1248207789.1668606585)] h-96 w-full bg-cover ]"
          className="d-block w-screen h-[550px] object-cover object-center inset-0 bg-white/75"
          //src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=1260&q=800"
         src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYW13b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1260&q=900"
          alt="Third slide"
        />
        
        <Carousel.Caption className="text-white" >
          <h3 className="uppercase font-bold text-5xl">Team <span className="text-blue-600">Work</span></h3>
          <p className="text-2xl gap-10">Empowering job seekers to connect, discover and explore opportunities to advance their careers and achieve success</p>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



      </div>
  )

}

export default Hero;

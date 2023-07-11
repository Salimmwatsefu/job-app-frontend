import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="sm:h-[90vh] md:flex">

      <section className="lg:pt-32 pt-20 lg:w-1/2 w-full lg:pl-14 pl-5 bg-[#FCF5EB]">
        <h1 className="font-bold lg:text-6xl text-[#BA4B2F]">
          This is Career Connect
        </h1>
        <p className="lg:mt-10 mt-3 text-lg text-[#BA4B2F]">Where companies and job seekers connect</p>

        <div className="md:mt-20 mt-5 md:pb-0 pb-16">
            <NavLink href={'/jobs'}>
            <button
             className=" md:text-lg text-xs  bg-[#BA4B2F] text-white border- border-2  md:hover:scale-125 hover:scale-105 duration-500"
             
             >
              <p className="lg:mx-10 mx-3 my-3 ">Find your next hire</p>
              </button>
              </NavLink>

              <button className=" md:text-lg text-xs font-bold border-[#BA4B2F] border-2 text-[#BA4B2F] ml-2   md:ml-7 md:hover:scale-125 hover:scale-105 duration-500">
              <p className="lg:mx-10 mx-3 my-3">Find your next job</p>
              </button>
          </div>
      </section>

      <section className="bg-[#EFA593] w-1/2 hidden lg:block">
        <div className=" ">
        </div>
        <div className=" ml-16 ">
          <img
          src="/Image/jobsbg.png"
          alt="person"
    
          className=" w-full h-full"
        
          
          />
        </div>
      </section>
      
    </div>
      
  );
}
export default Hero;

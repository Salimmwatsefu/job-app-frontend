import React from 'react';
import RecentJobsCard from "./RecentJobsCard"


const JobCard = (props) => {
    const { name, title, location, employmentType } = props;
    return (
        <div className='bg-white rounded-lg w-72 shadow-yellow-800/25 shadow-2xl' style={{ border: '1px solid #fff', padding: '20px', margin: '40px', }}>
            <h3 className=' text-orange-600 text-xl'>{title}</h3>
            <p className='text-blue-400'>{location}</p>
            <p className='text-lime-700'>{employmentType}</p>
        </div>
    )
}

const JobGroup = (props) => {
    const { label, jobs } = props;
    return (
        <div className='' style={{ margin: '40px',}}>
            <h2 className='text-gray-700 uppercase font-bold text-2xl text-center mt-5'>{label}</h2>
            {jobs.map((job) => <JobCard key={job.title} {...job} />)}
        </div>
    )
}

const JobsCards = (props) => {
    const featuredJobs = [
        { name: "Featured Jobs", title: "Software Engineer", location: "Nairobi, Kenya", employmentType: "Full-time" },
        { name: "Featured Jobs", title: "DevOps Engineer", location: "Nairobi, Kenya", employmentType: "Full-time" },
        { name: "Featured Jobs", title: "Front-end Developer", location: "Nairobi, Kenya", employmentType: "Full-time" },
        
    ];
    
    const recentJobs = [
        { name: "Recent Jobs", title: "Data Scientist", location: "Nakuru, Kenya", employmentType: "Part-time" },
        { name: "Recent Jobs", title: "Data Analyst", location: "Nakuru, Kenya", employmentType: "Part-time" },
        { name: "Recent Jobs", title: "Business Analyst", location: "Nakuru, Kenya", employmentType: "Part-time" },
       
    ];
    return (
        <div className=' mx-auto' style={{ display: 'flex', flexDirection: 'row', width:"130vh" }} align="center">
            <JobGroup label="Featured Jobs" jobs={featuredJobs}/>
            <JobGroup label="Recent Jobs" jobs={recentJobs} />

        
    </div>

    
   
    );

}


  
  export default JobsCards;


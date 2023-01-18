// import React, { useState } from "react";

// function JobSearch({ jobs }) {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredJobs = jobs.filter((job) => {
//     return job.job_title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="bg-gray-50 flex">
//         <div className="mx-auto max-w-sm w-1/2">
//         <form className="bg-white p-6 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="job-search">
//               Search Job
//             </label>
//             <input
//               className="w-full border border-gray-400 p-2 rounded-lg"
//               type="text"
//               id="job-search"
//               placeholder="Search for jobs"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </div>
//         </form>
//         <div className="mx-auto max-w-screen-xl">
//             {filteredJobs.map((job) => (
//             <div className="mb-4" key={job.id}>
//                 <div className="bg-white rounded-lg shadow-md p-6">
//                 <div className="flex justify-between">
//                     <a
//                     href="#display"
//                     className="text-lg font-medium text-blue-500 hover:text-blue-800"
//                     onClick={() => setSelectedJob(job)}
//                     >
//                     {job.job_title}
//                     </a>
//                     <a href="#" className="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600">
//                     Apply
//                     </a>
//                 </div>
//                 <div className="text-gray-700 text-sm mt-2">Deadline: {job.deadline}</div>
//                 <div className="text-gray-700 text-sm mt-2">{job.description}</div>
//                 <div className="text-gray-700 text-sm mt-2">{job.qualification}</div>
//                 </div>
//             </div>
//             ))}
//         </div>
//         </div>
//         {selectedJob && (
//         <div className="mx-auto max-w-screen-xl w-1/2">
//             <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-lg font-medium">{selectedJob.job_title}</h2>
//             <div className="text-gray-700 text-sm mt-2">Deadline: {selectedJob.deadline}</div>
//             <div className="text-gray-700 text-sm mt-2">{selectedJob.description}</div>
//             <div className="text-gray-700 text-sm mt-2">{selectedJob.qualification}</div>
//             </div>
//         </div>
//         )}
//     </div>
//   );
// }
// export default JobSearch;
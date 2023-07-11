import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal"; // Import the modal component

function Jobs({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle job selection
  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  // Function to handle modal close
  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="">
      <div className="py-3 md:mx-20 pl-3 bg-[#FCF5EB]">
        <form>
          <div className="flex gap-10 w-[500px] ">
          <p className="font-semibold mt-1" >Find a job</p>
            <div className="md:w-[300px] w-[200px]">
              <input
                type="text"
                className="form-control"
                placeholder="Search Job"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <br />

      <div className="mx-2 md:flex flex-wrap gap-10 sm:mx-24 mb-20">
        {filteredJobs.map((job) => (
          <div
            className="card mt-10  md:w-[500px]"
            key={job.id}
            onClick={() => handleJobSelect(job)}
          >
            <div className=" bg-[#FCF5EB] h-8">
              <a href="#display" className="font-bold text-[#BA4B2F] pl-4">
                {job.job_title}
              </a>
              &emsp;&emsp;&emsp;&emsp;&emsp;
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{ fontWeight: "bold" }}>
                Deadline: {job.deadline}
              </li>
              <li className="list-group-item">{job.description}</li>
            </ul>
          </div>
        ))}
      </div>

      {selectedJob && (
        <Modal onClose={closeModal}>
          <h3 className="text-[#BA4B2F]" >
            {selectedJob.job_title}
          </h3>
          <div className="list-group list-group-flush">
            <div>
              <h4 className="list-group-item">Description</h4>
              <p>{selectedJob.description}</p>
            </div>
            {/* ... */}
            <div className="list-group-item">
              <button className="bg-[#BA4B2F] px-3 py-2 rounded-lg">
                <Link to="/upload" className="text-white " align="center">
                  Apply
                </Link>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Jobs;

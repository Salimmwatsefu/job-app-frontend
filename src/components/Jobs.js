import React from "react";


function Jobs({jobs}) {
   
    return (
        <div className='bg-gray-50' >
        <div>
        <form>
  <div className="row" style={{width:'50rem'}}>
    <div className="col">
      <input type="text" className="form-control" placeholder="Search Job"/>
    </div>
    <div className="col">
      {/* <input type="text" className="form-control" placeholder="Last name"/> */}
    </div>
  </div>
</form>
</div>
<br/>
    <div style={{width:'50rem', padding:'10px'}} >
        {jobs.map((job)=>
        <div className="card mt-10" key={job.id}>
        <div className="card-header"><a href="#display" style={{fontWeight: "bold"}}>
          {job.job_title}</a>&emsp;&emsp;&emsp;&emsp;&emsp;<a href="/upload" className="btn btn-primary">Apply</a>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{fontWeight: "bold"}}>Deadline: {job.deadline}</li>
          <li className="list-group-item">{job.description}</li>
          <li className="list-group-item">{job.qualification}</li>
        </ul>
      </div>
)}
</div>
</div>
    )
}

export default Jobs;
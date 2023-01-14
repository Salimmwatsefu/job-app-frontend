import React from 'react';

const FeaturedJobsCard = (props) => {
  return (
    <div>
      <div>
      <h2 className="font-bold">{props.name}</h2>
      </div>
       
      <div className='flex gap-10' >
        <div >{props.title}</div>
        <div >{props.location}</div>
        <div>{props.employmentType}</div>
      </div>
    </div>
  );
}


export default FeaturedJobsCard;

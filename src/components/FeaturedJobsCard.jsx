import React from 'react';

const FeaturedJobsCard = (props) => {
  return (
    <div className="featured-jobs-card">
      <h1>{props.title}</h1>
      <p>Location: {props.location}</p>
      <p>Employment Type: {props.employmentType}</p>
    </div>
  );
}

export default FeaturedJobsCard;

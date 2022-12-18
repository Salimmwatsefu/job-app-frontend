import React from 'react';

const RecentJobsCard = (props) => {
  return (
    <div className="recent-jobs-card">
      <h1>{props.title}</h1>
      <p>Location: {props.location}</p>
      <p>Employment Type: {props.employmentType}</p>
    </div>
  );
}

export default RecentJobsCard;

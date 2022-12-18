import React from 'react';

const RecentJobsCard = (props) => {
  return (
    <div className="recent-jobs-card">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h1>{props.title}</h1>
      <p>{props.location}</p>
      <p>{props.employmentType}</p>
    </div>
    </div>
  );
}

export default RecentJobsCard;

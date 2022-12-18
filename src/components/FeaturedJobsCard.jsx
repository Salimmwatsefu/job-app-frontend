import React from 'react';

const FeaturedJobsCard = (props) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '16px' }}>{props.title}</div>
        <div style={{ marginRight: '16px' }}>{props.location}</div>
        <div>{props.employmentType}</div>
      </div>
    </div>
  );
}


export default FeaturedJobsCard;

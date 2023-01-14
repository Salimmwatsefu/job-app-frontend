import React from 'react';

const FeaturedJobsCard = (props) => {
  return (
    <div id="jobs" className='card'>
      <br/>
      <div className='card-item'>
       <h2>Featured Jobs</h2></div>
       <br/>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '16px' }} className='card-item'></div>
        <div style={{ marginRight: '16px' }} className='card-item'></div>
        <div className='card-item'></div>
        
      </div>
    </div>
  );
}


export default FeaturedJobsCard;

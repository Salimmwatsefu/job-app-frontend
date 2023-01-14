import React from 'react';
import FeaturedJobsCard from './FeaturedJobsCard';
import RecentJobsCard from './RecentJobsCard';

const JobsCards = (props) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', position: 'relative', top: '20px' }}>
        <div style={{ border: '2px solid #ccc', padding: '32px', margin: '16px' }}>
          <FeaturedJobsCard />
        </div>
        <div style={{ border: '2px solid #ccc', padding: '32px', margin: '16px' }}>
          <RecentJobsCard />
        </div>
      </div>
    );
  }
  
  export default JobsCards;
  
import React from 'react';
import FeaturedJobsCard from './FeaturedJobsCard';
import RecentJobsCard from './RecentJobsCard';

const JobsCards = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '2px solid #ccc', padding: '32px', margin: '16px' }}>
        <FeaturedJobsCard
          title="Software Engineer"
          location="Nairobi, Kenya"
          employmentType="Full-time"
        />
      </div>
      <div style={{ border: '2px solid #ccc', padding: '32px', margin: '16px' }}>
        <RecentJobsCard
          title="Data Scientist"
          location="Nakuru, Kenya"
          employmentType="Part-time"
        />
      </div>
    </div>
  );
}

export default JobsCards;
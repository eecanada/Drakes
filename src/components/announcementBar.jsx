import React from 'react';

const AnnouncementBar = ({ announcement }) => {
  return (
    <div className="col announcement-container">
      <h5 className='text-center announcement-text'>{announcement}</h5>
    </div>
  );
};

export default AnnouncementBar;

import React from 'react';

const AnnouncementBar = ({ announcement }) => {
  return (
    <div className="col ">
      <h5 className='text-center'>{announcement}</h5>
    </div>
  );
};

export default AnnouncementBar;

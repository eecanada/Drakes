import React from 'react';
import AnnouncementBar from './components/announcementBar';
import NavBar from './components/navBar';
import logo from './assets/images/drakes-logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <AnnouncementBar announcement="Free Express Shipping" />
      </div>
      <div>
        <NavBar
          logo={logo}
          links={[
            `what's new`,
            'pernnials',
            'clothing',
            'shirts',
            'accessories',
            'shoes',
            'editorial',
          ]}
        />
      </div>
    </div>
  );
};

export default App;

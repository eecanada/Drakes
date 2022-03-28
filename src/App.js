import React from 'react';
import AnnouncementBar from './components/announcementBar';
import NavBar from './components/navBar';
import Hero from './components/hero';
import logo from './assets/images/drakes-logo.svg';
import search from './assets/images/icons/search.svg';
import account from './assets/images/icons/account.svg';
import basket from './assets/images/icons/basket.svg';
import question from './assets/images/icons/question.svg';
import heroImage from './assets/images/hero-image-lg.jpg';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <AnnouncementBar announcement="Free Express Shipping" />
      </div>
      <div  className='d-flex justify-content-around align-items-center '>
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
          icons={[search, account, basket, question]}
        />
      </div>
      <div
        className="row hero-image d-flex  align-items-center justify-content-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Hero
          heroImage={heroImage}
          text="The 2022 Festive Lookbook"
          links={['shop now', 'read more']}
        />
      </div>
    </div>
  );
};

export default App;

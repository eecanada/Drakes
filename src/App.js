import React from 'react';
import AnnouncementBar from './components/announcementBar';
import NavBar from './components/navBar';
import Hero from './components/hero';
import ProductCategories from './components/productCategories';
import FeaturedProduct from './components/featuredProduct';
import logo from './assets/images/drakes-logo.svg';
import search from './assets/images/icons/search.svg';
import account from './assets/images/icons/account.svg';
import basket from './assets/images/icons/basket.svg';
import question from './assets/images/icons/question.svg';
import heroImage from './assets/images/hero-image-lg.jpg';
import poloCoat from './assets/images/polocoat.jpg';
import { getCategories } from './getProductCategories';
import './App.css';

const App = () => {
  const categories = getCategories();
  const excerpt =
    'There should be a special word for that feeling you get when you put on a coat that just feels right. The way your posture seems to magically correct itself, like an an Italian wool chiropractor invisibly knotting and kneading. The right piece of outerwear can give an added sense of power and gravitas. In the same way a suit can feel like a suit of armour for the day ahead, the perfect coat can make even the bleakest winter morning, if not exciting, at least an exciting opportunity to wear a beautiful coat.';

  return (
    <div className="container-fluid">
      <div className="row">
        <AnnouncementBar announcement="Free Express Shipping" />
      </div>
      <div className="d-flex justify-content-around align-items-center ">
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
      <div className="row product-row">
        <ProductCategories categories={categories} />
      </div>
      <div className="row featured-product-row">
        <FeaturedProduct
          title={'The Power of the Polo Coat'}
          image={poloCoat}
          excerpt={excerpt}
          link="/"
        />
      </div>
    </div>
  );
};

export default App;

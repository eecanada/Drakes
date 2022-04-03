import React, { useState } from 'react';
import AnnouncementBar from './components/announcementBar';
import NavBar from './components/navBar';
import Hero from './components/hero';
import ProductCategories from './components/productCategories';
import FeaturedProduct from './components/featuredProduct';
import Country from './components/country';
import MyVerticallyCenteredModal from './components/myVerticallyCenteredModal';
import logo from './assets/images/drakes-logo.svg';
import search from './assets/images/icons/search.svg';
import account from './assets/images/icons/account.svg';
import basket from './assets/images/icons/basket.svg';
import question from './assets/images/icons/question.svg';
import heroImage from './assets/images/hero-image-lg.jpg';
import poloCoat from './assets/images/polocoat.jpg';
import arrow from './assets/images/icons/arrow.svg';
import { getCategories } from './services/getProductCategories';
import { getFavorites } from './services/getFavoriteProducts';
import Button from 'react-bootstrap/Button';

import './App.css';
import FavoriteProducts from './components/favoriteProducts';
import Footer from './components/footer';

const App = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [submit, setSubmit] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalCountryShow, setmodalCountryShow] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setModalShow(true);
  //   }, 3000);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFooterEmail('');
    setSubmit(true);
    console.log('submit');
  };

  const handleFormChange = (e) => {
    setFooterEmail(e.target.value);
  };

  const categories = getCategories();
  const favorites = getFavorites();

  const excerpt =
    'There should be a special word for that feeling you get when you put on a coat that just feels right. The way your posture seems to magically correct itself, like an an Italian wool chiropractor invisibly knotting and kneading. The right piece of outerwear can give an added sense of power and gravitas. In the same way a suit can feel like a suit of armour for the day ahead, the perfect coat can make even the bleakest winter morning, if not exciting, at least an exciting opportunity to wear a beautiful coat.';

  const footerLinks1 = [
    'About',
    'Our Stores',
    'FAQs',
    'Delivery',
    'Returns',
    'Careers',
  ];

  const footerLinks2 = [
    'Sign Up (or Log In)',
    'Contact Us',
    'Trunk Shows',
    'Terms & Conditions',
    'Privacy & Cookies',
  ];

  const footerLinks3 = ['Facebook', 'Instagram', 'Pinterest', 'Twitter'];

  return (
    <div className="container-fluid">
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
        formSubmitted={submit}
        footerEmail={footerEmail}
      />

      <div className="row announcement-row">
        <Country
          show={modalCountryShow}
          onHide={() => setmodalCountryShow(false)}
        />

        <div className="shopping-row">
          <div>
            <Button
              variant="primary"
              id="shopping-btn"
              className="shipping-location visibility-hide"
              onClick={() => setmodalCountryShow(true)}
            >
              {`Shopping in: Australia ($ AUD)`}
            </Button>
          </div>

          <AnnouncementBar announcement="Free Express Shipping" />
          <div>
            <Button
              id="shopping-btn"
              className="shipping-location"
              variant="primary"
              onClick={() => setmodalCountryShow(true)}
            >
              {`Shopping in: Australia ($ AUD)`}
            </Button>
          </div>
        </div>
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

      <div className="row favorite-product-row">
        <FavoriteProducts favorites={favorites} title="Shop the Look" />
      </div>

      <div className="">
        <Footer
          footerText="relaxed elegance since 1977"
          icon={arrow}
          links1={footerLinks1}
          links2={footerLinks2}
          links3={footerLinks3}
          footerEmail={footerEmail}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange}
          formSubmitted={submit}
        />
      </div>
    </div>
  );
};

export default App;

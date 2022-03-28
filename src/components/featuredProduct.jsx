import React from 'react';

const FeaturedProduct = ({ title, image, excerpt, link }) => {
  return (
    <div className="col featured-product-col">
      <h2 className="featured-product-title">{title}</h2>
      <img className="featured-product-image" src={image} alt={title} />
      <div className="d-flex flex-column">
        <p className="featured-product-excerpt">{excerpt}</p>
        <a className="featured-product-link" href={link}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default FeaturedProduct;

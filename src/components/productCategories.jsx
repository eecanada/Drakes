import React from 'react';

const ProductCategories = ({ categories }) => {
  return (
    <div className="col d-flex flex-wrap align-items-center justify-content-center category-col">
      {categories.map((category) => {
        return (
          <a href={category.link}>
            <img className="category-img" src={category.img} />
            <h4 className="category-text">{category.title}</h4>
          </a>
        );
      })}
    </div>
  );
};

export default ProductCategories;

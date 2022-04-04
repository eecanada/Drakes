import React from 'react';

const ProductCategories = ({ categories }) => {
  return (
    <div className="col d-flex flex-wrap align-items-center justify-content-center category-col">
      {categories.map((category, index) => {
        return (
          <a key={index} href={category.link}>
            <img
              className="category-img"
              alt={category.title}
              src={category.img}
            />
            <h4 className="category-text">{category.title}</h4>
          </a>
        );
      })}
    </div>
  );
};

export default ProductCategories;

import React from 'react';

const FavoriteProducts = ({ favorites, title, shoppingIn, rate }) => {
  return (
    <>
      <h2 className="favorite-product-title">{title}</h2>
      <div className="col d-flex flex-wrap align-items-center justify-content-center favorite-col">
        {favorites.map((favorite, index) => {
          return (
            <a key={index} href={favorite.link} className="favorite-links">
              <img
                className="favorite-img"
                alt={favorite.title}
                src={favorite.img}
              />
              <h4 className="favorite-title">{favorite.title}</h4>
              <h4 className="favorite-price">
                <span>{shoppingIn.currencySymbol}</span>
                {Math.floor((favorite.price * rate)).toFixed(2)}
              </h4>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default FavoriteProducts;

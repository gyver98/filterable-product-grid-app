import React from 'react';

const ProductCard = ({ product, imageSrc, badgeClassName }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={imageSrc} alt={product.productName} />
    </div>
    <div className={`product-badge ${badgeClassName}`}></div>
    <div className="product-info">
      <h5 className="product-info__item">{product.productName}</h5>
      <h6 className="product-info__price">{product.price}</h6>
    </div>
  </div>
);

export default ProductCard;

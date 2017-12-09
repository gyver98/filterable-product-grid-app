import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={require(`images/${product.productImage}`)} alt="" />
    </div>
    <div className={`product-badge ${product.isSale ? 'product-badge--sale': (product.isExclusive ? 'product-badge--exclusive': '')}`}></div>
    <div className="product-info">
      <h5 className="product-info__item">{product.productName}</h5>
      <h6 className="product-info__price">{product.price}</h6>
    </div>
  </div>
)

export default ProductCard;
import React, { Component } from 'react';
import './ProductGrid.scss';
import ProductCard from './ProductCard';

const images = require.context('../../assets/images', true);

class ProductGrid extends Component {
  render() {
    const { filterSize } = this.props;
    const cards = [];

    this.props.products.forEach((product) => {
      const imageSrc = images(`./${product.productImage}`);
      let badgeClassName = "";
      if (product.isSale) {
        badgeClassName = "product-badge--sale";
      } else if (product.isExclusive) {
        badgeClassName = "product-badge--exclusive";
      }
      if (product.size.indexOf(filterSize) !== -1) {
        cards.push(<ProductCard
                      key={product.index}
                      product={product}
                      imageSrc={imageSrc}
                      badgeClassName={badgeClassName}
                  />);
      } else if (filterSize === '' || filterSize === 'Filter by size') {
        cards.push(<ProductCard
                      key={product.index}
                      product={product}
                      imageSrc={imageSrc}
                      badgeClassName={badgeClassName}
                  />);
      }
    });

    return (
      <section className="product-container">
        {cards}
      </section>
    );
  }
}

export default ProductGrid;

import React, { Component } from 'react';
import './ProductGrid.scss';
import ProductCard from './ProductCard';

class ProductGrid extends Component {

  render() {
    const filterSize = this.props.filterSize;
    const cards = [];

    this.props.products.forEach((product) => {
      if (product.size.indexOf(filterSize) !== -1) {
        cards.push(
          <ProductCard key={product.index} product={product} />
        )
      } else if (filterSize === '' || filterSize === 'Filter by size') {
        cards.push(
          <ProductCard key={product.index} product={product} />
        )  
      }
    });
  
    return(
      <section className="product-container">
        {cards}
      </section>  
    )
  }
  
}

export default ProductGrid;

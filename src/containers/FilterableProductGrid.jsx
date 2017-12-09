import React, { Component } from 'react';
import FilterBar from './../components/FilterBar/FilterBar';
import ProductGrid from './../components/ProductGrid/ProductGrid';

class FilterableProductGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterSize: ''
    };

    this.handleFilterOptionChange = this.handleFilterOptionChange.bind(this);

  }

  handleFilterOptionChange(filterSize) {
    this.setState({
      filterSize: filterSize
    });
  }

  render() {
    const { filterSize } = this.state;
    const { products } = this.props;

    return ([
      <FilterBar
        filterSize={filterSize}
        onFilterOptionChange={this.handleFilterOptionChange}
        products={products}
      />,
      <ProductGrid
        filterSize={filterSize}
        products={products}
      />
    ])
  }
}

export default FilterableProductGrid;
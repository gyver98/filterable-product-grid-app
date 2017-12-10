import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import FilterableProductGrid from './containers/FilterableProductGrid';
import ProductData from './services/ProductData';
import ProductAPI from './services/ProductAPI';

// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
const products = ProductAPI.getProductData();

// Render FilterableProductGrid with mock prodcut data
ReactDOM.render(
  <FilterableProductGrid products={products}/>,
  document.getElementById('root'),
);

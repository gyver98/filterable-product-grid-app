// import './assets/stylesheets/styles.scss';

// import React from 'react'; // import the main react dependency
// import ReactDOM from 'react-dom'; // import reactDOM
// import App from './app/App.jsx'; // import the main app component

// ReactDOM.render(<App />, document.getElementById('root')); // render our App component and mount it to our #root element

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import FilterableProductGrid from './containers/FilterableProductGrid';
import ProductData from './services/ProductData';
import ProductAPI from './services/ProductAPI';

//Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
const products = ProductAPI.getProductData();

// Render FilterableProductGrid with mock prodcut data
ReactDOM.render(<FilterableProductGrid products={products} />, 
  document.getElementById('root'));
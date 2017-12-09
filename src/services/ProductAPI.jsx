const ProductAPI = {
  // Load mock product data from localStorage
  getProductData() {
    const data = JSON.parse(localStorage.getItem('product'));
    return data;
  }
};

export default ProductAPI;
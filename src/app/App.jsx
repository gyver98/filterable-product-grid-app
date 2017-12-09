import React, { Component } from 'react';
import cat from 'images/product-1';
import dog from 'images/product-2';
import dogs from 'images/product-3';

const hello = () => {
  return (
    <div className="container">

      <div className="image-wrapper">
        <img src={cat} className="image-wrapper__image" alt=""/>
      </div>

      <div className="image-wrapper">
        <img src={dog} className="image-wrapper__image" alt=""/>
      </div>

      <div className="image-wrapper">
        <img src={dogs} className="image-wrapper__image" alt=""/>
      </div>

    </div>
  )
}

export default hello;
import React from 'react';
import one from './images/start.jpg';
import two from './images/extend.jpg';
import three from './images/top.webp';
import './SelectProduct.css';
const SelectProduct = (props) => {
  const { products, setShowCompo, setSelectedProduct } = props;
  return (
    <div className="select-product-wrapper">
      {/* <img src={one} alt="" />
      <img src={two} alt="" />
      <img src={three} alt="" /> */}
      <div className="container">
        <div className="card-group">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <p className="text-center pt-1 product-name">{product.name}</p>
              <img
                src={`data:image/png;base64,${product.image.img}`}
                className="card-img-top"
                alt="icon"
              />
              <div className="card-body">
                <div
                  className="btn btn-select"
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowCompo('details');
                  }}
                >
                  Select
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;

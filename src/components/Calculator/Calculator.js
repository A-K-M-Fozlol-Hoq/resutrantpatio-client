import React, { useEffect, useState } from 'react';
import './Calculator.css';
import SelectProduct from './SelectProduct';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import CalculatorModal from './CalculatorModal';
const Calculator = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showCompo, setShowCompo] = useState('products');
  const [status, setStatus] = useState('loading');
  const updateProductsState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/product/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setStatus('loaded');
      })
      .catch((error) => {
        console.error(error);
        setStatus('loaded');
      });
  };
  useEffect(() => {
    updateProductsState();
  }, []);
  return (
    <>
      <div className="calculator-wrapper">
        {status === 'loading' && (
          <>
            <h1 className="text-center">Price Calculator</h1>
            <div
              style={{
                backgroundColor: '#6EAD40',
                height: '5px',
                width: '150px',
                borderRadius: '5px',
                margin: '10px auto 20px',
              }}
            ></div>

            <div
              className="spinner-border text-success"
              style={{ marginLeft: '48%', marginTop: '50px' }}
              role="status"
            >
              <span className="sr-only"></span>
            </div>
          </>
        )}
        {status === 'loaded' && (
          <div>
            <h1 className="text-center">Price Calculator</h1>
            <div
              style={{
                backgroundColor: '#6EAD40',
                height: '5px',
                width: '150px',
                borderRadius: '5px',
                margin: '10px auto 20px',
              }}
            ></div>
            {showCompo === 'products' ? (
              <SelectProduct
                setShowCompo={setShowCompo}
                products={products}
                setSelectedProduct={setSelectedProduct}
              ></SelectProduct>
            ) : (
              <>
                <div
                  className="btn btn-primary text-center "
                  style={{ width: '150px' }}
                  onClick={() => setShowCompo('products')}
                >
                  <IoArrowBackCircleSharp
                    style={{ fontSize: '20px', margin: '-3px 5px 0 0' }}
                  />
                  Back
                </div>
                <img
                  className="selected-image"
                  src={`data:image/png;base64,${selectedProduct.image.img}`}
                  alt=""
                />
                <p className="text-center">
                  You know how much it was worth when you bought it. How much is
                  it worth now?
                </p>
                <hr />
                <div className="all-options">
                  <div className="single-option">
                    <span>Select your preferred material</span>{' '}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="wood">wood</option>
                      <option value="plastic">plastic</option>
                      <option value="glass">glass</option>
                      <option value="plywood">plywood</option>
                    </select>
                  </div>
                  <div className="single-option">
                    <span>Select your preferred color</span>{' '}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="black">black</option>
                      <option value="brows">brows</option>
                      <option value="white">white</option>
                    </select>
                  </div>
                  <div className="single-option">
                    <span>Select your preferred shade type</span>{' '}
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="roller">Roller Shades</option>
                      <option value="solar">Solar Shades</option>
                      <option value="cellular">Cellular Shades</option>
                    </select>
                  </div>
                  <button
                    className="btn btn-primary search-button"
                    style={{ height: '50px', width: '150px' }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Next
                  </button>
                </div>

                <CalculatorModal
                  selectedProduct={selectedProduct}
                ></CalculatorModal>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Calculator;

import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './Products.css';
const Products = () => {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState();
  const updateLogosState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/product/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  const handleSubmit = () => {
    if (name && file && price) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('name', name);
      formData.append('price', price);
      fetch('https://glacial-inlet-84709.herokuapp.com/product/add', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data._id) {
            alert('Product created successfully');
            updateLogosState();
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to create Product. Please don't provide large file");
        });
    } else {
      alert('Please enter a product name and input file');
    }
  };
  const handleClick = (product) => {
    fetch(
      `https://glacial-inlet-84709.herokuapp.com/product/deleteById/${product._id}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Product was removed successfully!') {
          alert('Product removed successfully');
          updateLogosState();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove client! Please try again');
        window.location.reload();
      });
  };
  return (
    <div className="product-wrapper">
      <h2 className="text-center mt-3">Added products</h2>
      <div
        style={{
          backgroundColor: '#6EAD40',
          height: '5px',
          width: '150px',
          borderRadius: '5px',
          margin: '0 auto 50px',
        }}
      ></div>
      <div className="all-products">
        {products.map((product) => (
          <div className="single-product" key={product._id}>
            <img
              src={`data:image/png;base64,${product.image.img}`}
              alt="icon"
            />
            <div
              onClick={() => {
                handleClick(product);
              }}
              className="delete-icon"
            >
              <AiFillDelete />
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '210px', margin: '20px auto 0' }}>
        {/* Enter a new client: <br /> */}
        <h4 className="text-center mt-5">Add a new product</h4>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '0 auto 20px',
          }}
        ></div>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name=""
          id=""
          className="form-control"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 mb-2"
          placeholder="enter product name"
          id=""
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name=""
          className="form-control mt-2 mb-2"
          placeholder="enter product price"
          id=""
        />
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Add Product
        </div>
      </div>
    </div>
  );
};

export default Products;

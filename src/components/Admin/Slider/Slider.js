import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
const Slider = () => {
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [slides, setSlides] = useState([]);
  const updateLogosState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/slide/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setSlides(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  const handleSubmit = () => {
    if (title && file && description) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('title', title);
      formData.append('description', description);
      fetch('https://glacial-inlet-84709.herokuapp.com/slide/add', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data._id) {
            alert('New slide created successfully');
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to create slide. Please don't provide large file");
        });
    } else {
      alert('Please enter a slide name, description and input file');
    }
  };
  const handleClick = (product) => {
    fetch(
      `https://glacial-inlet-84709.herokuapp.com/slide/deleteById/${product._id}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Slide was removed successfully!') {
          alert('Slide removed successfully');
          updateLogosState();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove Slide! Please try again');
        window.location.reload();
      });
  };
  return (
    <div className="product-wrapper">
      <h2 className="text-center mt-3">Added sliders</h2>
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
        {slides.map((slide) => (
          <div className="single-product" key={slide._id}>
            <img src={`data:image/png;base64,${slide.image.img}`} alt="icon" />
            <div
              onClick={() => {
                handleClick(slide);
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
        <h4 className="text-center mt-5">Add a new slide</h4>
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
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 mb-2"
          placeholder="enter slider title"
          id=""
        />
        <textarea
          className="form-control mt-2 mb-2"
          name=""
          id=""
          cols="10"
          placeholder="Enter slide description"
          rows="2"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Add Slider
        </div>
      </div>
    </div>
  );
};

export default Slider;

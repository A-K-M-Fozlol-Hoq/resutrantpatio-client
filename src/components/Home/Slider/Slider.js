import React, { useState, useEffect } from 'react';
// need png
import './Slider.css';
const Slider = () => {
  // src={`data:image/png;base64,${service.image.img}`}
  const [slides, setSlides] = useState([]);
  const [status, setStatus] = useState('loading');
  const updateLogosState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/slide/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus('loaded');
        setSlides(data);
      })
      .catch((error) => {
        setStatus('loaded');
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  return (
    <>
      {status === 'loading' ? (
        <>
          <div
            className="spinner-border text-success"
            style={{
              marginLeft: '48%',
              marginTop: '50px',
              marginBottom: '50px',
            }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </>
      ) : (
        <div className="slider-wrapper">
          <div className="container w-100">
            <div
              id="carouselExampleControls"
              className="carousel slide pink-bg w-100"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {slides.map((slide, i) => (
                  <div
                    className={`carousel-item ${i === 0 ? 'active' : ''} `}
                    key={slide._id}
                    style={{ padding: '20px 0' }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                        <button
                          className="see-more-button btn btn-danger"
                          onClick={() => window.location.replace('calculator')}
                        >
                          Learn more...
                        </button>
                      </div>
                      <div className="col-md-5">
                        <img
                          // style={{ border: '3px solid red' }}
                          src={`data:image/png;base64,${slide.image.img}`}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;

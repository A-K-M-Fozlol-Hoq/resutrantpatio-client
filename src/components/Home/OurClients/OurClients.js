import React, { useEffect, useState } from 'react';
import './OurClients.css';

const OurClients = () => {
  const [logos, setLogos] = useState([]);
  let loopIndex = 0;
  const [fakeArray, setFakeArray] = useState([]);
  const updateLogosState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/client/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setLogos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Array.from(new Array(20), (x, i) => i);​​​​​​
  useEffect(() => {
    updateLogosState();
  }, []);
  const updateLoopIndex = () => {
    loopIndex++;
  };
  return (
    <div className="our-clients-wrapper">
      <div className="container">
        <h2 className="text-center pt-5 pb-2">OUR CLIENTS</h2>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '0 auto 50px',
          }}
        ></div>
        <div
          id="carouselExampleControls2"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {Array.from(new Array(Math.ceil(logos.length / 2)), (x, i) => (
              <div
                key={i}
                className={`carousel-item ${loopIndex === 0 ? 'active' : ''}`}
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src={`data:image/png;base64,${logos[loopIndex]?.image.img}`}
                      alt="icon"
                      className="d-block w-100"
                    />
                    {updateLoopIndex()}
                  </div>
                  {logos[loopIndex]?.image.img && (
                    <div className="col-md-6">
                      <img
                        src={`data:image/png;base64,${logos[loopIndex]?.image.img}`}
                        alt="icon"
                        className="d-block w-100"
                      />
                      {updateLoopIndex()}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* {fakeArray.map((array, i) => (
              <div
                key={i}
                className={`carousel-item ${loopIndex === 1 ? 'active' : ''}`}
              >
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img src={one} className="d-block w-100" alt="..." />
                    {(loopIndex += 1)}
                  </div>
                  <div className="col-md-6">
                    <img src={two} className="d-block w-100" alt="..." />
                    {(loopIndex += 1)}
                  </div>
                </div>
              </div>
            ))} */}

            {/* <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={one} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <img src={two} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={three} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <img src={four} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={five} className="d-block w-100" alt="..." />
                </div>
                <div className="col-md-6">
                  <img src={six} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div> */}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls2"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls2"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurClients;

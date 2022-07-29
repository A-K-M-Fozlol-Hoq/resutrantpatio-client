import React, { useEffect, useState } from 'react';
import './Service.css';
const Services = () => {
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState('loading');
  const updateLogosState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/service/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus('loaded');
        setServices(data);
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
        <div className="service-wrapper">
          <div className="container" id="backpack">
            <div className="card-group">
              {services.map((service) => (
                <div key={service._id} className="card">
                  <img
                    src={`data:image/png;base64,${service.image.img}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;

import React, { useEffect, useState } from 'react';
import './About.css';
import profile from './images/profile.png';
import two from './images/two.jpg';
const About = () => {
  const [founderData, setFounderData] = useState({});
  const [coFounderData, setCoFounderData] = useState({});
  const updateFOunderState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/founder/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setFounderData(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const updateCoFOunderState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/coFounder/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setCoFounderData(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // useEffect(() => {
  //   updateFOunderState();
  //   updateCoFOunderState();
  // }, []);
  return (
    <div className="about-us-wrapper">
      <div style={{ padding: '50px' }}>
        <h1
          className="text-center"
          style={{ paddingTop: '20px', marginBottom: '-60px' }}
        >
          ABOUT US
        </h1>
        <h2 style={{ textAlign: 'center', marginTop: '80px' }}>
          We’re <span style={{ color: '#d61654' }}>therestaurantpatio</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontWeight: '300',
            lineHeight: '25px',
            marginBottom: '25px',
          }}
        >
          We make the property rental journey simple for Landlords, Tenants and
          Vendors, by providing the <br />
          necessary tools and knowledge for them to complete the rental cycle
          seamlessly and efficiently.
        </p>
      </div>
      <div
        className="about-us"
        style={{
          background: 'linear-gradient(90deg, #286A2D, #6EAD40)',
          paddingBottom: '50px',
        }}
      >
        <h2
          style={{
            letterSpacing: '2px',
            textAlign: 'center',
            marginBottom: '-20px',
            paddingTop: '50px',
            color: 'white',
          }}
        >
          Meet Our <span style={{ color: '#d61654' }}>Founder</span>
        </h2>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '30px auto 50px',
          }}
        ></div>
        <div className="container text-white" style={{ marginTop: '80px' }}>
          <div className="row">
            <div className="col-md-6 text-center">
              {founderData?.image ? (
                <img
                  className="profile-image"
                  src={`data:image/png;base64,${founderData.image?.img}`}
                  alt="profile"
                />
              ) : (
                <img
                  className="profile-image"
                  src={`https://portfolio-fozlol.web.app/static/media/profile-color2.48aeabcd.png`}
                  alt="profile"
                />
              )}
              <h3>{founderData?.name || `A.K.M Fozlol Hoq`}</h3>
              <p>founder, therestaurantpatio</p>
            </div>
            <div className="col-md-6" style={{ paddingTop: '5rem' }}>
              <p className="text-white">
                {founderData?.description ||
                  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae iusto, ut optio pariatur labore nemo placeat libero! Iure architecto ratione nemo dolor corporis quaerat recusandae tempore incidunt itaque pariatur libero expedita suscipit laborum est dignissimos id ullam iste, labore inventore sapiente, totam sequi, repellendus optio! Dolore repudiandae nisi perferendis consequuntur autem enim culpa dicta at, dolores assumenda corrupti vero? A suscipit asperiores earum quibusdam deserunt esse voluptatum incidunt perferendis magni nobis? Illo explicabo quasi exercitationem sapiente expedita ab quisquam magni deleniti in accusantium dolorem, nam totam odit omnis eligendi et cum neque beatae. Eos harum quibusdam cumque, pariatur enim velit.`}
              </p>
            </div>
          </div>
          {/* <div className="row mt-5">
            <div className="col-md-6 mt-5">
              <p className="text-white">{coFounderData.description}</p>
            </div>
            <div className="col-md-6 text-center">
              <img
                className="profile-image"
                src={`data:image/png;base64,${coFounderData.image?.img}`}
                alt="profile"
              />
              <h3>{coFounderData.name}</h3>
              <p>Co Founder, therestaurantpatio</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

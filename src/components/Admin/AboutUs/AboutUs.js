import React, { useState } from 'react';

const AboutUs = () => {
  const [founderProfile, setFounderProfile] = useState();
  const [founderBio, setFounderBio] = useState('');
  const [founderName, setFounderName] = useState('');
  const [coFounderProfile, setCoFounderProfile] = useState();
  const [coFounderBio, setCoFounderBio] = useState();
  const [coFounderName, setCoFounderName] = useState();
  const updateFounder = () => {
    if (founderProfile && founderBio && founderName) {
      const formData = new FormData();
      formData.append('image', founderProfile);
      formData.append('description', founderBio);
      formData.append('name', founderName);
      fetch('https://glacial-inlet-84709.herokuapp.com/founder/updateFounder', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert('Founder updated successfully');
            // updateAdminState();
          }
        })
        .catch((error) => {
          console.error(error);

          alert("Failed to update. Please don't provide large file");
        });
    } else {
      alert('Please enter all data');
    }
  };
  const updateCoFounder = () => {
    if (coFounderProfile && coFounderBio && coFounderName) {
      const formData = new FormData();
      formData.append('image', coFounderProfile);
      formData.append('description', coFounderBio);
      formData.append('name', coFounderName);
      fetch(
        'https://glacial-inlet-84709.herokuapp.com/coFounder/updateCoFounder',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert('Co Founder updated successfully');
            // updateAdminState();
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to update. Please don't provide large file");
        });
    } else {
      alert('Please enter all data');
    }
  };
  return (
    <div style={{ width: '250px', margin: '40px auto ' }}>
      <input
        onChange={(e) => setFounderProfile(e.target.files[0])}
        type="file"
        name=""
        id=""
        className="form-control"
      />
      <input
        onChange={(e) => setFounderName(e.target.value)}
        type="text"
        name=""
        className="form-control mt-2 "
        placeholder="enter founder name"
        id=""
      />
      <textarea
        className="form-control mt-2 mb-2"
        name=""
        id=""
        cols="10"
        placeholder="Enter Founder bio"
        rows="2"
        onChange={(e) => setFounderBio(e.target.value)}
      ></textarea>
      <div className="btn btn-primary mb-5" onClick={updateFounder}>
        Update Founder
      </div>

      {/* <input
        onChange={(e) => setCoFounderProfile(e.target.files[0])}
        type="file"
        name=""
        id=""
        className="form-control"
      /> */}
      {/* setCoFounderName */}
      {/* <input
        onChange={(e) => setCoFounderName(e.target.value)}
        type="text"
        name=""
        className="form-control mt-2 "
        placeholder="enter co founder name"
        id=""
      />
      <textarea
        className="form-control mt-2 mb-2"
        name=""
        id=""
        cols="10"
        placeholder="Enter Co Founder bio"
        rows="2"
        onChange={(e) => setCoFounderBio(e.target.value)}
      ></textarea>
      <div className="btn btn-primary" onClick={updateCoFounder}>
        Update Co Founder
      </div> */}
    </div>
  );
};

export default AboutUs;

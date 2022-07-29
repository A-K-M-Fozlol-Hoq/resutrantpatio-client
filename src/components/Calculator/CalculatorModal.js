import React, { useState } from 'react';

const CalculatorModal = ({ selectedProduct }) => {
  const [email, setEmail] = useState('');
  const sendEmail = () => {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    let isFieldValid = validateEmail(email);
    if (isFieldValid) {
      const formData = new FormData();
      formData.append('sendTo', email);
      formData.append('_id', selectedProduct._id);
      fetch('https://glacial-inlet-84709.herokuapp.com/email/send', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.accepted.length > 0) {
            alert('email sent successfully');
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Please enter valid email');
    }
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Enter Email or Phone Number
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              type="text"
              name=""
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              id=""
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={sendEmail}
            >
              GET PRICE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;

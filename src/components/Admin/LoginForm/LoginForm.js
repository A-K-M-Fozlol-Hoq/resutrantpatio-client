import React, { useState } from 'react';

const LoginForm = ({ setIsLoggedIn, setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      fetch('https://glacial-inlet-84709.herokuapp.com/admin/login', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // alert('Service created successfully');
            // updateLogosState();
            setIsLoggedIn(true);
            setLoggedInUser(data.userObject);
            sessionStorage.setItem('email', data.userObject.email);
            sessionStorage.setItem('hash', data.userObject.password);
          } else {
            alert('Please enter valid username and password');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('Please enter valid username and password');
        });
    } else {
      alert('Email and password is required');
    }
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-2"
          onClick={(e) => handleLogin(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

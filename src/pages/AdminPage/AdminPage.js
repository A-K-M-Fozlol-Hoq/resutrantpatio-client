import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/Admin/LoginForm/LoginForm';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import './AdminPage.css';
import Admin from '../../components/Admin/Admin/Admin';
const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('loading');
  const [loggedInUser, setLoggedInUser] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('hash')) {
      const formData = new FormData();
      formData.append('email', sessionStorage.getItem('email'));
      formData.append('password', sessionStorage.getItem('hash'));
      // fetch('https://therestaurantpatio.com:4172admin/isValid', {
      fetch('https://glacial-inlet-84709.herokuapp.com/admin/isValid', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setStatus('loaded');
          if (data) {
            setIsLoggedIn(true);
          } else {
            // sessionStorage.clear();
          }
        })
        .catch((error) => {
          setStatus('loaded');
          console.error(error);
        });
    } else {
      setStatus('loaded');
    }
  }, []);
  return (
    <div className="admin-page-wrapper">
      <NavBar isLoggedIn={isLoggedIn} showLoginLogout={true}></NavBar>
      <div>
        {status === 'loading' && (
          <>
            <div
              className="spinner-border text-success"
              style={{ marginLeft: '48%', marginTop: '50px' }}
              role="status"
            >
              <span className="sr-only"></span>
            </div>
          </>
        )}
      </div>
      <div>
        {status === 'loaded' && (
          <>
            {isLoggedIn ? (
              <Admin></Admin>
            ) : (
              <div className="login-form py-5 mx-auto">
                <LoginForm
                  setLoggedInUser={setLoggedInUser}
                  setIsLoggedIn={setIsLoggedIn}
                ></LoginForm>
              </div>
            )}
          </>
        )}
      </div>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AdminPage;

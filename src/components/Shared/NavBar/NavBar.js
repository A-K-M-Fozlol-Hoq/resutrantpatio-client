import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.png';
import './NavBar.css';
const NavBar = (props) => {
  const history = useHistory();
  return (
    <div className="nav-wrapper">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        // style={{ background: '#fff' }}
        style={{ background: '#286A2D' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="d-block main-logo w-100" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="/home">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/calculator">
                  GET QUOTATION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/contact-us">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/blogs">
                  BLOGS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2"
                  href="/#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                  style={{
                    marginLeft: '-60px',
                  }}
                >
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/patio-heating')}
                      style={{ cursor: 'pointer' }}
                    >
                      PATIO HEATING
                    </p>
                  </li>
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/motorized-shades')}
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      MOTORIZED SHADES
                    </p>
                  </li>
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/outdoor-lighting')}
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      OUTDOOR LIGHTING
                    </p>
                  </li>
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() => history.push('/services/audio-and-video')}
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      AUDIO AND VIDEO
                    </p>
                  </li>
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() =>
                        history.push('/services/outdoor-furniture')
                      }
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      OUTDOOR FURNITURE
                    </p>
                  </li>
                  <li>
                    <p
                      className="dropdown-item"
                      onClick={() =>
                        history.push('/services/restaurant-patio-design')
                      }
                      style={{ cursor: 'pointer', marginTop: '-10px' }}
                    >
                      RESTAURANT PATIO DESIGN
                    </p>
                  </li>
                </ul>
              </li>
              {props.showLoginLogout && props.isLoggedIn && (
                <li
                  className="nav-item"
                  onClick={() => {
                    sessionStorage.clear();
                    window.location.reload();
                  }}
                >
                  <button className="btn btn-primary">Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

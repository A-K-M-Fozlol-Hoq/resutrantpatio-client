import React from 'react';
import './SelectOption.css';
const SelectOption = (props) => {
  const { setShowCompo } = props;
  return (
    <div className="select-option-wrapper">
      <div className="select-menu">
        <button
          onClick={() => {
            setShowCompo('slider');
            sessionStorage.setItem('showAdminCompo', 'slider');
          }}
        >
          Slider
        </button>
        <button
          onClick={() => {
            setShowCompo('services');
            sessionStorage.setItem('showAdminCompo', 'services');
          }}
        >
          Services
        </button>
        <button
          onClick={() => {
            setShowCompo('clients');
            sessionStorage.setItem('showAdminCompo', 'clients');
          }}
        >
          Clients
        </button>
        <button
          onClick={() => {
            setShowCompo('products');
            sessionStorage.setItem('showAdminCompo', 'products');
          }}
        >
          Products
        </button>
        <button
          onClick={() => {
            setShowCompo('admins');
            sessionStorage.setItem('showAdminCompo', 'admins');
          }}
        >
          Admins
        </button>
        <button
          onClick={() => {
            setShowCompo('inbox');
            sessionStorage.setItem('showAdminCompo', 'inbox');
          }}
        >
          Inbox
        </button>
        <button
          onClick={() => {
            setShowCompo('aboutUs');
            sessionStorage.setItem('showAdminCompo', 'aboutUs');
          }}
        >
          ABOUT US
        </button>
        <button
          onClick={() => {
            setShowCompo('pages');
            sessionStorage.setItem('showAdminCompo', 'pages');
          }}
        >
          PAGES
        </button>
      </div>
    </div>
  );
};

export default SelectOption;

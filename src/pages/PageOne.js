import React from 'react';
import NavBar from '../components/Shared/NavBar/NavBar';
import Footer from '../components/Shared/Footer/Footer';
const PageOne = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="p-5 text-center">Page one</h1>
      <Footer></Footer>
    </div>
  );
};

export default PageOne;

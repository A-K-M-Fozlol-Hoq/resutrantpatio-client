import React from 'react';
import Helmet from 'react-helmet';
import Calculator from '../../components/Calculator/Calculator';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';

const CalculatorPage = () => {
  return (
    <div>
      <Helmet>
        <title>RestaurantPatio- price</title>
        <meta
          name="description"
          content="Restaurant Patio Design Services for an Enchanting Outdoor Dining Experience"
        />
        <meta
          name="keywords"
          content="Restaurant Patio Design, Restaurant Patio Awnings, Motorized Shades for Restaurants, Audio and Video System for Restaurants"
        />
      </Helmet>
      <NavBar></NavBar>
      <Calculator></Calculator>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default CalculatorPage;

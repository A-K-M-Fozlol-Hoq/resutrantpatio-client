import React from 'react';
import NavBar from '../../components/Shared/NavBar/NavBar';
import Footer from '../../components/Shared/Footer/Footer';
import About from '../../components/About/About';
import Helmet from 'react-helmet';
const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>RestaurantPatio- About</title>
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
      <About></About>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AboutPage;

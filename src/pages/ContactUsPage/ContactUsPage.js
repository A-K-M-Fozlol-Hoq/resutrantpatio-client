import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import ContactUs from '../../components/ContactUs/ContactUs';
import Helmet from 'react-helmet';

const ContactUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>RestaurantPatio- Contact Us</title>
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
      <ContactUs></ContactUs>
      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default ContactUsPage;

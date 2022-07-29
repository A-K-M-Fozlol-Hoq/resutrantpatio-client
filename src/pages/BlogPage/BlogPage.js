import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import NavBar from '../../components/Shared/NavBar/NavBar';
import Footer from '../../components/Shared/Footer/Footer';

const BlogPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;

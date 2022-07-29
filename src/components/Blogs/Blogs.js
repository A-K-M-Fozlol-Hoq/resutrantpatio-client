/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import './Blogs.css';
import { useHistory } from 'react-router-dom';

const Blogs = () => {
  const [pages, setPages] = useState([]);
  const [status, setStatus] = useState('loading');
  const history = useHistory();
  const updatePagesState = () => {
    fetch(`https://glacial-inlet-84709.herokuapp.com/page/getAll`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setPages(data);
        setStatus('loaded');
      })
      .catch((error) => {
        console.error(error);
        setStatus('loaded');
      });
  };
  useEffect(() => {
    updatePagesState();
  }, []);
  const goToPage = (slug) => {
    history.push(`/blogs/${slug}`);
  };
  return (
    <>
      {status === 'loading' ? (
        <>
          <div
            className="spinner-border text-success"
            style={{
              marginLeft: '48%',
              marginTop: '50px',
              marginBottom: '50px',
            }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </>
      ) : (
        <div className="blog-wrapper">
          <div className="container" id="backpack">
            <div className="card-group">
              {pages.map((page) => (
                <div
                  onClick={() => {
                    goToPage(page.slug);
                  }}
                  key={page._id}
                  className="card"
                >
                  <img
                    src={`data:image/png;base64,${page.image.img}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{page.title}</h5>
                    {/* <p className="card-text">{page.article}</p> */}
                    <p className="card-text">
                      {page.article.length > 120
                        ? `${page.article.slice(0, 120)}...`
                        : `${page.article}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
    // <div>
    //   <div className="all-pages">
    //     {pages.map((page) => (
    //       <div className="single-product" key={page._id}>
    //         <img src={`data:image/png;base64,${page.image.img}`} alt="icon" />
    //         <button
    //           className="btn btn-primary"
    //           style={{ margin: '-70px 0 0 40px' }}
    //           onClick={() => {
    //             goToService(page.slug);
    //           }}
    //         >
    //           See Article
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Blogs;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import GoToButton from '../../components/utils/GoToButton/GoToButton';
import NotFound from '../NotFound/NotFound';
const Blogs = () => {
  const { slug } = useParams();
  const [page, setPage] = useState({});
  const [status, setStatus] = useState('loading');
  useEffect(() => {
    fetch(
      `https://glacial-inlet-84709.herokuapp.com/page/getPageBySlug/${slug}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          setPage(data[0]);
          console.log(data[0], page);
        }
        setStatus('loaded');
      })
      .catch((error) => {
        console.error(error);
        setStatus('loaded');
      });
  }, []);
  return (
    <>
      <div>
        {status === 'loading' && (
          <>
            <NavBar></NavBar>
            {/* <h1 className="text-center m-5">Loading ...</h1> */}
            <div
              className="spinner-border text-success"
              style={{ marginLeft: '48%', marginTop: '50px' }}
              role="status"
            >
              <span className="sr-only"></span>
            </div>
            <Footer></Footer>
          </>
        )}
      </div>
      <div>
        {status === 'loaded' && (
          <>
            {page.title ? (
              <div>
                <NavBar></NavBar>
                <div className="p-5">
                  <div className="container">
                    <header>
                      <h1 className="text-center">{page.title}</h1>
                      <div
                        style={{
                          height: '5px',
                          width: '150px',
                          borderRadius: '5px',
                          margin: '0 auto 0',
                          background: 'green',
                        }}
                      ></div>
                      <img
                        className="my-5"
                        style={{ width: '100%', borderRadius: '20px' }}
                        src={`data:image/png;base64,${page?.image?.img}`}
                        alt="icon"
                      />
                    </header>
                    <article>{page.article}</article>
                  </div>
                  <GoToButton></GoToButton>
                </div>
                <Footer></Footer>
              </div>
            ) : (
              <NotFound></NotFound>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;

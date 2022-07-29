import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
const Pages = () => {
  const history = useHistory();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [slug, setSlug] = useState('');
  const [pages, setPages] = useState([]);
  const updatePagesState = () => {
    fetch(`https://glacial-inlet-84709.herokuapp.com/page/getAll`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setPages(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updatePagesState();
  }, []);
  const handleSubmit = () => {
    if (title && slug && article && image) {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);
      formData.append('article', article);
      formData.append('slug', slug);
      fetch('https://glacial-inlet-84709.herokuapp.com/page/add', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data._id) {
            alert('New page created successfully');
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error(error);
          alert(
            "Failed to create page. Please enter unique slug and don't provide large file"
          );
        });
    } else {
      alert('Please enter a page title,  slug, description and input file');
    }
  };
  const handleClick = (page) => {
    fetch(
      `https://glacial-inlet-84709.herokuapp.com/page/deleteById/${page._id}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Page was removed successfully!') {
          alert('Page removed successfully');
          updatePagesState();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove Slide! Please try again');
        window.location.reload();
      });
  };

  const goToService = (slug) => {
    history.push(`/blogs/${slug}`);
  };
  return (
    <div className="product-wrapper">
      <h2 className="text-center mt-3">Added Pages</h2>
      <div
        style={{
          backgroundColor: '#6EAD40',
          height: '5px',
          width: '150px',
          borderRadius: '5px',
          margin: '0 auto 50px',
        }}
      ></div>
      <div className="all-products">
        {pages.map((page) => (
          <div className="single-product" key={page._id}>
            <img src={`data:image/png;base64,${page.image.img}`} alt="icon" />
            <button
              className="btn btn-primary"
              style={{ margin: '-70px 0 0 40px' }}
              onClick={() => {
                goToService(page.slug);
              }}
            >
              See Article
            </button>
            <div
              onClick={() => {
                handleClick(page);
              }}
              className="delete-icon"
            >
              <AiFillDelete />
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '210px', margin: '20px auto 0' }}>
        {/* Enter a new client: <br /> */}
        <h4 className="text-center mt-5">Add a new Page</h4>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '0 auto 20px',
          }}
        ></div>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name=""
          id=""
          className="form-control"
        />
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 mb-2"
          placeholder="enter page title"
          id=""
        />
        <input
          onChange={(e) => setSlug(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 mb-2"
          placeholder="enter page slug"
          id=""
        />
        <textarea
          className="form-control mt-2 mb-2"
          name=""
          id=""
          cols="10"
          placeholder="Enter page description"
          rows="2"
          onChange={(e) => setArticle(e.target.value)}
        ></textarea>
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Add Page
        </div>
      </div>
    </div>
  );
};

export default Pages;

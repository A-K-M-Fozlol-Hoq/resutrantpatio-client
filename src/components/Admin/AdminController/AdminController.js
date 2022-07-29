import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './adminController.css';
const AdminController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admins, setAdmins] = useState([]);
  const updateAdminState = () => {
    fetch('https://glacial-inlet-84709.herokuapp.com/admin/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setAdmins(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateAdminState();
  }, []);
  const handleSubmit = () => {
    if (email && password) {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      fetch('https://glacial-inlet-84709.herokuapp.com/admin/add', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data._id) {
            alert('Admin created successfully');
            updateAdminState();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Please enter all data');
    }
  };
  const handleClick = (admin) => {
    fetch(
      `https://glacial-inlet-84709.herokuapp.com/admin/deleteById/${admin._id}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Admin was removed successfully!') {
          alert('Admin removed successfully');
          updateAdminState();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove client! Please try again');
        window.location.reload();
      });
  };

  return (
    <div className="admin-controller-wrapper">
      <h2 className="text-center mt-3">Added admins</h2>
      <div
        style={{
          backgroundColor: '#6EAD40',
          height: '5px',
          width: '150px',
          borderRadius: '5px',
          margin: '0 auto 50px',
        }}
      ></div>
      <div className="all-admins">
        {admins.map((admin) => (
          <div className="single-admin" key={admin._id}>
            <p className="p">{admin.email}</p>
            <div
              onClick={() => {
                handleClick(admin);
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
        <h4 className="text-center mt-5">Add a new Admin</h4>
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
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 "
          placeholder="enter admin email"
          id=""
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 "
          placeholder="enter admin password"
          id=""
        />
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Add Service
        </div>
      </div>
    </div>
  );
};

// export default Services;

export default AdminController;

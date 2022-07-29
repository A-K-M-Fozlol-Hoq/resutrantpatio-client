import React, { useState } from 'react';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGoogleCircle,
} from 'react-icons/ai';
import './ContactUs.css';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitValid, setIsSubmitValid] = useState(true);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  // const handleUnwantedSubmittion = () => {
  //   setIsSubmitValid(false);
  //   setTimeout(() => {
  //     setIsSubmitValid(true);
  //   }, 30000);
  // };

  const submitForm = () => {
    // handleUnwantedSubmittion();
    if (name && email && details) {
      let isEmailValid = validateEmail(email);
      if (isEmailValid) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('details', details);
        fetch('https://glacial-inlet-84709.herokuapp.com/contactUs/add', {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data._id) {
              alert('Your form is submitted successfully');
              window.location.replace('/');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert('Please enter a valid email');
      }
    } else {
      alert('Please enter all data');
    }
  };
  return (
    <div className="contact-us-wrapper">
      <div style={{ padding: '50px' }}>
        <h1
          className="text-center"
          style={{ paddingTop: '20px', marginBottom: '-60px' }}
        >
          GET IN TOUCH
        </h1>
        <h2 style={{ textAlign: 'center', marginTop: '80px' }}>
          We’re <span style={{ color: '#d61654' }}>therestaurantpatio</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontWeight: '300',
            lineHeight: '25px',
            marginBottom: '25px',
          }}
        >
          We make the property rental journey simple for Landlords, Tenants and
          Vendors, by providing the <br />
          necessary tools and knowledge for them to complete the rental cycle
          seamlessly and efficiently.
        </p>
      </div>
      <div className="form">
        <form action="">
          <h1 className="text-center">Contact Us</h1>
          <div
            style={{
              backgroundColor: '#6EAD40',
              height: '5px',
              width: '150px',
              borderRadius: '5px',
              margin: '0 auto 50px',
            }}
          ></div>
          <div
            style={{
              height: '5px',
              width: '100%',
              borderRadius: '5px',
              backgroundColor: '000',
              margin: '0 auto 0',
            }}
          ></div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
          <p>Email</p>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <p>Details</p>
          <input
            type="text"
            name="textarea"
            id="details"
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter your project details"
          />
          {isSubmitValid ? (
            <div
              style={{
                background: '#fff',
                color: '#000',
                padding: '5px 10px',
                width: '150px',
                textAlign: 'center',
                cursor: 'pointer',
                marginTop: '30px',
              }}
              id="submit"
              className="submit-form"
              onClick={submitForm}
            >
              SEND MESSAGE
            </div>
          ) : (
            <button
              style={{
                background: '#fff',
                color: '#000',
                padding: '5px 10px',
                width: '150px',
                textAlign: 'center',
                cursor: 'not-allowed',
                marginTop: '30px',
              }}
              disabled={true}
            >
              SEND MESSAGE
            </button>
          )}

          <div
            className="font-awesome-icons"
            style={{
              width: '100px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gridGap: '10px',
              marginTop: '30px',
            }}
          >
            <span className="icon">
              <AiFillFacebook />
            </span>
            <span className="icon">
              <AiFillTwitterCircle />
            </span>
            <span className="icon">
              <AiFillInstagram />
            </span>
            <span className="icon">
              <AiFillGoogleCircle />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

// import React, { useState } from 'react';
// import {
//   AiFillFacebook,
//   AiFillTwitterCircle,
//   AiFillInstagram,
//   AiFillGoogleCircle,
// } from 'react-icons/ai';
// import './ContactUs.css';
// import ReCAPTCHA from 'react-google-recaptcha';
// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [details, setDetails] = useState('');
//   const recaptchaRef = React.createRef();
//   const [isRobot, setIsRobot] = useState('');
//   const onSubmit = () => {
//     const recaptchaValue = recaptchaRef.current.getValue();
//     setIsRobot(recaptchaValue);
//     this.props.onSubmit(recaptchaValue);
//   };
//   const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

//   const submitForm = () => {
//     if (name && email && details && !isRobot) {
//       let isEmailValid = validateEmail(email);
//       if (isEmailValid) {
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('details', details);
//         fetch('https://therestaurantpatio.com:4172contactUs/add', {
//           method: 'POST',
//           body: formData,
//         })
//           .then((response) => response.json())
//           .then((data) => {
//
//             if (data._id) {
//               alert('Your form is submitted successfully');
//               window.location.replace('/');
//             }
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       } else {
//         alert('Please enter a valid email');
//       }
//     } else {
//       alert('Please enter all data');
//     }
//   };
//   return (
//     <div className="contact-us-wrapper">
//       <div style={{ padding: '50px' }}>
//         <h1
//           className="text-center"
//           style={{ paddingTop: '20px', marginBottom: '-60px' }}
//         >
//           GET IN TOUCH
//         </h1>
//         <h2 style={{ textAlign: 'center', marginTop: '80px' }}>
//           We’re <span style={{ color: '#d61654' }}>therestaurantpatio</span>
//         </h2>
//         <p
//           style={{
//             textAlign: 'center',
//             fontWeight: '300',
//             lineHeight: '25px',
//             marginBottom: '25px',
//           }}
//         >
//           We make the property rental journey simple for Landlords, Tenants and
//           Vendors, by providing the <br />
//           necessary tools and knowledge for them to complete the rental cycle
//           seamlessly and efficiently.
//         </p>
//       </div>
//       <div className="form">
//         <form action="">
//           <h1 className="text-center">Contact Us</h1>
//           <div
//             style={{
//               backgroundColor: '#6EAD40',
//               height: '5px',
//               width: '150px',
//               borderRadius: '5px',
//               margin: '0 auto 50px',
//             }}
//           ></div>
//           <div
//             style={{
//               height: '5px',
//               width: '100%',
//               borderRadius: '5px',
//               backgroundColor: '000',
//               margin: '0 auto 0',
//             }}
//           ></div>
//           <p>Name</p>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your full name"
//           />
//           <p>Email</p>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//           <p>Details</p>
//           <input
//             type="text"
//             name="textarea"
//             id="details"
//             onChange={(e) => setDetails(e.target.value)}
//             placeholder="Enter your project details"
//           />
//           <ReCAPTCHA
//             ref={recaptchaRef}
//             sitekey="6Lfh5uIeAAAAAMcatoInunMWYV2xUEMr1MZCPOUn"
//             onChange={onSubmit}
//           />
//           <div
//             style={{
//               background: '#fff',
//               color: '#000',
//               padding: '5px 10px',
//               width: '150px',
//               textAlign: 'center',
//               cursor: 'pointer',
//               marginTop: '30px',
//             }}
//             id="submit"
//             className="submit-form"
//             onClick={submitForm}
//           >
//             SEND MESSAGE
//           </div>
//           <div
//             className="font-awesome-icons"
//             style={{
//               width: '100px',
//               display: 'grid',
//               gridTemplateColumns: 'repeat(4,1fr)',
//               gridGap: '10px',
//               marginTop: '30px',
//             }}
//           >
//             <span className="icon">
//               <AiFillFacebook />
//             </span>
//             <span className="icon">
//               <AiFillTwitterCircle />
//             </span>
//             <span className="icon">
//               <AiFillInstagram />
//             </span>
//             <span className="icon">
//               <AiFillGoogleCircle />
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

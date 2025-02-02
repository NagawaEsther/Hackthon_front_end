// import React, { useState } from "react";
// import axios from "axios";
// import "./contact_inquiry.css";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       console.log("Submitting inquiry:", formData); // Debugging output
//       const response = await axios.post(
//         "http://localhost:5000/api/v1/contact-inquiry/create",
//         formData
//       );

//       console.log("Inquiry submitted:", response.data);
//       alert("Inquiry submitted successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Inquiry failed:", error.response ? error.response.data : error.message);
//       alert("Inquiry failed: Please check your details and try again.");
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       {/* Header Section */}
//       <div className="header-section">
//         <h1>Contact Us</h1>
//         <p>Any questions or remarks? Just write us a message!</p>
//       </div>

//       <div className="content-section">
//         {/* Left Column: Office Details and Image */}
//         <div className="office-details">
//           <img
//             src="https://pbs.twimg.com/media/Ga0M-33bwAAMWb2?format=jpg&name=4096x4096"
//             alt="Office Team"
//             className="office-image"
//           />
//           <div className="locations">
//             <div>
//               <h4>
//                 <i className="fas fa-map-marker-alt"></i>
//               </h4>
//               <p>Java House, Sixth Street, Kampala, Acacia Place Level 4</p>
//             </div>
//             <div>
//               <h4>
//                 <i className="fas fa-phone-alt"></i>
//               </h4>
//               <p>0708094298</p>
//             </div>
//             <div>
//               <h4>
//                 <i className="fas fa-envelope"></i>
//               </h4>
//               <p>community@africa'stalking.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Form */}
//         <div className="contact-form">
//           <h2>Get in Touch</h2>
//           <p>
//             Have an inquiry or some feedback for us? Fill out the form below to
//             contact our team.
//           </p>
//           <form onSubmit={handleFormSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter a valid email address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Enter your subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="How can we help?"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//             <button type="submit">SUBMIT</button>
//           </form>
//         </div>
//       </div>
//     </div>
    
//   );

  
// };

// export default ContactUs;

import React, { useState } from "react";
import axios from "axios";
import "./contact_inquiry.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submitting inquiry:", formData); // Debugging output
      const response = await axios.post(
        "http://localhost:5000/api/v1/contact-inquiry/create",
        formData
      );

      console.log("Inquiry submitted:", response.data);
      alert("Inquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Inquiry failed:", error.response ? error.response.data : error.message);
      alert("Inquiry failed: Please check your details and try again.");
    }
  };

  return (
    <div className="contact-us-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>

      <div className="content-section">
        {/* Left Column: Office Details and Image */}
        <div className="office-details">
          <img
            src="https://pbs.twimg.com/media/Ga0M-33bwAAMWb2?format=jpg&name=4096x4096"
            alt="Office Team"
            className="office-image"
          />
          <div className="locations">
            <div>
              <h4>
                <i className="fas fa-map-marker-alt"></i>
              </h4>
              <p>Java House, Sixth Street, Kampala, Acacia Place Level 4</p>
            </div>
            <div>
              <h4>
                <i className="fas fa-phone-alt"></i>
              </h4>
              <p>0708094298</p>
            </div>
            <div>
              <h4>
                <i className="fas fa-envelope"></i>
              </h4>
              <p>community@africa'stalking.com</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p>
            Have an inquiry or some feedback for us? Fill out the form below to
            contact our team.
          </p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

     
      <div className="map-section">
        <h2>Get Directions</h2>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7494585427276!2d32.58494940773231!3d0.33662849965865643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbba6a3b570c7%3A0xf292f51f1d7be494!2sJava%20House!5e0!3m2!1sen!2sug!4v1732185775212!5m2!1sen!2sug"
            width="1350"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

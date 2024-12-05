import React, { useState } from 'react';
import './Contact.css';
import EmailIcon from '../../assets/EmailIcon.png';  
import PhoneIcon from '../../assets/PhoneIcon.png';  
import LocationIcon from '../../assets/LocationIcon.png'; 
import LinkedIn from '../../assets/LinkedIn.png'; 
import Naukri from '../../assets/Naukri.png';
import Indeed from '../../assets/Indeed.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage(''); // Clear success message on re-submission

    if (!validate()) return;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "bb19b71e-5d21-4d97-84c7-79c715a2d72f",
      }),
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else {
      setSuccessMessage('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm always open to collaborating on exciting projects and exploring new opportunities.
            If you have a development-related query, a potential project in mind, or
            simply want to discuss technology trends, feel free to reach out. Let’s connect and build something great together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={EmailIcon} alt="Email Icon" /> <p>kannakiperumal15@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={PhoneIcon} alt="Phone Icon" /> <p>+91 6381566157</p>
            </div>
            <div className="contact-detail">
              <img src={LocationIcon} alt="Location Icon" /> <p>Thanjavur, Tamil Nadu</p>
            </div>
          </div>

          {/* <div className="contact-icons">
            <div className="contact-icon">
              <img src={LinkedIn} alt="Icon 1" />
            </div>
            <div className="contact-icon">
              <img src={Naukri} alt="Icon 2" />
            </div>
            <div className="contact-icon">
              <img src={Indeed} alt="Icon 3" />
            </div>
          </div> */}
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          {successMessage && <p className="success-message">{successMessage}</p>}

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="message">Write Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

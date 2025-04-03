import React, { useState } from "react";
import './contact.css'
import { FaWhatsapp } from "react-icons/fa"; 
import Footer from '../Footer/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    package: ""
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, location, package: packageDest } = formData;

    if (!name || !email || !mobile || !location || !packageDest) {
      alert("Please fill all the fields.");
      return;
    }

    const message = `*Enquiry Details:*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Mobile: ${mobile}\n📍 Location: ${location}\n🗺️ Package Destination: ${packageDest}`;
    const whatsappURL = `https://wa.me/918072333966?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank"); 
  };

  return (
    <div>
     
    <div className="contact-container">
      <h1 className="contact-title">Enquiry Now</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Name : </h4>
        <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
        <h4>E-mail :</h4>
        <input type="email" name="email" placeholder="Enter Your Email ID" value={formData.email} onChange={handleChange} required />
        <h4>Mobile Number :</h4>
        <input type="tel" name="mobile" placeholder="Enter Your Mobile Number" value={formData.mobile} onChange={handleChange} required />
        <h4>Your Location :</h4>
        <input type="text" name="location" placeholder="Enter Your Location" value={formData.location} onChange={handleChange} required />
        <h4>Your Destination : </h4>
        <input type="text" name="package" placeholder="Enter Package Destination" value={formData.package} onChange={handleChange} required />

        
        <button type="submit" className="submit-btn">
          Submit Enquiry <FaWhatsapp className="whatsapp-icon" />
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;

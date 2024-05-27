import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import img1 from "../../../src/Assets/ContactUs/Visiting Card-01.jpg";
import img2 from "../../../src/Assets/ContactUs/Visiting Card-02.jpg";
import "./ContactUs.css"; // Ensure this file exists to style the component

const ContactUs = () => {
  const images = [img1, img2];

  return (
    <>
      <Navbar />
      <div className="imageContainer">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt="img"
            className="fullWidthImage"
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

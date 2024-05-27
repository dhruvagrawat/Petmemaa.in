import React from "react";
import "./ContactUs";
import img1 from "../../../src/Assets/ContactUs/Visiting Card-01.jpg";
import img2 from "../../../src/Assets/ContactUs/Visiting Card-02.jpg";

const ContactUs = () => {
  const images = [
    img1, img2
  ];

  return (
    <div  className="imageContainer">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt="img"
          className="fullWidthImage"
        />
      ))}
    </div>
  );
};

export default ContactUs;

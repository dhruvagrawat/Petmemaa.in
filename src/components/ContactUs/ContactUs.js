import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import emailjs from "emailjs-com";
import img from "../../Assets/contactus/dogimg.png";
import "./ContactUs.css";
import vector from "../../Assets/Feedback/Vector.webp";
import vector2 from "../../Assets/Feedback/Vector2.webp";

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
    };

    // Send email using EmailJS
    emailjs.send("service_b9j5yqt", "template_d20lvqa", templateParams, "CLFW3seFq9MBl4_Rc")
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSent(true); // Update state to display success message
        // Clear form fields after successful submission
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="topmost">
        <div className="first">
          <div className="innerfirst">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you! Whether you ahve questions about our service or want to book an appointment</p>
            <button className="firstbtn">Book an appointment</button>
          </div>
          <div className="innerimgfirst">
            <img className="imagedog" src={img} alt="dog" />
          </div>
        </div>
        <div>
          <h2 className="head2">Didn t find what you needed? Let us know!</h2>
          <div className="contactbox">
            <div className="contactside">
              <h1>Write to us!</h1>
              <p>We're always striving to improve our services to better meet the needs of our furry customers and their owners. If you have any feedback, suggestions, or comments, we'd love to hear from you.
                <br></br>
                Your input helps us continue to provide top-notch care and create a welcoming environment for all pets.</p>
            </div>
            <div>
              <div className="contactFormContainer">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit} className="contactForm">
                  <input type="text" name="name" placeholder="Pet Parent's Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="tel" name="phone" placeholder="Phone" required />
                  <textarea name="message" placeholder="Message" required></textarea>
                  <button type="submit">Send</button>
                </form>
                {sent && <p className="successMessage">Your message has been sent successfully!</p>}
              </div>
            </div>
          </div>
          <div className="callcon">
            <h3 className="callsec">Call Us: +91-8826791521</h3>
          </div>
          <div className="grid">
            <div>
              <img className="vector" src={vector2} alt="left" />
            </div>

            <div>
              <div>
                {/* <img>icon</img> */}
                <p><b>Address</b>
                  <br></br>
                  Village Sorkha, FNG Highway, beside Indian National Public School, Sector-115, Noida-20130</p>
              </div>
              <div>
                {/* icons */}
                <p><b>Mail</b><br></br>
                  <a href="helpdesk@petmemaa.co.in">Helpdesk@petmemaa.co.in</a>
                </p>
              </div>
              <div>
                <p><b>Connect on Social Media</b><br></br>
                  Stay updated on the latest news, adorable pet photos, and special promotions by following us on social media. </p>
                {/* icons */}{/* icons */}
              </div>
            </div>
              <div>
                <img className="vector2" src={vector} alt="right" />
              </div>
          </div>
        </div>
          <div>
            <iframe title="map" id="map-canvas" className="map_part" width="1200vh" height="350px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Pet Me Maa, Sorkha, Noida, Uttar Pradesh 201301&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">embed google maps html</a> and <a href="https://yatzyregler.com/maxpoang-yatzy/">Maxpoäng yatzy</a></iframe>
          </div>
          <div>
            <p>Business Hours</p>
            <p>Monday-Saturday: 10 AM - 10 PM</p>
          </div>
      </div>




      <Footer />
    </>
  );
};

export default ContactUs;

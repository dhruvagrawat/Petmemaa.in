import React from "react";
// import Products from "./Pages/Products";
import Intro from "./Pages/Intro";
import Secondary from "./Pages/Intro/Secondary";
import Services from "./Pages/Services";
import Cafe from "./Pages/Cafe";
import Offers from "./Pages/Offers"
import Dining from "./Pages/Dining";
import Customers from "./Pages/Customers";
import Feedback from "./Pages/Feedback";
import "./Home.css"

const Home = () => {
  return (
    <div className="container">
      <Intro />
      <Secondary />
      <Services />
      <Offers />
      <Cafe />
      <Dining />
      <Customers />
      <Feedback />
    </div>
  );
};

export default Home;

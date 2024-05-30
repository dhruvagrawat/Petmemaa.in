import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "./components/Footer";
import Menu from "../src/components/Menu/Menu";
import Cafe from "./components/Cafe/Cafe";
import Terms from "./components/Footer/Terms";
import ContactUs from "./components/ContactUs/ContactUs"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
          exact
        />
        <Route path="/contactus" element={<ContactUs />} exact />
        <Route path="/cafe" element={<Menu />} exact />
        <Route path="/comingsoon" element={<Cafe />} exact />
        <Route path="/termsandservices" element={<Terms />} exact />
      </Routes>
    </Router>
  );
}

export default App;

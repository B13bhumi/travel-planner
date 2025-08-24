// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Destinations from "./Pages/Destinations";
import DestinationDetails from "./Pages/DestinationDetails";
import BookNow from "./Pages/BookNow";
import MyTrips from "./Pages/MyTrips";

import { TripProvider } from "./context/TripContext"; // keep if other pages/components use it

function App() {
  return (
    <TripProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
                    {/* Full list of destinations page */}
          <Route path="/destinations" element={<Destinations />} />
                    {/* Destination details page */}

          <Route path="/destination-details" element={<DestinationDetails />} />
                    {/* Booking and trips */}

          <Route path="/book-now" element={<BookNow />} />
          <Route path="/mytrips" element={<MyTrips />} />

        </Routes>
        <Footer />
      </Router>
    </TripProvider>
  );
}

export default App;
 
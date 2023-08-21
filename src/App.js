import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";

const App = () => {
  return (
    <Router>
    <div>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>

              </Route>
          <Route path="/about" element={<About />}>
                
              </Route>

          <Route path="/contact" element={<Contact />} >
            
              </Route>

          <Route path="/service" element={<Service />}>
            
              </Route>
        </Routes>
      
    </div>
    </Router>
  );
};

export default App;
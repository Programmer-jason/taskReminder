import { Routes, Route, Link } from "react-router-dom";
import React from "react";

import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <h1>hello</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/abouts">about</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouts" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

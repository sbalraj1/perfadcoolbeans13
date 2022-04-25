import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import SiteVisit from "./components/sitevisit";
import Home from "./components/home";


ReactDOM.render(
  <Router basename="/perfadcoolbeans3">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="sitevisit" element={<SiteVisit />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </Router>,
  //<App />,
  document.getElementById("root")
);

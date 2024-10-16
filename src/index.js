import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Calendario from "./Calendario";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calendario" element={<Calendario />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";

const Root = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, 
      delay: 0,
      duration: 800,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

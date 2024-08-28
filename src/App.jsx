import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect } from "react";
import AppRoutes from "./AppRoutes";

function App() {
  useEffect(() => {
    const updateTitle = () => {
      const path = window.location.pathname;
      switch (path) {
        case "/about":
          document.title = "About | GSSI Enterprise";
          break;
        case "/products":
          document.title = "Products | GSSI Enterprise";
          break;
        case "/services":
          document.title = "Services | GSSI Enterprise";
          break;
        case "/projects":
          document.title = "Projects | GSSI Enterprise";
          break;
        case "/contact":
          document.title = "Contact | GSSI Enterprise";
          break;
        default:
          document.title = "GSSI Enterprise"; // Default title for the home page
      }
    };

    // Update the title when the component mounts or the pathname changes
    updateTitle();
    window.addEventListener("popstate", updateTitle); // Listen for back/forward navigation

    return () => {
      window.removeEventListener("popstate", updateTitle); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

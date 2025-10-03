"use client";

import { ToastContainer } from "react-toastify";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./contexts/ThemeContext.js";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />

      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

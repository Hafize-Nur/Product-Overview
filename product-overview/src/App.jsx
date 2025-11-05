import React from "react";
import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Features from "./sections/Features/Features";
import Comments from "./components/Comments/Comments";
import Footer from "./components/Footer/Footer";
import Pricing from "./sections/Pricing/Pricing";
import FAQ from "./sections/FAQ/FAQ";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/global.scss";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe geç
      </a>
      <Navbar />
      <div className="container">
        <h1>Welcome to Product Overview</h1>
      </div>
      <main id="main-content">
        <Hero />
        <Pricing />
        <Features />
        <Comments />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  );
}

export default App;

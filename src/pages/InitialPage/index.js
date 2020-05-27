import React from "react";
import "./style.css";
import Header from "../../components/Header";
import About from "../../components/About";
import Infos from "../../components/Infos";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Cases from "../../components/Cases";

export default function InitialPage() {
  return (
    <>
      <Header />
      <About />
      <Infos />
      <Cases />
      <Contact />
      <Footer />
    </>
  );
}

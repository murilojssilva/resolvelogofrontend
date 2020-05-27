import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function NoMatch() {
  return (
    <>
      <Header />
      <h1>Erro 404</h1>
      <h3>Esta página não existe!</h3>

      <Footer />
    </>
  );
}

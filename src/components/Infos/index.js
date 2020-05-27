import React from "react";
import "./style.css";
import quemsomos from "../../assets/infos/quemsomos.jpg";
import oquefazemos from "../../assets/infos/oquefazemos.jpg";
import comofazemos from "../../assets/infos/comofazemos.jpg";

export default function Infos() {
  return (
    <div className="infos">
      <img src={quemsomos} alt="Quem somos" />
      <img src={oquefazemos} alt="O que fazemos" />
      <img src={comofazemos} alt="Como fazemos" />
    </div>
  );
}

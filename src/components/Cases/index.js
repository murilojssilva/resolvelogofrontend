import React, { useState } from "react";
import "./styles.css";

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState("Água");
  return (
    <div className="cases">
      <h2>Veja os casos</h2>
      <ul className="nav nav-pills">
        <li className="active">
          <a
            value="Água"
            onClick={() => setSelectedCase("Água")}
            className="selected-case"
            data-toggle="pill"
            href="#home"
          >
            Água
          </a>
        </li>
        <li>
          <a
            value="Luz"
            onClick={() => setSelectedCase("Luz")}
            className="selected-case"
            data-toggle="pill"
            href="#menu1"
          >
            Luz
          </a>
        </li>
        <li>
          <a
            value="Negativação de nome"
            onClick={(e) => setSelectedCase("Negativação de nome")}
            className="selected-case"
            data-toggle="pill"
            href="#menu2"
          >
            Negativação de nome
          </a>
        </li>
        <li>
          <a
            value="Telecomunicações"
            onClick={(e) => setSelectedCase("Telecomunicações")}
            className="selected-case"
            data-toggle="pill"
            href="#menu3"
          >
            Telecomunicações
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
          <p>{selectedCase}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Resolve Logo" className="logo" />
      </Link>
    </div>
  );
}

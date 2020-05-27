import React, { useState } from "react";
import InputMask from "react-input-mask";
import { withRouter } from "react-router";
import "./style.css";
import api from "../../services/api";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    e.preventDefault();
    if (e.target.className === "name") {
      setName(e.target.value);
    } else if (e.target.className === "email") {
      setEmail(e.target.value);
    } else if (e.target.className === "phone") {
      setPhone(e.target.value);
    } else if (e.target.className === "subject") {
      setSubject(e.target.value);
    } else if (e.target.className === "message") {
      setMessage(e.target.value);
    }
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const form = {
        name,
        email,
        phone,
        subject,
        message,
      };
      await api.post("/api/sendMail", form);
      await alert("E-mail enviado com sucesso.");
    } catch (error) {
      alert("Não foi possível enviar a mensagem. Tente novamente");
    }
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  }
  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Conte seu caso</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="name"
          value={name}
          placeholder="Nome completo"
          onChange={handleChange}
          type="text"
        />
        <input
          className="email"
          value={email}
          placeholder="E-mail"
          onChange={handleChange}
          type="email"
        />
        <InputMask
          className="phone"
          value={phone}
          placeholder="Whatsapp"
          onChange={handleChange}
          type="tel"
          mask="(99) 99999-9999"
        />
        <input
          className="subject"
          value={subject}
          placeholder="Assunto"
          onChange={handleChange}
          type="text"
        />
        <textarea
          className="message"
          value={message}
          placeholder="Mensagem"
          onChange={handleChange}
          type="text"
        />
        <div className="buttons">
          <button className="send-message" onClick={handleSubmit.bind(this)}>
            <i className="fa fa-envelope"></i>
          </button>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=55${phone}&text=Nome: ${name}%0DE-mail: ${email}%0DAssunto: ${subject}%0D${message}`}
            className="send-message-whatsapp"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Contact);

/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef } from "react";
import island from "../Assets/Island.jpeg";
import "../Styles/Contact.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Contact() {
  const [contactAdd, setcontactAdd] = useState({
    name: "",
    email: "",
    message: ""
  });
  const nav = useNavigate();
  const onSubmitLogin = (e) => {
    setcontactAdd({ ...contactAdd, [e.target.name]: e.target.value });
    console.log(contactAdd);
  };
  const onSubmitAdd = (e) => {
    e.preventDefault();
    console.log(contactAdd);
    const ContactData = {
      name: contactAdd.name,
      email: contactAdd.email,
      message: contactAdd.message,
    };
    console.log(ContactData);
    axios
      .post("http://wdmPHP.sxm9040.uta.cloud/ContactEmail.php", ContactData)

      .then((result) => {
        if (result.status == 202) {
          alert("Your Message has been sent succesfully!!!");
          console.log(result);
          console.log(result.status);
          window.location.reload();
        } else {
          alert("Your Message has been sent succesfully!!!");
          console.log(result);
          
          console.log(result.status);
          window.location.reload();
        }
      });
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${island})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" onSubmit={onSubmitLogin}>
          <label htmlFor="name">Full Name</label>
          <input name="name" onChange={onSubmitLogin}
                value={contactAdd.name} placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" onChange={onSubmitLogin}
                value={contactAdd.email} placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            onChange={onSubmitLogin}
                value={contactAdd.message}
            required
          ></textarea>
          <button type="submit" onClick={onSubmitAdd}> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

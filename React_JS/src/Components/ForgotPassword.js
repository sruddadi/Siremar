/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useEffect } from "react";
import island from "../Assets/Island.jpeg";
import "../Styles/Contact.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

function ForgotPassword() {
  const [forgotPassword, setForgotPassword] = useState({
    uName: "",
    Email: "",
    Password: "",
  });

  const nav = useNavigate();
  const onSubmitLogin = (e) => {
    setForgotPassword({ ...forgotPassword, [e.target.name]: e.target.value });
    console.log(forgotPassword);
  };

  const onSubmitAdd = async (e) => {
    e.preventDefault();
    console.log(forgotPassword.Email);
    const nextData = {
      Email: forgotPassword.Email,
    };
    console.log(nextData);
    console.log(forgotPassword.Email);

    // console.log(Email);
    const res = await axios.get(
      `http://127.0.0.1:8000/api/ResidentName/${forgotPassword.Email}`
    );
    console.log(res.data.status);
    console.log(res.status);
    if (res.data.status === 200) {
      console.log(res.data.usersfetch.length);
      var len = res.data.usersfetch.length;
      console.log(len);
      console.log(res.data);
      console.log("sgdchsgdc");
      console.log(res.data.usersfetch);
      
      console.log(res.data.usersfetch[0].uName);
      console.log("sgdchsgdc");
      
      if (len === 0) 
      {
        alert("Invalid Email");
      }
      setForgotPassword({
        Password: res.data.usersfetch[0].Password,
      });
      axios
        .post(
          "http://wdmPHP.sxm9040.uta.cloud/PWemail.php",
          res.data.usersfetch[0]
        )

        .then((result) => {
          if (result.status == 202) {
            alert("Invalid User");
            console.log(result);
            console.log(result.status);

          } else {
            console.log(result);
            alert("Your Password has been sent to your Email");
            nav("/Login");
            console.log(result.status);
            console.log(result.status);
          }
        });
    }

    console.log(forgotPassword);
  };

  const Login = (e) => {
    alert("Password has been sent to your Mail!!!");
    nav("/Login");
  };
  //     useEffect(() => {
  //      onSubmitAdd();
  //   //   }, []);

  return (
    <div className="contact">
            
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${island})` }}
      ></div>
            
      <div className="rightSide">
                <h1> Forgot Password?</h1>
                
        <form id="contact-form" onSubmit={onSubmitLogin}>
                    <label htmlFor="email">Email</label>
                    
          <input
            name="Email"
            onChange={onSubmitLogin}
            value={forgotPassword.Email}
            placeholder="Enter email..."
            type="email"
          />
                                           
          <button onClick={onSubmitAdd}>Request Password</button>
                                                  
        </form>
              
      </div>
          
    </div>
  );
}

export default ForgotPassword;

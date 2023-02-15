/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState } from "react";
import "../Styles/Login.css";
import BgImage from "../Assets/ocean.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


function Login() {
  const [users, setUsers] = useState();
  const nav = useNavigate();
  const [user, setuserlogin] = useState({ Email: "", Password: "", Role: "" });

  const handleChange = (e) => {
    setuserlogin({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(user.Email);
    const nextData = {
      Email: user.Email,
      Password: user.Password,
      Role: user.Role,
    };
    console.log(nextData);

    if (user.Role == `Resident`) {
      axios
        .post("http://localhost/wdm_php/Login.php", nextData)
        .then((result) => {
          if (result.status == 202) {
            alert(
              "Wrong Credentials. Please Check Your Email or Password or Role"
            );
            console.log(result);
            console.log(result.status);
          } else {
            // alert("successfully Logged In!!!")
            console.log(result);
            console.log(result.status);
            nav(`/Resident/${user.Email}`);
          }
        });
    } else if (user.Role == `Inspector`) {
      axios
        .post("http://localhost/wdm_php/Login.php", nextData)
        .then((result) => {
          if (result.status == 202) {
            alert(
              "Wrong Credentials. Please Check Your Email or Password or Role"
            );
            console.log(result);
            console.log(result.status);
          } else {
            // alert("successfully Logged in!!!")
            console.log(result);
            console.log(result.status);
            nav(`/Inspector/${user.Email}`);
           
          }
        });
    } else if (user.Role == `Admin`) {
      axios
        .post("http://localhost/wdm_php/Login.php", nextData)
        .then((result) => {
          if (result.status == 202) {
            alert(
              "Wrong Credentials. Please Check Your Email or Password or Role"
            );
            console.log(result);
            console.log(result.status);
          } else {
            // alert("successfully registered!!!")
            console.log(result);
            console.log(result.status);
           nav(`/Admin/${user.Email}`); 
          }
        });
    } else {
      alert("Please select the role to login");
    }
  };
  return (
    <div className="Register" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="formBox">
        <div className="buttonBox"></div>
        <form id="login" className="input1" action="" onSubmit={onSubmitLogin}>
          <h2>Login</h2>

          <input
            type="email"
            className="input-field"
            name="Email"
            onChange={handleChange}
            value={user.Email}
            placeholder="Email Id"
            required
          ></input>
          <input
            type="password"
            className="input-field"
            name="Password"
            onChange={handleChange}
            value={user.Password}
            placeholder="Enter Password"
            required
          ></input>
          <select name="Role" onChange={handleChange} value={user.Role}>
            <option value="Please Select">Please Select</option>
            <option value="Resident">Resident</option>
            <option value="Inspector">Inspector</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit" className="SubmitBtn">
            Login
          </button>
          <Link to="/ForgotPassword">Forgor Password</Link>
          <Link to="/SignUp">New User? Create an Account</Link>
        </form>
        
      </div>
    </div>
  );
}
export default Login;

import React, { useState } from "react";
import "../Styles/SignUp.css";
import BgImage from "../Assets/Island.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [users, setUsers] = useState();

  const nav = useNavigate();
  const [data, setData] = useState({
    uName: "",
    Email: "",
    Password: "",
    Role: "Resident",
    CPassword: "",
    Contact: "",
    MoveInDate: "",

    DateOfBirth: "",
    PlaceOfBirth: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(data);
    const nextData = {
      uName: data.uName,
      Email: data.Email,
      Password: data.Password,
      Role: data.Role,
      CPassword: data.CPassword,
      Contact: data.Contact,
      MoveInDate: data.MoveInDate,

      DateOfBirth: data.DateOfBirth,
      PlaceOfBirth: data.PlaceOfBirth,
    };
    console.log(nextData);
    console.log("Sai Manasa Manthena");
    console.log(data.Password.length);

    if (data.CPassword == data.Password && data.Password.length >= 8) {
      if (data.Role == `Resident`) {
        axios
          .post("http://localhost/wdm_php/Register.php", nextData)
          .then((result) => {
            if (result.status == 202) {
              alert("User is already exists. Please check your Email id.");
            } else {
              console.log(data);
              const ContactData = {
                uName: data.uName,
                Email: data.Email,
              };
              axios
              .post("http://wdmPHP.sxm9040.uta.cloud/RegisterEmail.php", ContactData)

                .then((result) => {
                  if (result.status == 202) {
                    // alert("Invalid User");
                    console.log(result);
                    console.log(result.status);
                  } else {
                    alert("Your Message has been sent succesfully!!!");
                    console.log(result);

                    console.log(result.status);
                  }
                });
              console.log(ContactData);
              alert("successfully registered!!!");
              console.log(data.CPassword.length);
              
              nav(`/Resident/${data.Email}`);
            }
          });
      } else {
        alert("Please select the role to login");
      }
    } else {
      alert(" Password mismatch or length is less than 8");
      console.log(data.Password.length);
    }
  };

  return (
    <div className="Register1" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="formBox">
        <div className="buttonBox">
          <div id="btn"> </div>
        </div>
        <form id="login" className="inputForm" action="" onSubmit={onClickSubmit}>
          <h2>Sign Up</h2>
          <label>Full Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Full Name"
            name="uName"
            onChange={onClickSubmit}
            value={data.uName}
            required
          ></input>
          <label>Email Id</label>
          <input
            type="email"
            className="input-field"
            placeholder="Email Id"
            name="Email"
            onChange={onClickSubmit}
            value={data.Email}
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            className="input-field"
            name="Password"
            placeholder="Enter Password"
            onChange={onClickSubmit}
            value={data.Password}
            required
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            className="input-field"
            name="CPassword"
            placeholder="Confirm Password"
            onChange={onClickSubmit}
            value={data.CPassword}
          ></input>
          <label htmlFor="name">Date of Birth</label>
          <input
            type="date"
            name="DateOfBirth"
            className="input-field"
            onChange={onClickSubmit}
            value={data.DateOfBirth}
            placeholder="Date of Birth"
          ></input>
          <label htmlFor="name">Move in Date</label>
          <input
            name="MoveInDate"
            type="date"
            className="input-field"
            onChange={onClickSubmit}
            value={data.MoveInDate}
            placeholder="Move in Date"
          ></input>
          <label>Place of Birth</label>
          <input
            name="PlaceOfBirth"
            type="text"
            className="input-field"
            placeholder="Place of Birth"
            onChange={onClickSubmit}
            value={data.PlaceOfBirth}
          ></input>
          <label>Contact Number</label>
          <input
            name="Contact"
            type="text"
            className="input-field"
            placeholder="Contact Number"
            onChange={onClickSubmit}
            value={data.Contact}
          ></input>
          {/*           
          <select
            name="Role"
            value={users}
            onChange={onClickSubmit}
            value={data.Role}
          >
            <option value="Please Select">Please Select</option>
            <option value="Resident">Resident</option>
            <option value="Inspector">Inspector</option>
          </select> */}
          <button type="submit" onClick={onSubmitLogin} className="SubmitBtn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
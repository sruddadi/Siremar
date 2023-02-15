/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef } from "react";
import "../Styles/AddResidents.css";
import BgImage from "../Assets/Island.jpeg";
import { useNavigate, Link,useParams } from "react-router-dom";

import axios from "axios";
function AddResidents() {
  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  
  const nav = useNavigate();
  const { Email } = useParams();
  const [data, setData] = useState({
    uName: "",
    Email: "",
    Password: "",
    CPassword: "",
    Role: "",
    Contact: "",
    MoveInDate: "",
    MoveOutDate: "",
    DateOfBirth: "",
    PlaceOfBirth: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(data);
    if (data.MoveInDate == " ") {
      console.log("Blank Movin date");
    } else console.log("blank");
    const nextData = {
      uName: data.uName,
      Email: data.Email,
      Password: data.Password,
      CPassword: data.CPassword,
      Role: data.Role,
      Contact: data.Contact,
      MoveInDate: data.MoveInDate,
      MoveOutDate: data.MoveOutDate,
      Role: "Resident",
      DateOfBirth: data.DateOfBirth,
      PlaceOfBirth: data.PlaceOfBirth,
    };
    console.log(nextData);
    if ((data.CPassword == data.Password)&& (data.Password.length >= 8)  && (data.Contact.length == 10) ) {


      const res = await axios.post(
        "http://127.0.0.1:8000/api/AddResidents",
        nextData
      );
      if (res.data.status === 200) {
        console.log(res.data.message);
        alert(res.data.message);
        setData({
          uName: "",
          Email: "",
          Password: "",
          CPassword: "",
          Role: "",
          Contact: "",
          MoveInDate: "",
          MoveOutDate: "",
          DateOfBirth: "",
          PlaceOfBirth: "",
        });
      }
      // axios
      // .post("http://localhost/wdm_php/Register.php", nextData)

      // .then((result) => {
      //   if (result.status == 202) {
      //     alert("Invalid User");
      //     console.log(result);
      //     console.log(result.status);
      //   } else {
          
      //     console.log(result);
      //     nav("/Inspector");
      //     console.log(result.status);
      //   }
      // });
    }else{
      alert(" Password mismatch or Password Length should be > 8 ");
    }
  };
  const onHome = () => {
    
    console.log(Email);
    
    nav(`/Inspector/${Email}`);
   
  };
  return (
    <div className="Register1" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="InspectorSideBar">
        <div className="ISidebarInside">
          <h2>SIREMAR</h2>
        </div>
        <div className="InspectorSideBarItems">
          <ul>
            <li>
              <h3>
                <label
                  htmlFor="name"
                  onClick={onHome}
                >
                  Home
                </label>
              </h3>
            </li>

           
  
            <li>
              <Link to="/Login">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="InspectorHome" ref={home}>
        <header className="top">
          <h2>Inspector Portal</h2>
        </header>
        <main
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="formBox">
        
            <form id="login" class="input" action="" onSubmit={onSubmitLogin}>
              <h2>Add Residents</h2>
              <label>Full Name</label>
              <input
                              type="text"
                              className="input-field"
                              placeholder="Full Name"
                              name="uName"
                              onChange={onClickSubmit}
                              value={data.uName}
                            ></input>
                          <label>Contact</label>
                            <input
                              name="Contact"
                              type="text"
                              className="input-field"
                              placeholder="Contact Number"
                              onChange={onClickSubmit}
                              value={data.Contact}
                            ></input>
                            <label>Email Id</label>
                            <input
                              type="email"
                              className="input-field"
                              placeholder="Email Id"
                              name="Email"
                              onChange={onClickSubmit}
                              value={data.Email}
                            ></input>
                            <label>Password</label>
                            <input
                              type="password"
                              className="input-field"
                              name="Password"
                              placeholder="Enter Password"
                              onChange={onClickSubmit}
                              value={data.Password}
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
                            <label>Move In Date</label>
                            <input
                              name="MoveInDate"
                              type="date"
                              className="input-field"
                              defaultValue="0000/00/00"
                              onChange={onClickSubmit}
                              value={data.MoveInDate}
                              placeholder="Move in Date"
                            ></input>
                            {/* <label>Move Out Date</label>
                            <input
                              name="MoveOutDate"
                              type="date"
                              className="input-field"
                              onChange={onClickSubmit}
                              value={data.MoveOutDate}
                              placeholder="Move out Date"
                            ></input> */}
                            <label>Date of Birth</label>
                            <input
                              type="date"
                              name="DateOfBirth"
                              className="input-field"
                              onChange={onClickSubmit}
                              value={data.DateOfBirth}
                              placeholder="Date of Birth"
                            />
                            <label>Place Of Birth</label>
                            <input
                              name="PlaceOfBirth"
                              type="text"
                              className="input-field"
                              placeholder="Place of Birth"
                              onChange={onClickSubmit}
                              value={data.PlaceOfBirth}
                            ></input>
              <button type="submit" onClick={onSubmitLogin} className="SubmitBtn">
                Register
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AddResidents;

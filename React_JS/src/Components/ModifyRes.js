import React, { useState, useRef, useEffect } from "react";
import "../Styles/ModifyRes.css";
import BgImage from "../Assets/ocean.jpeg";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

function ModifyRes() {
  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [users, setUsers] = useState();
  const { Email } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({
    uName: "",
    Email: "",
    Password: "",
    Role: "",
    CPassword: "",
    Contact: "",
    MoveInDate: "",
    MoveOutDate: "",
    DateOfBirth: "",
    PlaceOfBirth: "",
    id: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const loadUsers = async () => {
    const res = await axios.get(
            `http://127.0.0.1:8000/api/ResidentFetch/${id}`
          );
          if (res.data.status === 200) {
            console.log(res.data);
      
            console.log(res.data.usersfetch.uName);
      
            setData({
              uName: res.data.usersfetch.uName,
              Password: res.data.usersfetch.Password,
              CPassword:res.data.usersfetch.Password,
              Role: res.data.usersfetch.Role,
              MoveInDate: res.data.usersfetch.MoveInDate,
              MoveOutDate: res.data.usersfetch.MoveOutDate,
              DateOfBirth: res.data.usersfetch.DateOfBirth,
              PlaceOfBirth: res.data.usersfetch.PlaceOfBirth,
              Contact: res.data.usersfetch.Contact,
              Email: res.data.usersfetch.Email,
              id: res.data.usersfetch.id,
            });
          }
    // axios
    //   .get("http://localhost/wdm_php/Edit_Res_fetch.php?id=" + id)
    //   .then((res) => {
    //     console.log(res.data);
    //     var mydata = res.data;
    //     console.log(mydata[0].uName);
    //     console.log(mydata);

    //     setData({
    //       uName: mydata[0].uName,
    //       Email: mydata[0].Email,
    //       Password: mydata[0].Password,
    //       Role: "Resident",
    //       CPassword: mydata[0].Password,
    //       Contact: mydata[0].Contact,
    //       MoveInDate: mydata[0].MoveInDate,
    //       MoveOutDate: mydata[0].MoveOutDate,
    //       DateOfBirth: mydata[0].DateOfBirth,
    //       PlaceOfBirth: mydata[0].PlaceOfBirth,
    //       id: mydata[0].id,
    //     });
    //   });
  };

  const onSubmitLogin = async(e) => {
    e.preventDefault();
    console.log(data.uName);
    const nextData = {
      id: data.id,
      uName: data.uName,
      Email: data.Email,
      Password: data.Password,
      Role: "Resident",
      CPassword: data.CPassword,
      Contact: data.Contact,
      MoveInDate: data.MoveInDate,
      MoveOutDate: data.MoveOutDate,
      DateOfBirth: data.DateOfBirth,
      PlaceOfBirth: data.PlaceOfBirth,
    };
    console.log("after submit" + nextData);

    if (data.CPassword == data.Password) {

      const res = await axios.put(`http://127.0.0.1:8000/api/ModifyResident/${id}`, nextData);

      if (res.data.status === 200) 
      {
          console.log(res.data.message);
alert("User data has been updated sucessfully");
  
      }
      // axios
      //   .post("http://localhost/wdm_php/Resident_Update.php", nextData)
      //   .then((result) => {
      //     if (result.status == 202) {
      //       alert("Invalid User");
      //       console.log(result);
      //       console.log(result.status);
      //     } else {
      //       alert("successfully Updated!!!");
      //       nav("/Inspector");
      //       console.log(nextData);

      //       // nav('/Resident');
      //     }
      //   });
    } else {
      alert(" Password mismatch");
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const onHome = () => {

    nav(`/Inspector/${Email}`);
  };
  return (
    <div
      className="Register1"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="ModifySideBar">
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
          <h2>Manage Residents</h2>
          <div className="InspectorDiv">
            <div>
              <h4>Hola, Inspector</h4>
            </div>
          </div>
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
            <form
              id="login"
              className="input"
              action=""
              onSubmit={onSubmitLogin}
            >
              <h2>Manage Residents </h2>

              <label htmlFor="name" style={{ marginTop: "20px" }}>
                {" "}
                User Name:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="User Name"
                name="uName"
                value={data.uName}
                onChange={onClickSubmit}
                required
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                {" "}
                Email:
              </label>
              <input
                type="email"
                className="input-field"
                placeholder="Email Id"
                name="Email"
                onChange={onClickSubmit}
                value={data.Email}
                // value={resd1.Email}
                required
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                {" "}
                Password:
              </label>
              <input
                type="password"
                className="input-field"
                name="Password"
                placeholder="Enter Password"
                name="Password"
                onChange={onClickSubmit}
                value={data.Password}
                required
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                {" "}
                Confirm Password:
              </label>
              <input
                type="password"
                className="input-field"
                name="CPassword"
                placeholder="Confirm Password"
                onChange={onClickSubmit}
                value={data.CPassword}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Date of Birth:
              </label>
              <input
                type="date"
                className="input-field"
                name="DateOfBirth"
                placeholder="Date of Birth"
                onChange={onClickSubmit}
                value={data.DateOfBirth}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Move in Date:
              </label>
              <input
                type="date"
                className="input-field"
                name="MoveInDate"
                placeholder="Move in Date"
                onChange={onClickSubmit}
                value={data.MoveInDate}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Move Out Date:
              </label>
              <input
                type="date"
                className="input-field"
                name="MoveOutDate"
                placeholder="Move in Date"
                onChange={onClickSubmit}
                value={data.MoveOutDate}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Place of Birth:
              </label>
              <input
                type="text"
                className="input-field"
                name="PlaceOfBirth"
                placeholder="Place of Birth"
                onChange={onClickSubmit}
                value={data.PlaceOfBirth}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Contact Number:
              </label>
              <input
                type="text"
                className="input-field"
                name="Contact"
                placeholder="Contact Number"
                onChange={onClickSubmit}
                value={data.Contact}
              ></input>

              <button type="submit" className="SubmitBtn">
                Update Record
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
export default ModifyRes;

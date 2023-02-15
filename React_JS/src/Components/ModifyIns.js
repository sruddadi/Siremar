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
  const { Email } = useParams();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [users, setUsers] = useState();
  
  const nav = useNavigate();
  const [data, setData] = useState({
    uName: "",
    Email: "",
    Password: "",
    Role: "",
   
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
    axios
      .get("http://localhost/wdm_php/Edit_Res_fetch.php?id=" + id)
      .then((res) => {
        console.log(res.data);
        var mydata = res.data;
        console.log(mydata[0].uName);
        console.log(mydata);

        setData({
          uName: mydata[0].uName,
          Email: mydata[0].Email,
          Password: mydata[0].Password,
          Role: "Inspector",
          
          Contact: mydata[0].Contact,
          MoveInDate: mydata[0].MoveInDate,
          MoveOutDate: mydata[0].MoveOutDate,
          DateOfBirth: mydata[0].DateOfBirth,
          PlaceOfBirth: mydata[0].PlaceOfBirth,
          id: mydata[0].id,
        });
      });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(data.uName);
    const nextData = {
      id: data.id,
      uName: data.uName,
      Email: data.Email,
      Password: data.Password,
      Role: "Inspector",
      
      Contact: data.Contact,
      MoveInDate: data.MoveInDate,
      MoveOutDate: data.MoveOutDate,
      DateOfBirth: data.DateOfBirth,
      PlaceOfBirth: data.PlaceOfBirth,
    };
    console.log("after submit" + nextData);

    
      axios
        .post("http://localhost/wdm_php/Resident_Update.php", nextData)
        .then((result) => {
          if (result.status == 202) {
            alert("Invalid User");
            console.log(result);
            console.log(result.status);
          } else {
            alert("successfully Updated!!!");
            nav("/Inspector");
            console.log(nextData);

            // nav('/Resident');
          }
        });
  };
  useEffect(() => {
    loadUsers();
  }, []);
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
                  onClick={() => home.current.scrollIntoView()}
                >
                  Home
                </label>
              </h3>
            </li>

            <li>
              <label
                htmlFor="name"
                onClick={() => res.current.scrollIntoView()}
              >
                Manage Residents
              </label>
            </li>
            <li>
              <label
                htmlFor="name"
                onClick={() => res.current.scrollIntoView()}
              >
                Manage MoveOuts
              </label>
            </li>
            <li>
              <label
                htmlFor="name"
                onClick={() => business.current.scrollIntoView()}
              >
                Manage Businesses
              </label>
            </li>
            <li>
              <Link to="/Contact">Chat with an Resident</Link>
            </li>
            <li>
              <Link to="/Login">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="InspectorHome" ref={home}>
        <header className="top">
          <h2>Manage Inspector</h2>
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
              <h2>Manage Inspector </h2>

              <label htmlFor="name" style={{ marginTop: "20px" }}>
                {" "}
                User Name:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="User Name"
                name="uName"
                style={{ fontWeight:"bold", fontSize:'13px'}}
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
                style={{ fontWeight:"bold", fontSize:'13px'}}
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
                type="text"
                className="input-field"
                name="Password"
                placeholder="Enter Password"
                name="Password"
                onChange={onClickSubmit}
                value={data.Password}
                style={{ fontWeight:"bold", fontSize:'13px'}}
                required
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

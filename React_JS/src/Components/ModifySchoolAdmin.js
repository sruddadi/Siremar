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
  const [resd, setResd] = useState([]);
  const nav = useNavigate();
  const [data, setData] = useState({
    SchoolName: "",
    Contact: "",
    Email: "",

    Address: "",
   
    Remarks: "",
    id: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const loadUsers = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/SchoolFetch/${id}`);
    if (res.data.status === 200) {
      console.log(res.data);
      
      console.log(res.data.findSchool.SchoolName);
      

      setData({
        SchoolName:res.data.findSchool.SchoolName,
        Contact: res.data.findSchool.Contact,
        Address: res.data.findSchool.Address,

        Email: res.data.findSchool.Email,

        Remarks:res.data.findSchool.Remarks,
        id: res.data.findSchool.id,
      });
    }
    // axios
    //   .get("http://localhost/wdm_php/Edit_School_fetch.php?id=" + id)
    //   .then((res) => {
    //     console.log(res.data);
    //     var mydata = res.data;
    //     console.log(mydata[0].Business_Name);
    //     console.log(mydata);

    //     setData({
    //       SchoolName: mydata[0].SchoolName,
    //       Contact: mydata[0].Contact,
    //       Address: mydata[0].Address,

    //       Email: mydata[0].Email,

    //       Remarks: mydata[0].Remarks,
    //       id: mydata[0].id,
    //     });
    //   });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(data.SchoolName);
    const nextData = {
      id: data.id,
      SchoolName: data.SchoolName,
      Contact: data.Contact,
      Email: data.Email,

      Address: data.Address,

      Remarks: data.Remarks,
    };
    console.log("after submit" + nextData);
    const res = await axios.put(`http://127.0.0.1:8000/api/ModifySchool/${id}`, nextData);

    if (res.data.status === 200) 
    {
        console.log(res.data.message);

    }

    // axios
    //   .post("http://localhost/wdm_php/School_Update.php", nextData)
    //   .then((result) => {
    //     if (result.status == 202) {
    //       alert("Invalid User");
    //       console.log(result);
    //       console.log(result.status);
    //     } else {
    //       alert("successfully Updated!!!");
    //       nav("/Admin");
    //       console.log(nextData);

    //       // nav('/Resident');
    //     }
    //   });
      
   
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const onHome = () => {
    
    nav(`/Admin/${Email}`);
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
                  onClick={onHome}>
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
          <h2>Manage School</h2>
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
              <h2>Manage School </h2>

              <label htmlFor="name" style={{ marginTop: "20px" }}>
                {" "}
                School Name:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="School Name"
                name="SchoolName"
                value={data.SchoolName}
                onChange={onClickSubmit}
                required
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                {" "}
                Contact:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Contact Number"
                name="Contact"
                onChange={onClickSubmit}
                value={data.Contact}
                // value={resd1.Email}
                required
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Email:
              </label>
              <input
                type="email"
                className="input-field"
                name="Email"
                placeholder="Email"
                onChange={onClickSubmit}
                value={data.Email}
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
              Address:
              </label>
              <input
                type="text"
                className="input-field"
                name="Address"
                placeholder="Address"
                onChange={onClickSubmit}
                value={data.Address}
              ></input>



              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Remarks:
              </label>
              <input
                type="text"
                className="input-field"
                name="Remarks"
                placeholder="Remarks"
                onChange={onClickSubmit}
                value={data.Remarks}
              ></input>

              <button type="submit" onClick={onSubmitLogin} className="SubmitBtn">
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

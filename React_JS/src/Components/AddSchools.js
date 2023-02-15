/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef } from "react";
import "../Styles/AddFlights.css";
import BgImage from "../Assets/Island.jpeg";
import { useNavigate, Link,useParams } from "react-router-dom";
import axios from "axios";
function AddSchools() {
  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  const { Email } = useParams();
  const nav = useNavigate();
  const [schoolAdd, setschoolAdd] = useState({
    SchoolName: "",
    Contact: "",
    Email: "",
    Address: "",
    Remarks: "",
  });

  const onSchoolChange = (e) => {
    setschoolAdd({ ...schoolAdd, [e.target.name]: e.target.value });
    console.log(schoolAdd);
  };
  const onSchoolAdd = async (e) => {
    e.preventDefault();
    console.log(schoolAdd);
    const SchoolData = {
      SchoolName: schoolAdd.SchoolName,
      Contact: schoolAdd.Contact,
      Email: schoolAdd.Email,
      Address: schoolAdd.Address,
      Remarks: schoolAdd.Remarks,
    };
    console.log(SchoolData);

    const res = await axios.post(
      "http://127.0.0.1:8000/api/School",
      SchoolData
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      alert(res.data.message);
      setschoolAdd({
        SchoolName: "",
        Contact: "",
        Email: "",
        Address: "",
        Remarks: "",
      });
    }
    // axios
    //   .post("http://localhost/wdm_php/SchoolAdd.php", SchoolData)

    //   .then((result) => {
    //     if (result.status == 202) {
    //       alert("Invalid User");
    //       console.log(result);
    //       console.log(result.status);
    //     } else {

    //       console.log(result);
    //       nav("/Inspector");
    //       console.log(result.status);
    //     }
    //   });
  };
  const onHome = () => {
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
                <label htmlFor="name" onClick={onHome}>
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
            <form id="login" class="input" action="" onSubmit={onSchoolChange}>
              <h2>Add Schools</h2>
              <label>School Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="School Name"
                name="SchoolName"
                onChange={onSchoolChange}
                value={schoolAdd.SchoolName}
                required
              ></input>
              <label>Contact</label>
              <input
                type="text"
                className="input-field"
                placeholder="Contact Number"
                name="Contact"
                onChange={onSchoolChange}
                value={schoolAdd.Contact}
                required
              ></input>
              <label>Email Id</label>
              <input
                type="Email"
                className="input-field"
                placeholder="Email"
                name="Email"
                onChange={onSchoolChange}
                value={schoolAdd.Email}
                required
              ></input>
              <label>Address</label>
              <input
                type="text"
                className="input-field"
                placeholder="Address"
                name="Address"
                onChange={onSchoolChange}
                value={schoolAdd.Address}
                required
              ></input>
              <label>Remarks</label>
              <input
                type="text"
                className="input-field"
                placeholder="Remarks"
                name="Remarks"
                onChange={onSchoolChange}
                value={schoolAdd.Remarks}
                required
              ></input>

              <button type="submit" onClick={onSchoolAdd} className="SubmitBtn">
                Register
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AddSchools;

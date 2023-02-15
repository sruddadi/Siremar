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
    EventName: "",
    Email: "",
    Contact: "",
    Address: "",
    Host: "",
    EventDay: "",
    Remarks: "",
    id: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const loadUsers = async () => {

    const res = await axios.get(`http://127.0.0.1:8000/api/EventFetch/${id}`);
    if (res.data.status === 200) {
      console.log(res.data);

      console.log(res.data.findevent.EventName);

      setData({
        EventName: res.data.findevent.EventName,
        Contact: res.data.findevent.Contact,
        Address: res.data.findevent.Address,
        Host: res.data.findevent.Host,
        EventDay: res.data.findevent.EventDay,
        Email: res.data.findevent.Email,
        Remarks: res.data.findevent.Remarks,
        id: res.data.findevent.id,
      });
    }
    // axios
    //   .get("http://localhost/wdm_php/Edit_Event_fetch.php?id=" + id)
    //   .then((res) => {
    //     console.log(res.data);
    //     var mydata = res.data;
    //     console.log(mydata[0].Business_Name);
    //     console.log(mydata);

    //     setData({
    //       EventName: mydata[0].EventName,
    //       Email: mydata[0].Email,
    //       Contact: mydata[0].Contact,
    //       Address: mydata[0].Address,
    //       Host: mydata[0].Host,
    //       EventDay: mydata[0].EventDay,
    //       Remarks: mydata[0].Remarks,
    //       id: mydata[0].id,
    //     });
    //   });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(data.Business_Name);
    const nextData = {
      id: data.id,
      EventName: data.EventName,
      Email: data.Email,
      Contact: data.Contact,
      Address: data.Address,
      Host: data.Host,
      EventDay: data.EventDay,
      Remarks: data.Remarks,
    };
    console.log("after submit" + nextData);

    const res = await axios.put(`http://127.0.0.1:8000/api/ModifyEvent/${id}`, nextData);

    if (res.data.status === 200) 
    {
        console.log(res.data.message);
        alert(res.data.message)
        

    }
    // axios
    //   .post("http://localhost/wdm_php/Event_Update.php", nextData)
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

    // window.location.reload(false);
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
          <h2>Manage Event</h2>
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
              <h2>Manage Event </h2>

              <label htmlFor="name" style={{ marginTop: "20px" }}>
                {" "}
                Event Name:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Event Name"
                name="EventName"
                value={data.EventName}
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

              <label htmlFor="name" style={{ marginTop: "10px" }}>
              Host:
              </label>
              <input
                type="text"
                className="input-field"
                name="Host"
                placeholder="Host"
                onChange={onClickSubmit}
                value={data.Host}
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Event Day:
              </label>
              <input
                type="text"
                className="input-field"
                name="EventDay"
                placeholder="Event Day"
                onChange={onClickSubmit}
                value={data.EventDay}
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

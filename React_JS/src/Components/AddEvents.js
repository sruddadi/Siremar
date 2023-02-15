/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef } from "react";
import "../Styles/AddEvents.css";
import BgImage from "../Assets/Island.jpeg";
import { useNavigate, Link ,useParams} from "react-router-dom";
import axios from "axios";
function AddEvents() {
  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  const { Email } = useParams();
  const nav = useNavigate();
  const [eventAdd, seteventsAdd] = useState({
    EventName: "",
    Contact: "",
    Email: "",
    Address: "",
    Host: "",
    EventDay: "",
    Remarks: "",
  });

  const onEventChange = (e) => {
    seteventsAdd({ ...eventAdd, [e.target.name]: e.target.value });
    console.log(eventAdd);
  };
  const onEventAdd = async (e) => {
    e.preventDefault();
    console.log(eventAdd);
    const EventData = {
      EventName: eventAdd.EventName,
      Contact: eventAdd.Contact,
      Email: eventAdd.Email,
      Address: eventAdd.Address,
      Host: eventAdd.Host,
      EventDay: eventAdd.EventDay,
      Remarks: eventAdd.Remarks,
    };
    console.log(EventData);
    const res = await axios.post(
            "http://127.0.0.1:8000/api/Event",
            EventData
          );
          if (res.data.status === 200){
            console.log(res.data.message);
            alert(res.data.message);
            seteventsAdd({
              EventName: "",
              Contact: "",
              Email: "",
              Address: "",
              Host: "",
              EventDay: "",
              Remarks: "",
            });
          }
    // axios
    //   .post("http://localhost/wdm_php/EventAdd.php", EventData)

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
            <form id="login" class="input" action="" onSubmit={onEventAdd}>
              <h2>Add Eventss</h2>
              <label>Event Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Event Name"
                name="EventName"
                onChange={onEventChange}
                value={eventAdd.EventName}
                required
              ></input>
              <label>Contact</label>
              <input
                type="text"
                className="input-field"
                placeholder="Contact"
                name="Contact"
                onChange={onEventChange}
                value={eventAdd.Contact}
                required
              ></input>
              <label>Email Id</label>
              <input
                type="email"
                className="input-field"
                placeholder="email"
                name="Email"
                onChange={onEventChange}
                value={eventAdd.Email}
                required
              ></input>
              <label>Address</label>
              <input
                type="text"
                className="input-field"
                placeholder="address"
                name="Address"
                onChange={onEventChange}
                value={eventAdd.Address}
                required
              ></input>
              <label>Host</label>
              <input
                type="text"
                className="input-field"
                placeholder="Host"
                name="Host"
                onChange={onEventChange}
                value={eventAdd.Host}
                required
              ></input>
              <label>Event Day</label>
            
                <input
                  type="date"
                  className="input-field"
                  placeholder="Event Day"
                  name="EventDay"
                  onChange={onEventChange}
                  value={eventAdd.EventDay}
                  required
                ></input>
             
              <label>Remarks</label>
              <input
                type="text"
                className="input-field"
                placeholder="Remarks"
                name="Remarks"
                onChange={onEventChange}
                value={eventAdd.Remarks}
                required
              ></input>
              <button type="submit" onClick={onEventAdd} className="SubmitBtn">
                Register
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AddEvents;

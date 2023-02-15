/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef } from "react";
import "../Styles/AddFlights.css";
import BgImage from "../Assets/Island.jpeg";
import { useNavigate, Link,useParams } from "react-router-dom";
import axios from "axios";
function AddFlights() {
  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  const { Email } = useParams();
  const nav = useNavigate();
  const [flightAdd, setflightAdd] = useState({
    Flight_Name: "",
    Date_Time: "",
    Destination: "",
    Offers: "",
    Offer_code: "",
    Remarks: "",
  });

  const onFlightChange = (e) => {
    setflightAdd({ ...flightAdd, [e.target.name]: e.target.value });
    console.log(flightAdd);
  };
  const onFlightAdd = async(e) => {
    e.preventDefault();
    console.log(flightAdd);
    const FlightData = {
      Flight_Name: flightAdd.Flight_Name,
      Date_Time: flightAdd.Date_Time,
      Destination: flightAdd.Destination,
      Offers: flightAdd.Offers,
      Offer_code: flightAdd.Offer_code,
      Remarks: flightAdd.Remarks,
    };
    console.log(FlightData);
    const res = await axios.post(
            "http://127.0.0.1:8000/api/Flight",
            FlightData
          );
          if (res.data.status === 200) {
            console.log(res.data.message);
            alert(res.data.message);
            setflightAdd({
              Flight_Name: "",
              Date_Time: "",
              Destination: "",
              Offers: "",
              Offer_code: "",
              Remarks: "",
            });
          }
    // axios
    //   .post("http://localhost/wdm_php/FlightAdd.php", FlightData)

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
            <form id="login" class="input" action="" onSubmit={onFlightChange}>
              <h2>Add Flights</h2>
              <label htmlFor="name" style={{ marginTop: "10px" }}>Flight Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Flight Name"
                name="Flight_Name"
                onChange={onFlightChange}
                value={flightAdd.Flight_Name}
                required
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>Flight Date</label>
              <input
                type="date"
                className="input-field"
                placeholder="Date"
                name="Date_Time"
                onChange={onFlightChange}
                value={flightAdd.Date_Time}
                required
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>Destination</label>
              <input
                type="text"
                className="input-field"
                placeholder="Destination"
                name="Destination"
                onChange={onFlightChange}
                value={flightAdd.Destination}
                required
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>Offers</label>
              <input
                type="text"
                className="input-field"
                placeholder="Offers"
                name="Offers"
                onChange={onFlightChange}
                value={flightAdd.Offers}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>Offer Code</label>
              <input
                type="text"
                className="input-field"
                placeholder="Offer Code"
                name="Offer_code"
                onChange={onFlightChange}
                value={flightAdd.Offer_code}
              ></input>
              <label htmlFor="name" style={{ marginTop: "10px" }}>Remarks</label>
              
                <input
                  type="text"
                  className="input-field"
                  placeholder="Remarks"
                  name="Remarks"
                  onChange={onFlightChange}
                  value={flightAdd.Remarks}
                  required
                ></input>
             
              <button type="submit" onClick={onFlightAdd} className="SubmitBtn">
                Register
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AddFlights;

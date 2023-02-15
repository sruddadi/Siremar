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
    Flight_Name: "",
    Date_Time: "",
    Destination: "",

    Offers: "",
    Offer_code: "",
    Remarks: "",
    id: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const loadUsers = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/FlightFetch/${id}`);
    if (res.data.status === 200) {
      console.log(res.data);
      
      console.log(res.data.findFlight.Flight_Name);
      

      setData({
        Flight_Name:res.data.findFlight.Flight_Name,
        Date_Time: res.data.findFlight.Date_Time,
        Destination: res.data.findFlight.Destination,
        Offers:res.data.findFlight.Offers,
        Offer_code:res.data.findFlight.Offer_code,
        Remarks:res.data.findFlight.Remarks,
        id: res.data.findFlight.id,
      });
    }
    // axios
    //   .get("http://localhost/wdm_php/Edit_Flight_fetch.php?id=" + id)
    //   .then((res) => {
    //     console.log(res.data);
    //     var mydata = res.data;
    //     console.log(mydata[0].Business_Name);
    //     console.log(mydata);

    //     setData({
    //       Flight_Name: mydata[0].Flight_Name,
    //       Date_Time: mydata[0].Date_Time,
    //       Destination: mydata[0].Destination,

    //       Offers: mydata[0].Offers,
    //       Offer_code: mydata[0].Offer_code,
    //       Remarks: mydata[0].Remarks,
    //       id: mydata[0].id,
    //     });
    //   });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(data.Flight_Name);
    const nextData = {
      id: data.id,
      Flight_Name: data.Flight_Name,
      Date_Time: data.Date_Time,
      Destination: data.Destination,

      Offers: data.Offers,
      Offer_code: data.Offer_code,
      Remarks: data.Remarks,
    };
    console.log("after submit" + nextData);

    const res = await axios.put(`http://127.0.0.1:8000/api/ModifyFlight/${id}`, nextData);

    if (res.data.status === 200) 
    {
        console.log(res.data.message);
        alert("Flight successfully Updated!!!");
  

    }

    // axios
    //   .post("http://localhost/wdm_php/Flight_Update.php", nextData)
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
          <h2>Manage Flights</h2>
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
              <h2>Manage Flights </h2>

              <label htmlFor="name" style={{ marginTop: "20px" }}>
                {" "}
                User Name:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Flight Name"
                name="Flight_Name"
                value={data.Flight_Name}
                onChange={onClickSubmit}
                required
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                {" "}
                Date and Time:
              </label>
              <input
                type="Date"
                className="input-field"
                placeholder="Date"
                name="Date_Time"
                onChange={onClickSubmit}
                value={data.Date_Time}
                // value={resd1.Email}
                required
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Destination:
              </label>
              <input
                type="text"
                className="input-field"
                name="Destination"
                placeholder="Destination"
                onChange={onClickSubmit}
                value={data.Destination}
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Offers:
              </label>
              <input
                type="text"
                className="input-field"
                name="Offers"
                placeholder="Offers"
                onChange={onClickSubmit}
                value={data.Offers}
              ></input>

              <label htmlFor="name" style={{ marginTop: "10px" }}>
                Offer Code:
              </label>
              <input
                type="text"
                className="input-field"
                name="Offer_code"
                placeholder="Offer Code"
                onChange={onClickSubmit}
                value={data.Offer_code}
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

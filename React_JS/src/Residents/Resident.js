
import React, { useState, useRef, useEffect } from "react";
import "./Resident.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Chat from "../Components/Chat";

const socket = io.connect("http://localhost:3001");

function Resident() {
  const [users, setUsers] = useState();
  //const socketRef = io.connect('http://localhost:4000');
  const schoolregdiv = useRef(null);
  const discounts = useRef(null);
  const home = useRef(null);
  const event = useRef(null);
  const [discount, setDiscount] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [Events, setEvents] = useState([]);
  const [Flights, setFlights] = useState([]);
  const [Schools, setSchools] = useState([]);
  const [resident, setResident] = useState([]);
  const [data, setData] = useState([]);
  //oin Room Code

  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("1234");
  const [showChat, setShowChat] = useState(false);

  const { Email } = useParams();

  const joinRoom = () => {
    // if (username !== "" && room !== ""){
    //     socket.emit("join_room",room);
    //     setShowChat(true);
    // }
    var room = "1234";
    socket.emit("join_room", room);
    console.log("room name is");
    console.log(room);
    setShowChat(true);
  };
  const loadUsersName = async () => {
    console.log(Email);
    const res = await axios.get(
            `http://127.0.0.1:8000/api/ResidentName/${Email}`
          );
          if (res.data.status === 200) {
            console.log(res.data);
     
      console.log(res.data.usersfetch[0].uName);

      
  
      
            setData({
              uName: res.data.usersfetch[0].uName,
              
            });
      
      console.log(res.data.usersfetch.uName);
      console.log(res.data.usersfetch.id);
      // console.log(data.usersfetch.uName);

            console.log(data.uName);
          }
    }

  //Chat Code
  const getDiscounts = () => {
    axios.get("http://127.0.0.1:8000/api/Register").then((res) => {
      console.log(Email);
      console.log(res.data);
      setDiscount(res.data);
    });
  };

  useEffect(() => {
    loadUsersName();
    getDiscounts();
  }, []);

  const getShopping = () => {
    axios.get("http://127.0.0.1:8000/api/LoadBusiness").then((res) => {
      console.log(res.data);
      setShopping(res.data);
    });
  };

  useEffect(() => {
    getShopping();
  }, []);

  const getResidents = () => {
    axios.get("http://127.0.0.1:8000/api/LoadResidents").then((res) => {
      console.log(res.data);
      setResident(res.data);
    });
  };

  useEffect(() => {
    getResidents();
  }, []);

  const getEvents = () => {
    axios.get("http://127.0.0.1:8000/api/LoadEvent").then((res) => {
      console.log(res.data);
      setEvents(res.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const getFlights = () => {
    axios.get("http://127.0.0.1:8000/api/LoadFlight").then((res) => {
      console.log(res.data);
      setFlights(res.data);
    });
  };

  useEffect(() => {
    getFlights();
  }, []);

  const getSchools = () => {
    axios.get("http://127.0.0.1:8000/api/LoadSchool").then((res) => {
      console.log(res.data);
      setSchools(res.data);
    });
  };

  useEffect(() => {
    getSchools();
  }, []);

  const [schoolEmail, setschoolEmail] = useState({
    SchoolName: "",
    Email: "",
    Remarks: "",
    Contact: "",
    Address: "",
    name: "",
  });
  const nav = useNavigate();
  const onSchoolAdd = (e) => {
    setschoolEmail({ ...schoolEmail, [e.target.name]: e.target.value });
    console.log(schoolEmail);
  };
  const onMessageSent = (e) => {
    setschoolEmail({ ...schoolEmail, [e.target.name]: e.target.value });
    console.log(schoolEmail);
  };
  const OnSchoolRegister = (e) => {
    e.preventDefault();
    console.log(schoolEmail);
    const SchoolData = {
      SchoolName: schoolEmail.SchoolName,
      Contact: schoolEmail.Contact,
      Email: schoolEmail.Email,
      Remarks: schoolEmail.Remarks,
      Contact: schoolEmail.Contact,
      Address: schoolEmail.Address,
      name: schoolEmail.name,
    };
    console.log(SchoolData);
    axios
      .post("http://wdmPHP.sxm9040.uta.cloud/SchoolEmail.php", SchoolData)

      .then((result) => {
        if (result.status === 202) {
          alert("Your Message has been sent. Our Team will contact you soon");
          console.log(result);
          console.log(result.status);
        } else {
          console.log(result);
          console.log(result.status);
        }
      });
  };
  return (
    <div>
      <div className="ResidentSidebar">
        <div className="ResidentSidebarInside">
          <h2>SIREMAR</h2>
        </div>
        <div className="ResidentSideBarItems">
          <ul>
            <li>
              <label
                htmlFor="name"
                onClick={() => home.current.scrollIntoView()}
              >
                Home
              </label>
            </li>

            <li>
              <label
                htmlFor="name"
                onClick={() => home.current.scrollIntoView()}
              >
                View Discounts
              </label>
            </li>
            <li>
              <label
                htmlFor="name"
                onClick={() => schoolregdiv.current.scrollIntoView()}
              >
                Schools Registrations
              </label>
            </li>
            {/* <li>
              <label
                htmlFor="name"
                onClick={() => event.current.scrollIntoView()}
              >
                Manage Appointments
              </label>
            </li> */}
            {/* <li>
            <Link to="/Contact">Chat with an Inspector</Link>
            </li> */}
            <li>
              <Link to="/Login">Log Out</Link>
            </li>
          </ul>
          <div className="Chats">
            <div className="ChatApp">
              {!showChat ? (
                <div className="joinChatContainer">
                  <button onClick={joinRoom}>Chat with Inspector/Admin</button>
                </div>
              ) : (
                <Chat socket={socket} username={data.uName} room={room} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ResidentHome" ref={home}>
        <header className="top">
          
          <h2>Resident Portal - Hello, {data.uName}</h2>

        </header>
        <main>
          <div className="RAdminCard">
            <div className="RAdminR">
              <div className="RAdminBox">
                <div className="RAboxTitle">
                  <h3 ref={discounts}>Discount Offers</h3>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Store Name</td>
                          <td>Discount %</td>
                          <td>Discount Code</td>
                        </tr>
                      </thead>
                      <tbody>
                        {discount.map(function (dis, idx) {
                          return (
                            <tr key={idx}>
                              <td>{dis.Store_Name}</td>
                              <td>{dis.Offers}</td>
                              <td>{dis.Offer_code}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="RAdminCard">
            <div className="RAdminR">
              <div className="RAdminBox">
                <div className="RAboxTitle">
                  <h3>Shopping Places Around</h3>
                </div>

                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Store</td>
                          <td>Address</td>
                          <td>Contact</td>
                        </tr>
                      </thead>
                      <tbody>
                        {shopping.map(function (shopping, idx) {
                          return (
                            <tr key={idx}>
                              <td>{shopping.Business_Name}</td>
                              <td>{shopping.Address}</td>
                              <td>{shopping.Contact_Number}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="RAdminCard">
            <div className="RAdminR">
              <div className="RAdminBox">
                <div className="RAboxTitle">
                  <h3>Expolre Events</h3>
                </div>

                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Event Name</td>
                          <td>Event Day</td>
                          <td>Host</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Events.map(function (Events, idx) {
                          return (
                            <tr key={idx}>
                              <td>{Events.EventName}</td>
                              <td>{Events.EventDay}</td>
                              <td>{Events.Host}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="RAdminCard">
            <div className="RAdminR">
              <div className="RAdminBox">
                <div className="RAboxTitle">
                  <h3>Travel Information</h3>
                </div>

                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Flight</td>
                          <td>Date and Time</td>
                          <td>Destination</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Flights.map(function (Flights, idx) {
                          return (
                            <tr key={idx}>
                              <td>{Flights.Flight_Name}</td>
                              <td>{Flights.Date_Time}</td>
                              <td>{Flights.Destination}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="RAdminCard">
            <div className="RAdminR">
              <div className="RAdminBox">
                <div className="RAboxTitle">
                  <h3>Schools in Margarita</h3>
                </div>

                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>School Name</td>
                          <td>School Address</td>
                          <td>Contact</td>
                        </tr>
                      </thead>
                      <tbody>
                        {Schools.map(function (Schools, idx) {
                          return (
                            <tr key={idx}>
                              <td>{Schools.SchoolName}</td>
                              <td>{Schools.Address}</td>
                              <td>{Schools.Contact}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="RAdminCard">
            <div className="RAdminR">
              <div className="RAdminBox" ref={schoolregdiv}>
                <div className="RAboxTitle">
                  <h3>School Registration</h3>
                </div>
                <form
                  className="formSchool"
                  id="contact-form"
                  onSubmit={OnSchoolRegister}
                >
                  <div className="BoxContent">
                    <div className="List">
                      <table width="100%">
                        
                        <tbody>
                          <tr>
                            <td>
                              {" "}
                              <input
                                type="text"
                                className="input-field"
                                name="name"
                                onChange={onSchoolAdd}
                                value={schoolEmail.name}
                                placeholder="Name"
                                required
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              <input
                                type="email"
                                name="Email"
                                onChange={onSchoolAdd}
                                value={schoolEmail.Email}
                                className="input-field"
                                placeholder="Email Id"
                                required
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              <input
                                type="text"
                                name="Contact"
                                onChange={onSchoolAdd}
                                value={schoolEmail.Contact}
                                className="input-field"
                                placeholder="Contact Number"
                                required
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="text"
                                className="input-field"
                                name="Remarks"
                                onChange={onSchoolAdd}
                                value={schoolEmail.Remarks}
                                placeholder="Comments"
                                required
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                name="SchoolName"
                                onChange={onSchoolAdd}
                                value={schoolEmail.SchoolName}
                              >
                                <option value="Please Select">
                                  Please Select a School
                                </option>
                                {Schools.map(function (Schools, idx) {
                                  return (
                                    <option key={idx}>
                                      {Schools.SchoolName}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {" "}
                              <button onClick={onSchoolAdd} type="submit">
                                Register
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* New Code */}
        </main>
      </div>
    </div>
  );
}

export default Resident;

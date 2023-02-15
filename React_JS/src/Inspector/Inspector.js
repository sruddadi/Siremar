
import React, { useState, useRef, useEffect } from "react";

import "./Inspector.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Chat from "../Components/Chat";
import {io} from 'socket.io-client';
const socket = io.connect("http://localhost:3001");
function Inspector() {
  const [users, setUsers] = useState();

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
  });
  const nav = useNavigate();

  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  const [resd, setResd] = useState([]);
  const [event, setEvent] = useState([]);
  const [scl, setScl] = useState([]);
  const [bus, setBus] = useState([]);
  const [fli, setFli] = useState([]);
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("1234");
  const [showChat, setShowChat] = useState(false);
  const [inspdata, setInspData] = useState([]);
  const { Email } = useParams();
  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const loadUsersName = async () => {
    console.log(Email);
    const res = await axios.get(
            `http://127.0.0.1:8000/api/ResidentName/${Email}`
          );
          if (res.data.status === 200) {
            console.log(res.data);
     
      console.log(res.data.usersfetch[0].uName);

      
  
      
      setInspData({
              uName: res.data.usersfetch[0].uName,
              
            });
      
      
          }
    }

  const joinRoom = () =>{
    // if (username !== "" && room !== ""){
    //     socket.emit("join_room",room);
    //     setShowChat(true);
    // }
    var room = "1234";
    
    socket.emit("join_room",room);
    console.log("room name is");
    console.log(room);
    setShowChat(true);

  };

  const onAddResidents = () => {
   
    
    nav(`/AddResidents/${Email}`);
  };

  const onAddBusiness = () => {
    nav(`/AddBusiness/${Email}`);
   
  };

  const onEventAdd = () => {
    nav(`/AddEvents/${Email}`);
   
  };
  const onFlightAdd = () => {
    nav(`/AddFlights/${Email}`);
   
  };

  const onSchoolAdd = () => {
    nav(`/AddSchools/${Email}`);
   
  };



  const loadUsers = async () => {
    axios.get("http://127.0.0.1:8000/api/LoadResidents").then((res) => {
      console.log(res.data);

      setResd(res.data);
    });
  };

  const loadEvents = async () => {
    axios.get("http://127.0.0.1:8000/api/LoadEvent").then((eve) => {
      console.log(eve.data);

      setEvent(eve.data);
    })      .catch(() => {
      alert("unable to Load Event");
      loadEvents();
    });
  };

  const loadSchool = async () => {
    axios.get("http://127.0.0.1:8000/api/LoadSchool").then((schl) => {
      console.log(schl.data);

      setScl(schl.data);
    });
  };

  const loadBusiness = async () => {
    axios.get("http://127.0.0.1:8000/api/LoadBusiness").then((buss) => {
      console.log(buss.data);

      setBus(buss.data);
    });
  };

  const loadFlight = async () => {
    axios.get("http://127.0.0.1:8000/api/LoadFlight").then((flig) => {
      console.log(flig.data);

      setFli(flig.data);
    });
  };

  const deleteRecord = async (id) => {
    const result = await axios .delete(`http://127.0.0.1:8000/api/DeleteResident/${id}`);
    if(result.data.status === 200)
    {
      console.log(result.data.message);
      alert("Resident Deleted successfully!!!");
      loadUsers();
    }
    // axios
    //   .delete("http://localhost/wdm_php/Resident_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     loadUsers();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     loadUsers();
    //   });
  };

  const delete_Business_Record = async (id) => {
    const result = await axios .delete(`http://127.0.0.1:8000/api/DeleteBusiness/${id}`);
    if(result.data.status === 200)
    {
      console.log(result.data.message);
      alert("Business Deleted Successfully");
      loadBusiness();
    }
    // const tableN = { id: id, tableName: "Business" };
    // axios
    //   .delete("http://localhost/wdm_php/Business_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     loadBusiness();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     loadBusiness();
    //   });
  };

  const delete_Event_Record = async (id) => {
    const result = await axios .delete(`http://127.0.0.1:8000/api/DeleteEvent/${id}`);
    if(result.data.status === 200)
    {
      console.log(result.data.message);
      alert("Event Deleted successfully!!!");
      loadEvents();
    }
    // axios
    //   .delete("http://localhost/wdm_php/Event_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     loadEvents();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     loadEvents();
    //   });
  };
  const delete_Flight_Record = async  (id) => {
    const result = await axios .delete(`http://127.0.0.1:8000/api/DeleteFlight/${id}`);
    if(result.data.status === 200)
    {
      console.log(result.data.message);
      alert("Flight successfully Deleted");
      loadFlight();
    }
    // axios
    //   .delete("http://localhost/wdm_php/Flight_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     loadFlight();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     loadFlight();
    //   });
  };

  const delete_School_Record = async (id) => {

    const result = await axios .delete(`http://127.0.0.1:8000/api/DeleteSchool/${id}`);
    if(result.data.status === 200)
    {
      console.log(result.data.message);
      alert("School Deleted Successfully");
      loadSchool();
    }
      //   axios
      //     .delete("http://wdmPHP.sxm9040.uta.cloud/School_Delete.php", {
      //       data: { id: id },
      //     })
      //     .then((result) => {
      //       alert("deleted");
      //       loadSchool();
      //     })
      //     .catch(() => {
      //       alert("unable to delete");
      //       loadSchool();
      //     });
       };

  useEffect(() => {
    loadUsersName();
    loadUsers();
    loadEvents();
    loadSchool();
    loadBusiness();
    loadFlight();
   
  }, []);

  return (
    <div className="fullScreen">
      <div className="InspectorSideBar">
        <div className="ISidebarInside">
          <h2>SIREMAR</h2>
        </div>
        <div className="InspectorSideBarItems">
          <ul>
            {/* <li>
              <h3>
                <label
                  htmlFor="name"
                  onClick={() => home.current.scrollIntoView()}
                >
                  Home
                </label>
              </h3>
            </li> */}

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
            {/* <li>
              <Link to="/Contact">Chat with an Resident</Link>
            </li> */}
            <li>
              <Link to="/Login">Log Out</Link>
            </li>
          </ul>
          <div className="Chats"> 
            <div className="ChatApp">
              {!showChat ? (
              <div className="joinChatContainer"> 
              
              {/* <input type="text" placeholder= "Please enter your name"  onChange={(e)=> {setUserName("Manasa Manthena");}}/>
              <input type="text" placeholder= "Inspector ID"  onChange={(e)=> {setRoom("1234");}} /> */}
              <button onClick={joinRoom}>Chat with Resident</button>
              </div>
              )
              : (
              <Chat socket={socket} username={inspdata.uName} room={room}/>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="InspectorHome" ref={home}>
        <header className="top">
        <h2>Inspector Portal - Hello, {inspdata.uName}</h2>
          <div className="InspectorDiv">
            <div>
              <h4>Hola, Inspector</h4>
            </div>
          </div>
        </header>

        <main>
          {/* <div className="InspectorCard">
            <div className="InspectorR">
              <div className="InspectorBox">
                <div className="IboxTitle">
                  <h3>Residents of Margarita</h3>
                  <button onClick={() => window.location.reload(false)}>
                    View All...
                  </button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Full Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Move In Date</td>
                          <td>Date of Birth</td>
                          <td>Place of Birth</td>
                          <td>Move In Date</td>
                          <td>Move Out Date</td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Senorita</td>
                          <td>558687623</td>
                          <td>sfahgfs@gmail.com</td>
                          <td>05-07-1996</td>
                          <td>Margarita</td>
                          <td>05-07-2022</td>
                          <td>05-07-2023</td>
                          <td>05-07-2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="InspectorCard" ref={res}>
            <div className="InspectorR">
              <div className="InspectorBox">
                <div className="IboxTitle">
                  <h3>Manage Margarita Residents</h3>
                  <button onClick={onAddResidents}>Add Residents</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No</td>
                          <td>Full Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Password</td>
                          <td>Move In Date</td>
                          <td>Move Out Date</td>
                          <td>Date of Birth</td>
                          <td>Place of Birth</td>

                          <td></td>
                          <td></td>
                        </tr>
                      </thead>

                      <tbody>
                        {resd.map(function (resd1, key1) {
                          return (
                            <tr key={key1}>
                              <td>{key1 + 1}</td>
                              <td>{resd1.uName}</td>
                              <td>{resd1.Contact}</td>
                              <td>{resd1.Email}</td>
                              <td>{resd1.Password}</td>
                              <td>{resd1.MoveInDate}</td>
                              <td>{resd1.MoveOutDate}</td>
                              <td>{resd1.DateOfBirth}</td>
                              <td>{resd1.PlaceOfBirth}</td>
                              <td>
                                <button>
                                  <Link to={`/ModifyRes/${resd1.id}/${Email}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button onClick={() => deleteRecord(resd1.id)}>
                                  DELETE
                                </button>
                              </td>
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

          <div className="InspectorCard" ref={business}>
            <div className="InspectorR">
              <div className="InspectorBox">
                <div className="IboxTitle">
                  <h3>Manage Businesses in Margarita</h3>
                  <button onClick={onAddBusiness}>Add Business</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No.</td>
                          <td>Business Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Address</td>
                          <td>Offers</td>
                          <td>Offer code</td>
                          <td>Remarks</td>

                          <td></td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {bus.map(function (bus1, key2) {
                          return (
                            <tr key={key2}>
                              <td>{key2 + 1}</td>
                              <td>{bus1.Business_Name}</td>
                              <td>{bus1.Contact_Number}</td>
                              <td>{bus1.Email}</td>
                              <td>{bus1.Address}</td>
                              <td>{bus1.Offers}</td>
                              <td>{bus1.Offer_code}</td>
                              <td>{bus1.Place}</td>
                              <td>
                                <button>
                                  <Link to={`/ModifyBusiness/${bus1.id}/${Email}`}>
                                  
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_Business_Record(bus1.id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
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

          <div className="InspectorCard">
            <div className="InspectorR">
              <div className="InspectorBox">
                <div className="IboxTitle">
                  <h3>Manage Events in Margarita</h3>
                  <button onClick={onEventAdd}>Add Events</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No.</td>
                          <td>Event Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Address</td>
                          <td>Host</td>
                          <td>Event Day</td>
                          <td>Remarks</td>

                          <td></td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                      {event.map(function (event1, key2) {
                          return (
                            <tr key={key2}>
                              <td>{key2 + 1}</td>
                              <td>{event1.EventName}</td>
                              <td>{event1.Contact}</td>
                              <td>{event1.Email}</td>
                              <td>{event1.Address}</td>
                              <td>{event1.Host}</td>
                              <td>{event1.EventDay}</td>
                              <td>{event1.Remarks}</td>

                              <td>
                                <button>
                                  <Link to={`/ModifyEvent/${event1.id}/${Email}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() => delete_Event_Record(event1.id)}
                                >
                                  Delete
                                </button>
                              </td>
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

          <div className="InspectorCard">
            <div className="InspectorR">
              <div className="InspectorBox">
                <div className="IboxTitle">
                  <h3>Manage Flights details in Margarita</h3>
                  <button onClick={onFlightAdd}>Add Flights</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No.</td>
                          <td>Flight Name</td>
                          <td>Date and Time</td>
                          <td>Destination</td>

                          <td>Offers</td>
                          <td>Offer code</td>
                          <td>Remarks</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {fli.map(function (flight1, key4) {
                          return (
                            <tr key={key4}>
                              <td>{key4 + 1}</td>
                              <td>{flight1.Flight_Name}</td>
                              <td>{flight1.Date_Time}</td>
                              <td>{flight1.Destination}</td>
                              <td>{flight1.Offers}</td>
                              <td>{flight1.Offer_code}</td>

                              <td>{flight1.Remarks}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>
                                <button>
                                  <Link to={`/ModifyFlight/${flight1.id}/${Email}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_Flight_Record(flight1.id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
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

          <div className="InspectorCard">
            <div className="InspectorR">
              <div className="InspectorBox">
                <div className="IboxTitle">
                  <h3>Manage Schools in Margarita</h3>
                  <button onClick={onSchoolAdd}>Add Schools</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.NO.</td>
                          <td>School Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Address</td>
                          <td>Remarks</td>

                          <td></td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {scl.map(function (school1, key5) {
                          return (
                            <tr key={key5}>
                              <td>{key5 + 1}</td>
                              <td>{school1.SchoolName}</td>
                              <td>{school1.Contact}</td>
                              <td>{school1.Email}</td>
                              <td>{school1.Address}</td>

                              <td>{school1.Remarks}</td>
                              <td>
                                <button><Link to={`/ModifySchool/${school1.id}/${Email}`}>
                                    Modify
                                  </Link></button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_School_Record(school1.id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
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
        </main>
      </div>
    </div>
  );
}

export default Inspector;

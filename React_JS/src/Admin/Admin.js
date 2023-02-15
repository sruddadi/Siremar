/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import { useNavigate ,useParams} from "react-router-dom";
import Chat from "../Components/Chat";
import { io } from "socket.io-client";

import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

const socket = io.connect("http://localhost:3001");
function Admin() {
  const [users, setUsers] = useState();
  const home = useRef(null);
  const res = useRef(null);
  const ins = useRef(null);

  const business = useRef(null);
  const [benefits, setBenefits] = useState([]);
  const [Business, setBusiness] = useState([]);
  const [Flights, setFlights] = useState([]);
  const [Schools, setSchools] = useState([]);
  const [Events, setEvents] = useState([]);
  const [Inspector, setInspector] = useState([]);
  const [resdCount, setResdCount] = useState([]);
  const [schoolCount, setSchoolCount] = useState([]);
  const [FlightCount, setFlightCount] = useState([]);
  const [TotalCount, setTotalCount] = useState([]);
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("1234");
  const [showChat, setShowChat] = useState(false);
  const [inspdata, setInspData] = useState([]);
  const nav = useNavigate();
  const { Email } = useParams();
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

  const joinRoom = () => {
    // if (username !== "" && room !== ""){
    //     socket.emit("join_room",room);
    //     setShowChat(true);
    // }
    var room = "1234";
    var username = "Manasa Manthena";
    socket.emit("join_room", room);
    console.log("room name is");
    console.log(room);
    setShowChat(true);
  };
  const [data, setData] = useState({
    datasets: [
      {
        data: [],
      },
    ],
    labels: [],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost/wdm_php/ResidentFetch.php")
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("resss", res);
          const label = [];
          const data = [];
          for (var i of res) {
            label.push(i.Role);
            data.push(i.countR);
          }
          setData({
            datasets: [
              {
                data: data,
                backgroundColor: ["Crimson", "DarkSlateGray", "LightBlue"],
              },
            ],
            labels: label,
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  const [bardata, setBarData] = useState({
    datasets: [
      {
        bardata: [],
      },
    ],
    labels: [],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost/wdm_php/BDiscountfetch.php")
        .then((bardata) => {
          const res = bardata.json();
          return res;
        })
        .then((res) => {
          console.log("resss", res);
          const label = [];
          const bardata = [];
          for (var i of res) {
            label.push(i.Business_Name);
            bardata.push(i.Offers);
          }
          setBarData({
            datasets: [
              {
                data: bardata,
                backgroundColor: [
                  "Crimson",
                  "DarkSlateGray",
                  "LightBlue",
                  "#F0F8FF",
                  "#DEB887",
                ],
              },
            ],
            labels: label,
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  const [flightdata, setFlightData] = useState({
    datasets: [
      {
        flightdata: [],
      },
    ],
    labels: [],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost/wdm_php/FlightDiscountFetch.php")
        .then((flightdata) => {
          const res = flightdata.json();
          return res;
        })
        .then((res) => {
          console.log("resss", res);
          const label = [];
          const flightdata = [];
          for (var i of res) {
            label.push(i.Flight_Name);
            flightdata.push(i.Offers);
          }
          setFlightData({
            datasets: [
              {
                data: flightdata,
                backgroundColor: [
                  "Crimson",
                  "DarkSlateGray",
                  "LightBlue",
                  "Gold",
                ],
              },
            ],
            labels: label,
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  const [musersdata, setMUsersData] = useState({
    datasets: [
      {
        musersdata: [],
      },
    ],
    labels: [],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost/wdm_php/ActiveInactiveFetch.php")
        .then((musersdata) => {
          const res = musersdata.json();
          return res;
        })
        .then((res) => {
          console.log("resss", res);
          const label = [];
          const musersdata = [];
          for (var i of res) {
            musersdata.push(i.uCount);
          }
          setMUsersData({
            datasets: [
              {
                data: musersdata,
                backgroundColor: [
                  "Crimson",
                  "DarkSlateGray",
                  "LightBlue",
                  "Gold",
                ],
              },
            ],
            labels: [
              "InActive Residents of Margarita",
              "Active Residents of Margarita",
            ],
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  // const [graph, setGraph1] = useState([]);
  // const [udisplay, setUDisplay] = useState([]);

  // const getuDisplay = async () => {
  //   axios
  //     .get("http://localhost/wdm_php/ResidentFetch.php")

  //     .then((response) => {
  //       console.log(response.data);
  //       setUDisplay(response.data);
  //     });
  // };
  // console.log(udisplay);
  // useEffect(() => {
  //   getuDisplay();
  // }, []);

  // const selectChart = () => {
  //   axios.get("http://localhost/wdm_php/ResidentFetch.php").then((res) => {
  //     console.log(res.data);
  //     var userData = res.data;
  //     let Role = [];
  //     let countR = [];

  //     userData.forEach((element) => {
  //       Role.push(element.Role);
  //       countR.push(element.countR);
  //     });
  //     console.log(userData);

  //     setGraph1({
  //       labels: Role,
  //       datasets: [
  //         {
  //           label: "In Billions Dollar",
  //           backgroundColor: ["green", "red", "blue"],
  //           borderWidth: 0,
  //           data: countR,
  //         },
  //       ],
  //     });
  //   });
  // };
  // console.log(graph);
  // useEffect(() => {
  //   selectChart();
  // }, []);
  const getResdCount = () => {
    axios.get("http://127.0.0.1:8000/api/ResidentCount").then((res) => {
      console.log("Resident Count is");
      console.log(res.data);
      setResdCount(res.data);
    });
  };
  useEffect(() => {
    loadUsersName();
    getResdCount();
  }, []);

  const getTotalCount = () => {
    axios.get("http://127.0.0.1:8000/api/TotalCount").then((res) => {
      console.log("Resident Count is");
      console.log(res.data);
      setTotalCount(res.data);
    });
  };
  useEffect(() => {
    getTotalCount();
  }, []);

  const getSchoolCount = () => {
    axios.get("http://127.0.0.1:8000/api/SchoolCount").then((res) => {
      console.log("Resident Count is");
      console.log(res.data);
      setSchoolCount(res.data);
    });
  };
  useEffect(() => {
    getSchoolCount();
  }, []);

  const getFlightCount = () => {
    axios.get("http://127.0.0.1:8000/api/FlightCount").then((res) => {
      console.log("Resident Count is");
      console.log(res.data);
      setFlightCount(res.data);
    });
  };
  useEffect(() => {
    getFlightCount();
  }, []);

  const getBenefits = () => {
    axios.get("http://127.0.0.1:8000/api/LoadResidents").then((res) => {
      console.log(res.data);
      setBenefits(res.data);
    });
  };
  const onAddResidents = () => {
    // alert("successfully registered!!!");
    
    nav(`/AddResidentsAdmin/${Email}`);
  };
  const onAddInspectors = () => {
    // alert("successfully registered!!!");
    nav(`/AddInspector/${Email}`);
   
  };
  const onAddBusiness = () => {
    // alert("successfully registered!!!");
    nav(`/AddBusinessAdmin/${Email}`);
  
  };

  const onEventAdd = () => {
    // alert("successfully registered!!!");
    nav(`/AddEventsAdmin/${Email}`);
    
  };
  const onFlightAdd = () => {
    // alert("successfully registered!!!");
    nav(`/AddFlights/${Email}`);
    
  };

  const onSchoolAdd = () => {
    // alert("successfully registered!!!");
    nav(`/AddSchools/${Email}`);
   
  };

  const getBusiness = () => {
    axios.get("http://127.0.0.1:8000/api/LoadBusiness").then((res) => {
      console.log(res.data);
      setBusiness(res.data);
    });
  };

  const getFlights = () => {
    axios.get("http://127.0.0.1:8000/api/LoadFlight").then((res) => {
      console.log(res.data);
      setFlights(res.data);
    });
  };

  const getSchools = () => {
    axios.get("http://127.0.0.1:8000/api/LoadSchool").then((res) => {
      console.log(res.data);
      setSchools(res.data);
    });
  };

  const getEvents = () => {
    axios.get("http://127.0.0.1:8000/api/LoadEvent").then((res) => {
      console.log(res.data);
      setEvents(res.data);
    });
  };

  const getInspector = () => {
    axios.get("http://127.0.0.1:8000/api/LoadInspector").then((res) => {
      console.log(res.data);
      setInspector(res.data);
    });
  };

  const deleteRecord = async (id) => {
    const result = await axios.delete(
      `http://127.0.0.1:8000/api/DeleteResident/${id}`
    );
    if (result.data.status === 200) {
      console.log(result.data.message);
      alert("Resident Deleted successfully!!!");
      getBenefits();
    }
    // axios
    //   .delete("http://localhost/wdm_php/Resident_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     getBenefits();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     getBenefits();
    //   });
  };

  const delete_Business_Record = async (id) => {
    const result = await axios.delete(
      `http://127.0.0.1:8000/api/DeleteBusiness/${id}`
    );
    if (result.data.status === 200) {
      console.log(result.data.message);
      alert("Business Deleted Successfully");
      getBusiness();
    }
    // const tableN = { id: id, tableName: "Business" };
    // axios
    //   .delete("http://localhost/wdm_php/Business_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     getBusiness();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     getBusiness();
    //   });
  };

  const delete_Event_Record = async (id) => {
    const result = await axios.delete(
      `http://127.0.0.1:8000/api/DeleteEvent/${id}`
    );
    if (result.data.status === 200) {
      console.log(result.data.message);
      alert("Event Deleted successfully!!!");
      getEvents();
    }
    // axios
    //   .delete("http://localhost/wdm_php/Event_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     getEvents();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     getEvents();
    //   });
  };
  const delete_Flight_Record = async (id) => {
    const result = await axios.delete(
      `http://127.0.0.1:8000/api/DeleteFlight/${id}`
    );
    if (result.data.status === 200) {
      console.log(result.data.message);
      alert("Flight successfully Deleted");
      getFlights();
    }
    // axios
    //   .delete("http://localhost/wdm_php/light_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     getFlights();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     getFlights();
    //   });
  };

  const delete_School_Record = async (id) => {
    const result = await axios.delete(
      `http://127.0.0.1:8000/api/DeleteSchool/${id}`
    );
    if (result.data.status === 200) {
      console.log(result.data.message);
      alert("School Deleted Successfully");
      getSchools();
    }
    // axios
    //   .delete("http://localhost/wdm_php/School_Delete.php", {
    //     data: { id: id },
    //   })
    //   .then((result) => {
    //     alert("deleted");
    //     getSchools();
    //   })
    //   .catch(() => {
    //     alert("unable to delete");
    //     getSchools();
    //   });
  };

  const delete_Ins_Record = (id) => {
    axios
      .delete("http://localhost/wdm_php/Ins_Delete.php", {
        data: { id: id },
      })
      .then((result) => {
        alert("deleted");
        getInspector();
      })
      .catch(() => {
        alert("unable to delete");
        getInspector();
      });
  };

  useEffect(() => {
    getBenefits();
    getInspector();
    getBusiness();
    getFlights();
    getSchools();
    getEvents();
  }, []);

  const onSubmitLogin = () => {
    alert(`You have Sucessfully Registered  ${users}`);
  };
  return (
    <div>
      <div className="AdminSideBar">
        <div className="AdminSidebarInside">
          <h2>SIREMAR</h2>
        </div>
        <div className="AdminSideBarItems">
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
                onClick={() => ins.current.scrollIntoView()}
              >
                Manage Inspector
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
                  {/* <h4>Chat with an Inspector</h4> */}
                  {/* <input type="text" placeholder= "Please enter your name"  onChange={(e)=> {setUserName("Manasa Manthena");}}/>
              <input type="text" placeholder= "Inspector ID"  onChange={(e)=> {setRoom("1234");}} /> */}
                  <button onClick={joinRoom}>Chat with Resident</button>
                </div>
              ) : (
                <Chat socket={socket} username={inspdata.uName} room={room} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="AdminHome" ref={home}>
        <header className="top">
        <h2>Admin Portal - Hello, {inspdata.uName}</h2>
        </header>

        <main>
          <div className="Dashboard">
            <div className="DashBoardItem">
              {resdCount.map(function (resdCount, idx) {
                return (
                  <div key={idx}>
                    <h1>{resdCount.countB}</h1>
                    Total Residents
                  </div>
                );
              })}
            </div>

            <div className="DashBoardItem">
              {schoolCount.map(function (schoolCount, idx) {
                return (
                  <div key={idx}>
                    <h1>{schoolCount.sCount}</h1>
                    School Registrations
                  </div>
                );
              })}
            </div>

            <div className="DashBoardItem">
              {FlightCount.map(function (FlightCount, idx) {
                return (
                  <div key={idx}>
                    <h1>{FlightCount.sCount}</h1>
                    Flight Bookings
                  </div>
                );
              })}
            </div>

            <div className="DashBoardItem">
              {TotalCount.map(function (TotalCount, idx) {
                return (
                  <div key={idx}>
                    <h1>{TotalCount.TCount}</h1>
                    Margarita Population
                  </div>
                );
              })}
            </div>
          </div>
          <div className="AdminCard">
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
                  <h3>
                    <b>Dashboard</b>
                  </h3>
                </div>
                <div className="BoxContent">
                  <div className="List" style={{ width: "40%", height: "20%" }}>
                    <Pie data={data} />
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="List" style={{ width: "40%", height: "20%" }}>
                    <Pie data={bardata} />
                  </div>
                </div>
                <div className="BoxContent">
                  <div className="List" style={{ width: "40%", height: "20%" }}>
                    <Pie data={flightdata} />
                  </div>
                  <div className="List" style={{ width: "40%", height: "20%" }}>
                    <Pie data={musersdata} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="AdminCard" ref={res}>
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
                  <h3>Manage Margarita Residents</h3>
                  <button onClick={onAddResidents}>Add Residents</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No.</td>
                          <td>Full Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Move In Date</td>
                          <td>Move Out Date</td>
                          <td>Date of Birth</td>
                          <td>Place of Birth</td>

                          <td></td>
                          <td></td>
                        </tr>
                      </thead>

                      <tbody>
                        {benefits.map(function (benefit, idx) {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{benefit.uName}</td>
                              <td>{benefit.Contact}</td>
                              <td>{benefit.Email}</td>
                              <td>{benefit.MoveInDate}</td>
                              <td>{benefit.MoveOutDate}</td>
                              <td>{benefit.DateOfBirth}</td>
                              <td>{benefit.PlaceOfBirth}</td>
                              <td>
                                <button>
                                  {" "}
                                  <Link to={`/ModifyResAdmin/${benefit.id}/${Email}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() => deleteRecord(benefit.id)}
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

          <div className="AdminCard" ref={ins}>
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
                  <h3>Manage Inspector </h3>
                  <button onClick={onAddInspectors}>Add Inspector</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No.</td>
                          <td>Inspector Name</td>
                          <td>Contact Number</td>
                          <td>Email</td>
                          <td>Date of Birth</td>
                          <td>Place of Birth</td>
                          <td>Role</td>
                          <td></td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        {Inspector.map(function (Inspector, idx) {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{Inspector.uName}</td>
                              <td>{Inspector.Contact}</td>
                              <td>{Inspector.Email}</td>
                              <td>{Inspector.DateOfBirth}</td>
                              <td>{Inspector.PlaceOfBirth}</td>
                              <td>{Inspector.Role}</td>
                              <td>
                                <button>
                                  <Link to={`/ModifyInsAdmin/${Inspector.id}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_Ins_Record(Inspector.id)
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

          <div className="AdminCard">
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
                  <h3>Manage Business in Margarita</h3>
                  <button onClick={onAddBusiness}>Add Business</button>
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
                        {Business.map(function (Business, idx) {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{Business.Business_Name}</td>
                              <td>{Business.Contact_Number}</td>
                              <td>{Business.Email}</td>
                              <td>{Business.Address}</td>
                              <td>{Business.Offers}</td>
                              <td>{Business.Offer_code}</td>
                              <td>{Business.Place}</td>
                              <td>
                                <button>
                                  <Link
                                    to={`/ModifyBusinessAdmin/${Business.id}`}
                                  >
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_Business_Record(Business.id)
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

          <div className="AdminCard">
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
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
                        {Events.map(function (event1, idx) {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{event1.EventName}</td>
                              <td>{event1.Contact}</td>
                              <td>{event1.Email}</td>
                              <td>{event1.Address}</td>
                              <td>{event1.Host}</td>
                              <td>{event1.EventDay}</td>
                              <td>{event1.Remarks}</td>
                              <td>
                                <button>
                                  {
                                    <Link to={`/ModifyEventAdmin/${event1.id}`}>
                                      Modify
                                    </Link>
                                  }
                                </button>
                              </td>
                              <td>
                                {
                                  <button
                                    onClick={() =>
                                      delete_Event_Record(event1.id)
                                    }
                                  >
                                    Delete
                                  </button>
                                }
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

          <div className="AdminCard">
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
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
                        </tr>
                      </thead>

                      <tbody>
                        {Flights.map(function (Flights, idx) {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{Flights.Flight_Name}</td>
                              <td>{Flights.Date_Time}</td>
                              <td>{Flights.Destination}</td>
                              <td>{Flights.Offers}</td>
                              <td>{Flights.Offer_code}</td>
                              <td>{Flights.Remarks}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>
                                <button>
                                  <Link to={`/ModifyFlightAdmin/${Flights.id}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_Flight_Record(Flights.id)
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

          <div className="AdminCard">
            <div className="AdminR">
              <div className="AdminBox">
                <div className="AboxTitle">
                  <h3>Manage Schools in Margarita</h3>
                  <button onClick={onSchoolAdd}>Add Schools</button>
                </div>
                <div className="BoxContent">
                  <div className="List">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>S.No.</td>
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
                        {Schools.map(function (Schools, idx) {
                          return (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{Schools.SchoolName}</td>
                              <td>{Schools.Contact}</td>
                              <td>{Schools.Email}</td>
                              <td>{Schools.Address}</td>
                              <td>{Schools.Remarks}</td>
                              <td>
                                <button>
                                  <Link to={`/ModifySchoolAdmin/${Schools.id}`}>
                                    Modify
                                  </Link>
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    delete_School_Record(Schools.id)
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
export default Admin;

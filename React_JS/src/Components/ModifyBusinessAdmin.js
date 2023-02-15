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
    Business_Name: "",
    Email: "",
    Contact_Number: "",
    Address: "",
    Offers: "",
    Offer_code: "",
    Place: "",
    id: "",
  });

  const onClickSubmit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const loadUsers = async () => {

    const res = await axios.get(`http://127.0.0.1:8000/api/BusinessFetch/${id}`);
    if (res.data.status === 200) {
      console.log(res.data);
      
      console.log(res.data.findBusiness.Business_Name);
      

      setData({
        Business_Name:res.data.findBusiness.Business_Name,
        Contact_Number: res.data.findBusiness.Contact_Number,
        Address: res.data.findBusiness.Address,
        Email: res.data.findBusiness.Email,
        Offers:res.data.findBusiness.Offers,
        Offer_code:res.data.findBusiness.Offer_code,
        Place:res.data.findBusiness.Place,
        id: res.data.findBusiness.id,
      });
    }
    // axios
    //   .get("http://localhost/wdm_php/Edit_Business_fetch.php?id=" + id)
    //   .then((res) => {
    //     console.log(res.data);
    //     var mydata = res.data;
    //     console.log(mydata[0].Business_Name);
    //     console.log(mydata);

    //     setData({
    //       Business_Name: mydata[0].Business_Name,
    //       Email: mydata[0].Email,
    //       Contact_Number: mydata[0].Contact_Number,
    //       Address: mydata[0].Address,
    //       Offers: mydata[0].Offers,
    //       Offer_code: mydata[0].Offer_code,
    //       Place: mydata[0].Place,
    //       id: mydata[0].id,
    //     });
    //   });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(data.Business_Name);
    const nextData = {
      id: data.id,
      Business_Name: data.Business_Name,
      Email: data.Email,
      Contact_Number: data.Contact_Number,
      Address: data.Address,
      Offers: data.Offers,
      Offer_code: data.Offer_code,
      Place: data.Place,
    };
    console.log("after submit" + nextData);
    const res = await axios.put(
            `http://127.0.0.1:8000/api/ModifyBusiness/${id}`,
            nextData
          );
          if (res.data.status === 200){
            console.log(res.data.message);
            alert(res.data.message);
          }
    // axios
    //   .post("http://localhost/wdm_php/Business_Update.php", nextData)
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

    // window.location.reload(false);
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
          <h2>Manage Businesse</h2>
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
              <h2>Manage Business </h2>

              <label htmlFor="name" style={{ marginTop: "20px" }}>
                {" "}
                User Name:
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Business Name"
                name="Business_Name"
                value={data.Business_Name}
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
                name="Contact_Number"
                placeholder="Contact Number"
                onChange={onClickSubmit}
                value={data.Contact_Number}
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
                Place:
              </label>
              <input
                type="text"
                className="input-field"
                name="Place"
                placeholder="Place"
                onChange={onClickSubmit}
                value={data.Place}
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

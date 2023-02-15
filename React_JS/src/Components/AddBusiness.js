/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React, { useState, useRef } from "react";
import "../Styles/AddBusiness.css";
import BgImage from "../Assets/Island.jpeg";
import { useNavigate, Link,useParams } from "react-router-dom";
import axios from "axios";
function AddBusiness() {
  const home = useRef(null);
  const res = useRef(null);
  const business = useRef(null);
  
  const nav = useNavigate();
  const [businessAdd, setbusinessAdd] = useState({
    Business_Name: "",
    Contact_Number: "",
    Email: "",
    Address: "",
    Offers: "",
    Offer_code: "",
    Place: "",
  });

  const onBusinessChange = (e) => {
    setbusinessAdd({ ...businessAdd, [e.target.name]: e.target.value });
    console.log(businessAdd);
  };
  const onBusinessAdd = async (e) => {
    e.preventDefault();
    console.log(businessAdd);
    const BusinessData = {
      Business_Name: businessAdd.Business_Name,
      Contact_Number: businessAdd.Contact_Number,
      Email: businessAdd.Email,
      Address: businessAdd.Address,
      Offers: businessAdd.Offers,
      Offer_code: businessAdd.Offer_code,
      Place: businessAdd.Place,
    };
    console.log(BusinessData);


    const res = await axios.post(
            "http://127.0.0.1:8000/api/Business",
            BusinessData
          );
          if (res.data.status === 200){
            console.log(res.data.message);
            alert(res.data.message);
      setbusinessAdd({
        Business_Name: "",
    Contact_Number: "",
    Email: "",
    Address: "",
    Offers: "",
    Offer_code: "",
    Place: "",
      });
          }
    // axios
    //   .post("http://localhost/wdm_php/BusinessAdd.php", BusinessData)

    //   .then((result) => {
    //     if (result.status == 202) {
         
    //       console.log(result);
    //       console.log(result.status);
    //     } else {
         
    //       console.log(result);
    //       nav("/Inspector");
    //       console.log(result.status);
    //     }
    //   });
  };
  const { Email } = useParams();
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
        
            <form id="login" class="input" action="" onSubmit={onBusinessAdd}>
              <h2>Manage Business</h2>
              <label>Business Name</label>
              <input
                              type="text"
                              className="input-field"
                              placeholder="Business Name"
                              name="Business_Name"
                              onChange={onBusinessChange}
                              value={businessAdd.Business_Name}
                              required
                            ></input>
                             <label>Contact Number</label>
                        <input
                              type="text"
                              className="input-field"
                              placeholder="Contact Number"
                              name="Contact_Number"
                              onChange={onBusinessChange}
                              value={businessAdd.Contact_Number}
                              required
                            ></input>
                            <label>Email Id</label>
                            <input
                              type="email"
                              className="input-field"
                              placeholder="email"
                              name="Email"
                              onChange={onBusinessChange}
                              value={businessAdd.Email}
                              required
                            ></input>
                            <label>Address</label>
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Address"
                              name="Address"
                              onChange={onBusinessChange}
                              value={businessAdd.Address}
                              required
                            ></input>
                             <label>Offers</label>
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Offer"
                              name="Offers"
                              onChange={onBusinessChange}
                              value={businessAdd.Offers}
                            ></input>
                            <label>Offer Code</label>
                            <input
                              type="text"
                              className="input-field"
                              placeholder="Offer code"
                              name="Offer_code"
                              onChange={onBusinessChange}
                              value={businessAdd.Offer_code}
                            ></input>
                        <label>Remarks</label>
                         <input
                              type="text"
                              className="input-field"
                              placeholder="Remarks"
                              name="Place"
                              onChange={onBusinessChange}
                              value={businessAdd.Place}
                            ></input>
              <button type="submit" onClick={onBusinessAdd} className="SubmitBtn">
                Register
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
export default AddBusiness;

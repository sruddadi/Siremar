
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";
import Login from "./Components/Login";

import Resident from "./Residents/Resident";
import Inspector from "./Inspector/Inspector";
import Admin from "./Admin/Admin";

import AddResidents from "./Components/AddResidents";
import ModifyRes from "./Components/ModifyRes";
import AddBusiness from "./Components/AddBusiness";
import AddEvents from "./Components/AddEvents";
import AddFlights from "./Components/AddFlights";
import AddSchools from "./Components/AddSchools";
import AddResidentsAdmin from "./Components/AddResidentAdmin";
import AddInspector from "./Components/AddInspector";
import AddBusinessAdmin from "./Components/AddBusinessAdmin";
import AddEventsAdmin from "./Components/AddEventsAdmin";
import AddFlightsAdmin from "./Components/AddFlightsAdmin";
import AddSchoolAdmin from "./Components/AddSchoolAdmin";
import ModifyIns from "./Components/ModifyIns";
import ModifyBusiness from "./Components/ModifyBusiness";
import ModifyEvent from "./Components/ModifyEvent";
import ModifyFlight from "./Components/ModifyFlight";
import ModifySchool from "./Components/ModifySchool";
import ModifyBusinessAdmin from "./Components/ModifyBusinessAdmin";
import ModifyEventAdmin from "./Components/ModifyEventAdmin";
import ModifyResAdmin from "./Components/ModifyResAdmin";
import ModifyInsAdmin from "./Components/ModifyInsAdmin";
import ModifyFlightAdmin from "./Components/ModifyFlightAdmin";
import ModifySchoolAdmin from "./Components/ModifySchoolAdmin";
import SupportAdmin from "./Components/SupportAdmin";
import ForgotPassword from "./Components/ForgotPassword";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="ModifyRes/:id/:Email" element={<ModifyRes />} />
        <Route path="ModifyIns/:id/:Email" element={<ModifyIns />} />
        <Route path="ModifyBusiness/:id/:Email" element={<ModifyBusiness />} />
        <Route path="ModifyEvent/:id/:Email" element={<ModifyEvent />} />
        <Route path="ModifyFlight/:id/:Email" element={<ModifyFlight />} />
        <Route path="ModifySchool/:id/:Email" element={<ModifySchool />} />
        <Route path="ModifyBusinessAdmin/:id/:Email" element={<ModifyBusinessAdmin />} />
        <Route path="ModifyResAdmin/:id/:Email" element={<ModifyResAdmin />} />
        <Route path="ModifyInsAdmin/:id/:Email" element={<ModifyInsAdmin />} />
        <Route path="ModifyEventAdmin/:id/:Email" element={<ModifyEventAdmin />} />
        <Route path="ModifyFlightAdmin/:id/:Email" element={<ModifyFlightAdmin />} />
        <Route path="ModifySchoolAdmin/:id/:Email" element={<ModifySchoolAdmin />} />
       
        <Route path="AddBusiness/:Email" element={<AddBusiness />} />
          <Route path="AddEvents/:Email" element={<AddEvents />} />
          <Route path="AddFlights/:Email" element={<AddFlights />} />
          <Route path="AddSchools/:Email" element={<AddSchools />} />
          <Route path="AddResidentsAdmin/:Email" element={<AddResidentsAdmin />} />
          <Route path="AddInspector/:Email" element={<AddInspector />} />
          <Route path="AddBusinessAdmin/:Email" element={<AddBusinessAdmin />} />
          <Route path="AddEventsAdmin/:Email" element={<AddEventsAdmin />} />
          <Route path="AddFlightsAdmin/:Email" element={<AddFlightsAdmin />} />
          <Route path="AddSchoolAdmin/:Email" element={<AddSchoolAdmin />} />
          <Route path="AddResidents/:Email" element={<AddResidents />} />
          </Routes>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Services" element={<Services />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="Resident/:Email" element={<Resident />} />
          <Route path="Inspector/:Email" element={<Inspector />} />
          <Route path="Admin/:Email" element={<Admin />} />
         
        
          
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

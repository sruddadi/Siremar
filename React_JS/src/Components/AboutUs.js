/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React from 'react'
import BgImage2 from '../Assets/Signup.jpeg'
import BgImage1 from '../Assets/About.jpeg'
import '../Styles/AboutUs.css'

function AboutUs() {
  return (
    <div className="about"  >
      <div className= "Seperator"></div>
      <div className="aboutTop" style={{ backgroundImage:  `url(${BgImage2})`,backgroundSize:'cover',width:'100%', height:'100%' }}>     </div>
      <div className="aboutBottom" tyle={{ backgroundImage:  `url(${BgImage1})`,backgroundSize:'cover',width:'100%', height:'100%' }}>
      <h1>About Us</h1>
      <br></br>
      <p>Siremar allows citizens to register as a resident. Siremar allows only the person born on the island or settled in island for at least a year to register as Resident. With this the government can track the active residents. Once the users are registered, they can check out the offers on Travel, Restaurants, events, and many more around them. Residents can also schedule appoints through the website for school, hospitals, restaurants, and other services. Residents should update their address and contact details if there are any changes. They must also inform the inspectors if they plan to moveout from the Island.</p>

      </div>
    </div>
  )
}

export default AboutUs
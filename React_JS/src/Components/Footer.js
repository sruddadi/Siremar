/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React from 'react'
import insta from '../Assets/insta1.png'
import '../Styles/Footer.css'
function Footer() {
  return (
    <div className="footer">
        <div className="Social">
        <img src={insta}/>
            <p>
                &copy; 2022 Siemer@uta.com
            </p>
        </div>

    </div>
  )
}

export default Footer
import React from 'react'
import {ServiceList} from '../ServicesHelpers/ServiceList';
import ServiceItems from './ServiceItems';
import '../Styles/Services.css'
import BgImage from '../Assets/Ser.jpeg';
function Services() {
  const onSubmitLogin =()=> {
    alert("Login to access services")
  }
  return (
    <div className="Services" style={{ backgroundImage:  `url(${BgImage})`,backgroundSize:'cover'}}>
     <h1 className="ServiceTitle"> 
        Siemer Island Services for Residents
     </h1>
     <div className="ServicesList" onClick = {onSubmitLogin}>
        {ServiceList.map((serviceItem,key)=>
        { 
            key = {key}
            return <ServiceItems   image={serviceItem.image} name={serviceItem.name} text={serviceItem.content}/>
        
        })}
     </div>
    </div>
  );
}

export default Services
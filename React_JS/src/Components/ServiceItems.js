import React from 'react'
import '../Styles/Services.css'
function ServiceItems({image,name,text}) {
  return (
    <div className="ServiceItem">
        <div style={{ backgroundImage:  `url(${image})` }}>
            
        
        <h1>
            {name}
        </h1>
        <p>
            {text}
        </p>
        </div>
    </div>
  )
}

export default ServiceItems
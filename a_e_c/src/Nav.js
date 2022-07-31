import React from "react"
import airbnbLogo from "./img/airbnb-logo.png"

export default function Nav(){
   return( 
    <div className = "navbar">
   <img src = {airbnbLogo} alt = "airbnb logo" className = "logo"></img>
   </div>
   );
}
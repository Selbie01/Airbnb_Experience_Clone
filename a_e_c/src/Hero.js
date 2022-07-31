import React from 'react'
import groupPhoto from "./img/Group 77.png"

export default function Hero(){
    return (
        <div className='Hero'>
        <img src = {groupPhoto} alt = "" className = "heroPhotos"></img>
        <h1 className='heroHeader'>Online Experiences</h1>
        <p className = "heroText">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    );
}
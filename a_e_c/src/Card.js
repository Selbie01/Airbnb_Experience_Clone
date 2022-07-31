import React from 'react'

export default function Card(props) {
        
    return (
        <div className = "card"> 
            <img src = {props.img} className = "cardImage" alt = ""></img>
                <div className='cardStats'> 
                    <img src = {process.env.PUBLIC_URL + "./img/star.png"} className = "cardStar" alt = ""></img>
                    <span>{props.rating}</span>
                    <span className = "greyText">{props.numRating}</span>
                    <span className = "greyText">{props.country}</span>
                </div>
                <p className = "boldText">{props.title}</p>
                <p className = "boldText">{props.quota}</p>
        </div>
    );
}
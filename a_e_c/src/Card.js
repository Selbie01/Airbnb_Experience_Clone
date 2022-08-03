import React from 'react'

export default function Card(props) {
        let badgeText 
        if (props.openSpots === 0){
            badgeText = "SOLD OUT"
        } else if (props.location === "Online") {
            badgeText = "ONLINE"
        }
    return (
        <div className = "card"> 
            {badgeText && <div className = "cardBadge">{badgeText}</div>}
            <img src = {`./img/${props.img}`} className = "cardImage" alt = ""/>
                <div className='cardStats'> 
                    <img src = {`./img/${props.star}`} className = "cardStar" alt = ""/>
                    <span>{props.rating}</span>
                    <span className = "greyText"> ({props.numRating})</span>
                    <span className = "greyText">{props.country}</span>
                    </div>
                <p>{props.title}</p>
                <p><span className = "boldText">From ${props.price} </span>/ person</p>
        </div>
    );
}
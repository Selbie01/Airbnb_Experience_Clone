import React from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import Card from "./Card"
import cardData from './CardData'

function App() {
 const cards = cardData.map(card => {
  return (
    <Card 
      key = {card.id} 
      {...card}
    />) 
  })
  return (
    <>
      <Nav />
      <Hero />
      <section className="cardList">{cards}</section>
    </>
  );
}

export default App;

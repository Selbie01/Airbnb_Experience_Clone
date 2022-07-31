import React from 'react'
import Nav from "./Nav"
import Hero from "./Hero"
import Card from "./Card"

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Card
        img = "./img/image 12.png"
        rating = "5.0"
        numRating = "(6)"
        country = "- USA"
        title = "Life Lessons with Katie Zaferes"
        quota = "From $136/person" 
      />
    </>
  );
}

export default App;

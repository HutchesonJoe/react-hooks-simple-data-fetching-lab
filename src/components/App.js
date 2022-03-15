import React, { useState, useEffect } from "react";

function App(){
  const [dogPic, setDogPic] = useState(null)
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then (r => r.json())
    .then (data => setDogPic(data.message))
  }, [])

  if (dogPic === null){
    return (
      <p>
        Loading...
      </p>)
  } else {
    return (
      <img src={dogPic} alt="A Random Dog"/>
    )
  }
  
}

export default App
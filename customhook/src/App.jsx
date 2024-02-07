import React from "react";
import { useState } from "react";
import Usestorage from "./Component/Usestorage";

function App(){

  const [state,setState] = useState("")

  const handleChange = (event) => {
    if(event.key === "Enter" && state.trim() !== ""){
      Usestorage(state)
    }

  }
  return(
    <div>
      <input type="text" placeholder="Enter Something"
       id="inputBox" 
      onChange={(event)=> setState(event.target.value)}
       onKeyDown={handleChange} />

    </div>
  )
} 

export default App
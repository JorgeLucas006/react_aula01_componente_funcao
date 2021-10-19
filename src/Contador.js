import React, { useState } from "react";
import "./App.css";

function Contador(){
  const [cont, setCont] = useState(0);

  return (
    <div className="container">
      <h1>Contador</h1>
      <p>Você clicou {cont} vezes!</p>
      <button onClick={()=> setCont(cont+1)}>Decremento</button>
      <button onClick={()=> setCont(cont-1)}>Incremento</button>
    </div>
  )
}

export default Contador;
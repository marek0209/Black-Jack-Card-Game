import React, { useEffect } from "react";
import "./App.css";
import apiService from "./services/CardApiService";

function App() {
  async function gameLogic() {
    const id = await apiService.getId();
    console.log(id);
    const count = 5;
    apiService.drawCard(id, count).then((data) => {
      console.log(data);
    });
  }

  return (
    <div className="App">
      <h1>Black Jack Card Game</h1>
      <button onClick={gameLogic}>Play</button>
    </div>
  );
}

export default App;

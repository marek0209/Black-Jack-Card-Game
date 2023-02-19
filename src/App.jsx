import React, { useEffect } from "react";
import "./App.css";
import StartMenu from "./StartMenu";
import { AppProvider } from "./GameContext";

function App() {
  return (
    <AppProvider>
      <StartMenu />
    </AppProvider>
  );
}

export default App;

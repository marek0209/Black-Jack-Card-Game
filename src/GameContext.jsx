import React, { createContext, useState, useRef, useMemo } from "react";
import { appInitialState } from "./appInitialState";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [gameState, setGameState] = useState(appInitialState);
  const gameStateRef = useRef(gameState);

  const contextValue = useMemo(() => {
    return { gameState, setGameState, gameStateRef };
  }, [gameState, setGameState]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

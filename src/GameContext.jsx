import React, { createContext } from "react";
import useStateRef from "react-usestateref";

export const AppContext = createContext();

export const AppProvider = (props) => {
  console.log("State is changing");
  const [gameState, setGameState, gameStateRef] = useStateRef({
    deckId: undefined,
    dealerHand: "",
    userHand: "",
    gameInProgress: false,
    userScore: 0,
    dealerScore: 0,
    roundCounter: 0,
    moneyState: 1000,
    bet: 0,
    roundHistory: [],
    showBetModal: false,
    showEndOfRoundModal: false,
    gameIsEnd: false,
    roundWinner: undefined,
    userName: undefined,
  });

  console.log(gameState.deckId);

  return (
    <AppContext.Provider value={{ gameState, setGameState, gameStateRef }}>
      {props.children}
    </AppContext.Provider>
  );
};

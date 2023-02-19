import React, { createContext } from "react";
import useStateRef from "react-usestateref";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [gameState, setGameState, gameStateRef] = useStateRef({
    deckId: "",
    dealerHand: "",
    userHand: "",
    gameInProgress: false,
    userScore: 0,
    dealerScore: 0,
    roundCounter: 1,
    moneyState: 1000,
    bet: 0,
    roundHistory: [],
    showBetModal: false,
    showEndOfRoundModal: false,
    gameIsEnd: false,
    roundWinner: undefined,
    userName: undefined,
  });

  return (
    <AppContext.Provider value={{ gameState, setGameState, gameStateRef }}>
      {props.children}
    </AppContext.Provider>
  );
};

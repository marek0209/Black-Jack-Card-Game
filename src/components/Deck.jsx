import React, { useContext, useEffect } from "react";
import gameLogicService from "../services/GameLogicService";
import { AppContext } from "../GameContext";

function Deck(props) {
  const { gameState, setGameState } = useContext(AppContext);

  useEffect(() => {
    gameLogicService.getFirstCards(gameState.deckId, gameState, setGameState);
  }, [gameState.gameIsEnd]);

  return (
    <div>
      <h1>Black jack deck</h1>
    </div>
  );
}

export default Deck;

import React, { useContext, useEffect } from "react";
import gameLogicService from "../services/GameLogicService";
import { AppContext } from "../GameContext";
import DisplayCards from "./DisplayCards";

function Deck(props) {
  const { gameState, setGameState } = useContext(AppContext);

  useEffect(() => {
    gameLogicService.getFirstCards(gameState.deckId, gameState, setGameState);
  }, [gameState.gameIsEnd]);

  return (
    <div>
      <h1>Black jack deck</h1>
      <h2>Dealer Cards</h2>
      <DisplayCards cards={gameState.dealerHand} />
      <h2>UserCards</h2>
      <DisplayCards cards={gameState.userHand} />
    </div>
  );
}

export default Deck;

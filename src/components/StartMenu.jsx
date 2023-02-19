import React, { useContext, useEffect } from "react";
import { AppContext } from "../GameContext";
import gameLogicService from "../services/GameLogicService";
import apiService from "../services/CardApiService";

const StartMenu = () => {
  const { gameState, setGameState } = useContext(AppContext);

  const getId = async () => {
    const deckId = await apiService.getId();
    return deckId;
  };

  useEffect(() => {
    if (gameState.deckId === undefined) {
      getId().then((id) => {
        setGameState({
          ...gameState,
          deckId: id,
        });
      });
    }
  });

  const startGame = async () => {
    gameLogicService.getFirstCards(gameState.deckId, gameState, setGameState);
  };

  return (
    <div>
      <h1>Start Menu</h1>
      <button
        className="btn btn-secondary align-self-center my-4"
        onClick={startGame}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartMenu;

import React, { useContext } from "react";
import { AppContext } from "./GameContext";
import gameLogicService from "./services/GameLogicService";
import apiService from "./services/CardApiService";
const StartMenu = () => {
  const { gameState, setGameState } = useContext(AppContext);

  const startGame = async () => {
    const id = await apiService.getId();
    console.log(id);
    setGameState({
      ...gameState,
      roundCounter: 1,
      gameIsEnd: false,
      deckId: id,
      setGameInProgress: true,
    });
    console.log(gameState);
    gameLogicService.getFirstCards(id, gameState, setGameState);
    console.log(gameState);
  };

  return (
    <div>
      Start Menu
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

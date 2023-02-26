import apiService from "../CardApiService";

const gameLogicService = {
  getScore: (card, score) => {
    if (card) {
      switch (card.value) {
        case "KING":
        case "JACK":
        case "QUEEN":
          return 10;

        case "ACE":
          return score + 11 > 21 ? 1 : 11;

        default:
          return parseInt(card.value);
      }
    }
    return score;
  },
  getFirstCards: async (id, gameState, setGameState) => {
    if (id !== undefined) {
      apiService.drawCard(id);
      let { data: dealerCards } = await apiService.drawCard(id, 2);
      if (!dealerCards) {
        dealerCards = await apiService.drawCard(id, 2);
      }
      let { data: userCards } = await apiService.drawCard(id, 2);
      if (!userCards) {
        userCards = await apiService.drawCard(id, 2);
      }
      dealerCards.cards[0].image =
        "https://deckofcardsapi.com/static/img/back.png";
      setGameState({
        ...gameState,
        userScore: gameLogicService.sumFirstTwoCardValue(
          userCards.cards,
          gameState.userScore
        ),
        DealerScore: gameLogicService.sumFirstTwoCardValue(
          dealerCards.cards,
          gameState.userScore
        ),
        userHand: userCards.cards,
        dealerHand: dealerCards.cards,
      });
    }
  },

  sumFirstTwoCardValue: (cards, score) => {
    let tempScore = 0;
    cards.forEach((card) => {
      tempScore += gameLogicService.getScore(card, score);
    });
    return tempScore;
  },
  hitAction: async (gameState, setGameState, gameStateRef) => {
    if (gameState.deckId) {
      const { data: card } = await apiService.drawCard(gameState.deckId, 2);
      setGameState({
        ...gameState,
        userScore:
          gameState.userScore +
          gameLogicService.getScore(card.cards[0], gameState.userScore),
        userHand: [...gameState.userHand, card.cards[0]],
      });
      if (gameStateRef.dealerScore < 17 && gameStateRef.userScore < 21) {
        setGameState({
          dealerHand: [...gameState.dealerHand, card.cards[1]],
          dealerScore:
            gameState.dealerScore +
            gameLogicService.getScore(card.cards[1], gameState.dealerScore),
        });
      }
      if (gameStateRef.userScore > 21 || gameStateRef.dealerScore > 21) {
        console.log("End of a Game");
      }
    } else {
      cardActions.hitAction();
    }
  },
  standAction: (setGameState) => {
    state.setGameInProgress(false);
    setGameState({
      gameInProgress: false,
    });
  },
};

export default gameLogicService;

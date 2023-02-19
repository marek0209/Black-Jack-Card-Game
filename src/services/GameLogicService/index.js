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
        "https://cdn.pixabay.com/photo/2012/05/07/18/52/card-game-48980_960_720.png";
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
};

export default gameLogicService;

import axios from "axios";

const apiService = {
  getId: async () => {
    try {
      const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6"
      );
      return response.data.deck_id;
    } catch (err) {
      console.log(err);
    }
  },
  drawCard: (id, count) => {
    if (count) {
      try {
        const response = axios.get(
          `https://deckofcardsapi.com/api/deck/${id}/draw/?count=${count}`
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    }
  },
};

export default apiService;

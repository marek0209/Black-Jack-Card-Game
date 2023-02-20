import React from "react";

const DisplayCards = (props) => {
  const cards = props.cards;
  if (cards)
    return (
      <div className="w-100 h-25 d-flex align-item-flex-end justify-content-center p-1">
        {cards.map((card) => {
          return (
            <img
              className="gameCard"
              key={card.code}
              src={card.image}
              alt={card.code}
            />
          );
        })}
      </div>
    );
};

export default DisplayCards;

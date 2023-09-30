// Flashcard.js
import React from "react";
import "../App.css";

const Flashcard = (props) => {
  const card = props.card;
  const showAnswer = props.showAnswer;
  const toggleAnswer = props.toggleAnswer;

  return (
    <div className="flashcard" onClick={toggleAnswer}>
      {card.image && (
        <img src={card.image} alt="flashcard" className="flashcard-image" />
      )}
      <div className="flashcard-text">
        {showAnswer ? card.answer : card.question}
      </div>
    </div>
  );
};

export default Flashcard;

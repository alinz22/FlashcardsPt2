import "./App.css";
import Flashcard from "./Components/Flashcard";
import React, { useState } from "react";

const App = () => {
  const flashcards = [
    {
      question:
        "What is the name of the pirate crew that Luffy is the captain of?",
      answer: "Straw Hat Pirates",
      image:
        "https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60",
    },
    {
      question:
        "What is the name of the pirate crew that Zoro is the first mate of?",
      answer: "Straw Hat Pirates",
      image:
        "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg",
    },
    {
      question:
        "What is the name of the pirate crew that Nami is the navigator of?",
      answer: "Straw Hat Pirates",
      image:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/09/One-Piece-Nami.jpg",
    },
    {
      question:
        "What is the name of the pirate crew that Usopp is the sniper of?",
      answer: "Straw Hat Pirates",
      image: "https://upload.wikimedia.org/wikipedia/en/5/53/Usopp.png",
    },
    {
      question:
        "What is the name of the pirate crew that Sanji is the chef of?",
      answer: "Straw Hat Pirates",
      image:
        "https://www.themarysue.com/wp-content/uploads/2023/04/sanji-one-piece.webp?w=1200&resize=1920%2C1080",
    },
    {
      question:
        "What is the name of the pirate crew that Chopper is the doctor of?",
      answer: "Straw Hat Pirates",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2023-09-15-at-4-19-31-pm-6504bc60249ac.png?crop=1.00xw:0.803xh;0,0.0872xh&resize=980:*",
    },
    {
      question:
        "What is the name of the pirate crew that Robin is the archaeologist of?",
      answer: "Straw Hat Pirates",
      image:
        "https://lh3.googleusercontent.com/E1zNMJhGw6QHx4ogVyEl1Gc0W1EKZAxguOuc4cVje4Yu2L2q8BrBPpUW2w23g3wwufwKFueMlIxOv1utVhGrQ4MDbYaBhRtZU3repPAZ2MalGID9cte-zke_U6wEydMWF0qY1NBhaIRMc5EmcNfWpF4",
    },
    {
      question:
        "What is the name of the pirate crew that Franky is the shipwright of?",
      answer: "Straw Hat Pirates",
      image:
        "https://staticg.sportskeeda.com/editor/2023/05/50b87-16836967920057-1920.jpg?w=840",
    },
    {
      question:
        "What is the name of the pirate crew that Brook is the musician of?",
      answer: "Straw Hat Pirates",
      image:
        "https://lh4.googleusercontent.com/nL6FEg_LjLIp7uLl-aeN26JOsMkPCL9NiggwQRpBprGV-I5Uu6otVFLZNf45GOX7lUdP2I-bQJvZL8tJ6mu3kHbaIV-ucscUiEUo_Lir22Jwzf-uzIasdfQjWVmlYVkU2C7pKtosNA-v2oQwqGjl0co",
    },
    {
      question:
        "What is the name of the pirate crew that Jinbei is the helmsman of?",
      answer: "Straw Hat Pirates",
      image:
        "https://www.giantbomb.com/a/uploads/scale_medium/13/135472/1880770-394px_jinbei.jpg",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState(""); // for the user's input
  const [feedback, setFeedback] = useState(""); // for displaying feedback

  //added this function
  function handleGuessSubmit() {
    if (userGuess.toLowerCase() === flashcards[currentCardIndex].answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect! Try again.");
    }
  }

//added this
  function showPreviousCard() {
   if (currentCardIndex > 0) {
     setCurrentCardIndex(currentCardIndex - 1);
   } else {
      setCurrentCardIndex(flashcards.length - 1); // loop back to the last card
    }
   resetCardState();
  }

  //added this, moves sequentially through the cards
  function showNextCard() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    setCurrentCardIndex(newIndex);
    resetCardState();
  }

  function resetCardState() {
    setShowAnswer(false);
    setUserGuess('');
    setFeedback(''); // This will reset the feedback state.
  }

  return (
    <div className="App">
      <div className="titles">
        <h2>The Ultimate One Piece Character Guide</h2>
        <h3>Test out who you know in One Piece!</h3>
        <h4>Number of Cards: 10</h4>

        <input 
          type="text" 
          placeholder="Enter your guess" 
          value={userGuess}
          onChange={e => setUserGuess(e.target.value)}
        />
        <button onClick={handleGuessSubmit}>Submit Guess</button>
        {feedback && (
          <div 
          className={`feedback-message ${feedback === "Correct!" ? "correct-feedback" : "incorrect-feedback"}`}
       >
          {feedback}
       </div>
       
        )}

        <Flashcard
          card={flashcards[currentCardIndex]}
          showAnswer={showAnswer}
          toggleAnswer={() => setShowAnswer(!showAnswer)}
        />
        <button onClick={showPreviousCard}>Previous Card</button>
        <button onClick={showNextCard}>Next Card</button>
      </div>
    </div>
  );
};

export default App;
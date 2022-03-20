/** ANALYSIS
 * When the user clicks next, the next question should show
 * If the user gets the question correct, it should increment true score and vice versa
 * When the user gets to the end of the quiz, their total score should be shown
 */
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import QAPart from "./components/QAPart";
import Score from "./components/Score";
import { questions } from "./components/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinal, setFinal] = useState(false);
  const [showTrueScore, setShowTrueScore] = useState(0);
  const [showFalseScore, setShowFalseScore] = useState(0);
  const [buttonStyle, setButtonStyle] = useState({ backgroundColor: "red" });

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinal(true);
    }
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setButtonStyle({ backgroundColor: "green" });
      setShowTrueScore(showTrueScore + 1);
    } else {
      setButtonStyle({ backgroundColor: "red" });
      setShowFalseScore(showFalseScore + 1);
    }
  };

  return (
    <div className="App">
      <Header />
      <Button
        handleNextClick={handleNextClick}
        currentQuestion={currentQuestion}
      />
      {showFinal ? (
        <div className="score-section">
          You scored {showTrueScore} out of {questions.length}
        </div>
      ) : (
        <>
          <QAPart
            questions={questions}
            handleAnswerButtonClick={handleAnswerButtonClick}
            currentQuestion={currentQuestion}
            style={buttonStyle}
          />
          <Score
            showTrueScore={showTrueScore}
            showFalseScore={showFalseScore}
          />
        </>
      )}
    </div>
  );
}

export default App;

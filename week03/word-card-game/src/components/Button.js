function Button({ handleNextClick, currentQuestion }) {
  return (
    <div>
      <div className="q-button" onClick={handleNextClick}>
        NEXT
      </div>
      <br />
      <div className="q-button">QUESTION: {currentQuestion + 1}</div>
    </div>
  );
}

export default Button;

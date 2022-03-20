function QAPart({
  questions,
  handleAnswerButtonClick,
  currentQuestion,
  style,
}) {
  return (
    <div className="qa-part">
      <div className="question">{questions[currentQuestion].questionText}</div>
      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
        <button
          key={index}
          onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
          style={style}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>
  );
}

export default QAPart;

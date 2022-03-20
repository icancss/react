function Score({ showTrueScore, showFalseScore }) {
  return (
    <div className="score-container">
      <div id="true">True Score: {showTrueScore}</div>
      <div id="false">False Score: {showFalseScore}</div>
    </div>
  );
}

export default Score;

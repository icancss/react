import React from "react";
import { useState } from "react";

function ClickApp() {
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return <div>the app is used by pressing the buttons</div>;
    }

    return <div>button press history: {props.allClicks.join(" ")}</div>;
  };

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  const App = () => {
    const [leftClick, setLeftClick] = useState(0);
    const [rightClick, setRightClick] = useState(0);
    const [allClicks, setAllClicks] = useState([]);

    const handleLeftClick = () => {
      setLeftClick(leftClick + 1);
      setAllClicks(allClicks.concat("L"));
    };

    const handleRightClick = () => {
      setRightClick(rightClick + 1);
      setAllClicks(allClicks.concat("R"));
    };

    return (
      <div>
        {leftClick}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {rightClick}
        <History allClicks={allClicks} />
      </div>
    );
  };

  return (
    <div>
      <App />
    </div>
  );
}

export default ClickApp;

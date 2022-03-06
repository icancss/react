import React, { useState } from "react";

function Events() {
  const [value, setValue] = useState(10);

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  const setNewValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <br />
      <Button handleClick={() => setNewValue(1000)} text="thousand" />
      <br />
      <Button handleClick={() => setNewValue(0)} text="reset" />
      <br />
      <Button handleClick={() => setNewValue(value + 1)} text="increment" />
    </div>
  );
}

export default Events;

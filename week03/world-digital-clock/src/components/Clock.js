import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";

function Clock() {
  const [city, setCity] = useState("");

  const handleSelect = (e) => {
    console.log(e);
    setCity(e);
  };

  const [clock, setClock] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      if (city === "New York") {
        setClock(
          date.toLocaleTimeString("de-DE", { timeZone: "America/New_York" })
        );
      } else if (city === "Tokyo") {
        setClock(date.toLocaleTimeString("de-DE", { timeZone: "Asia/Tokyo" }));
      } else {
        setClock(date.toLocaleTimeString("de-DE"));
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="clock">
      <h2>World Digital Clock</h2>
      <span>{city}</span>
      <div>{clock}</div>
      <DropdownMenu handleSelect={handleSelect} />
    </div>
  );
}

export default Clock;

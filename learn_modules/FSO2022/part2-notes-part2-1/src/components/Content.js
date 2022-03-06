import React from "react";
import Header from "./Header";
import Part from "./Part";

function Content({ course }) {
  return (
    <>
      {course.map((part) => (
        <div key={part.id}>
          <Header part={part.name} />
          <Part part={part} />
        </div>
      ))}
    </>
  );
}

export default Content;

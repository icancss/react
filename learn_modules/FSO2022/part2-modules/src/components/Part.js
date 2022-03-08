import React from "react";

function Part({ part }) {
  const parts = part.parts;
  const exercises = parts.map((part) => part.exercises);

  const total = exercises.reduce((s, p) => {
    console.log("what is happening", s, p);
    return s + p;
  });

  return (
    <div>
      <ul>
        {parts.map((course) => (
          <li key={course.id}>
            {course.name} <span>{course.exercises}</span>
          </li>
        ))}
      </ul>
      <h3>total of {total} exercises</h3>
    </div>
  );
}

export default Part;

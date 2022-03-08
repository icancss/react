import Content from "./Content";

const Course = (props) => {
  console.log(props);
  const { course } = props;
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Content course={course} />
    </div>
  );
};

export default Course;

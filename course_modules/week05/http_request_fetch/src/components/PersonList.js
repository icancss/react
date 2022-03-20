import Table from "react-bootstrap/Table";

const PersonList = ({ personList }) => {
  return (
    <div className="person-information">
      <h1>PERSON LIST</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>About</th>
          </tr>
        </thead>
        <tbody>
          {personList.map((person, index) => (
            <tr key={index}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.password}</td>
              <td>{person.about}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PersonList;

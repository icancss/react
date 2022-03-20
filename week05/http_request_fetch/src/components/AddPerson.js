import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PersonList from "./PersonList";

const AddPerson = () => {
  const [person, setPerson] = useState({});
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    getPersonList();
  }, []);

  const getPersonList = async () => {
    const response = await fetch("http://localhost:3001/employees/");
    const data = await response.json();
    setPersonList(data);
  };

  const savePerson = async (pPerson) => {
    await fetch("http://localhost:3001/employees/", {
      method: "POST",
      body: JSON.stringify(pPerson),
      headers: { "Content-Type": "application/json" },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePerson(person);
    getPersonList();
    console.log(personList);
  };

  return (
    <>
      <div className="person-form">
        <Form onSubmit={handleSubmit}>
          <h1>ADD PERSON</h1>
          <Form.Control
            type="text"
            name="person[firstName]"
            value={person.firstName}
            onChange={(e) =>
              setPerson({ ...person, firstName: e.target.value })
            }
            placeholder="First Name"
          />
          <br />
          <Form.Control
            type="text"
            name="person[lastName]"
            value={person.lastName}
            onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
            placeholder="Last Name"
          />
          <br />
          <Form.Control
            type="email"
            name="person[email]"
            value={person.email}
            onChange={(e) => setPerson({ ...person, email: e.target.value })}
            placeholder="Email"
          />
          <br />
          <Form.Control
            type="password"
            name="person[password]"
            value={person.password}
            onChange={(e) => setPerson({ ...person, password: e.target.value })}
            placeholder="Password"
          />
          <br />
          <Form.Control
            type="text"
            name="person[about]"
            value={person.about}
            onChange={(e) => setPerson({ ...person, about: e.target.value })}
            placeholder="About"
          />
          <br />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
      <PersonList personList={personList} />
    </>
  );
};

export default AddPerson;

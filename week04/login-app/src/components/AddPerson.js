import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddPerson = ({ addPerson }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Buttonun click olayinda tetiklenen fonksiyon
   */
  const handleClick = (e) => {
    e.preventDefault();
    const newPerson = {
      username: username,
      email: email,
      password: password,
    };
    addPerson(newPerson); // App.js den gelen addPerson fonksiyonu
  };

  return (
    <div className="user-form">
      <Form>
        <h1>SIGN UP</h1>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password repeat"
        />
        <br />
        <Button variant="primary" type="submit" onClick={handleClick}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default AddPerson;

import "./App.css";
import React, { useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";

const App = () => {
  const [personList, setPersonList] = useState([]);

  const addPerson = (pNewPerson) => {
    setPersonList([...personList, pNewPerson]); // personList dizisine yeni olusturulan person objesini ekler.
  };

  return (
    <div className="container">
      <AddPerson addPerson={addPerson} />
      <PersonList personList={personList} />
    </div>
  );
};

export default App;

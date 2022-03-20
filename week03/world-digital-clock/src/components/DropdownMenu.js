import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownMenu({ handleSelect }) {
  return (
    <DropdownButton title="Dropdown button" onSelect={handleSelect}>
      <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
      <Dropdown.Item eventKey="Tokyo">Tokyo</Dropdown.Item>
      <Dropdown.Item eventKey="Vienna">Vienna</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenu;

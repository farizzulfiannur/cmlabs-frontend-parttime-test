import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const MealsSearch = (props) => {
  const { searchQuery } = props;
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        placeholder="Search Meals Name . . ."
        aria-label="Search Meals"
        aria-describedby="basic-addon1"
        onChange={searchQuery}
      />
    </InputGroup>
  );
};

export default MealsSearch;

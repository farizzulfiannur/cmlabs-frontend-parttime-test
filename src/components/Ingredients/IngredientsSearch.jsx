import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const IngredientsSearch = (props) => {

  const { searchQuery } = props

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        placeholder="Search Ingredients Name . . ."
        aria-label="Search Ingredients"
        aria-describedby="basic-addon1"
        onChange={searchQuery}
        />
    </InputGroup>
  );
};

export default IngredientsSearch;

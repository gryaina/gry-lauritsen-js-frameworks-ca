import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";

export default function Search({ handleSearch }) {
  return (
    <InputGroup classname="search">
      <FormControl placeholder="Search for game" onChange={event => handleSearch(event)} />
    </InputGroup>
  );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

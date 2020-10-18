import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function GameItem({ id, name, image, rating, released }) {
    return (
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Rating: {rating}
          </Card.Text>
          <Card.Text>
            Release date: {released}
          </Card.Text>
          <Link to={"game/" + id}>
            <Button variant="primary" block>
              More information
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
}

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired
};

export default GameItem;

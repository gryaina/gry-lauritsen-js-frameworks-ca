import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/Api";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from "./GameItem";
import Search from "./Search";

function GamesList() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => {
        setGames(json.results);
        setFilteredGames(json.results);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    }, []);

  const filterGames = function(e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = games.filter(function(game){
      const lowerCaseName = game.name.toLowerCase();
      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
        return false;
      });
    setFilteredGames(filteredArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }

  return (
    <>
      <Search handleSearch={ filterGames } />
      <Row>
        {filteredGames.map(game => {
          const { id, name, background_image, rating, released } = game;

          return (
            <Col sm={6} md={3} key={id}>
              <GameItem id={id} name={name} image={background_image} rating={rating} released={released}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default GamesList;

import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./cards.css";
import axios from "../../api";
const Cards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);
  const handleSwiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };
  const handleOutOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className='cards'>
      <div className='cards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={CharacterData.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => handleSwiped(dir, person.name)}
            onCardLeftScreen={() => handleOutOfFrame(person.name)}
          >
            <div
              className='card'
              style={{ backgroundImage: `url(${person.url}` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;

import { useState, useEffect } from "react";
import PetListItem from "./PetListItem";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/pet")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div>
      <h1>Pets</h1>
      <ul className="pet-list">
        {pets.map((pet) => (
          <PetListItem key={pet.id} pet={pet} />
        ))}
      </ul>
    </div>
  );
};

export default PetList;

import { useState, useEffect } from "react";
import PetListItem from "./PetListItem";

const PetList = ({shelterId}) => {
  const [pets, setPets] = useState([]);
  const [activePet, setActivePet] = useState(null);

  

  useEffect(() => {
    fetch(`http://localhost:8080/api/shelter/pets/${shelterId}`)
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div>
      <h1>Pets</h1>
      <ul className="pet-list">
        {pets.map((pet) => (
          <PetListItem key={pet.id} pet={pet} active={activePet} setActivePet={setActivePet}/>
        ))}
      </ul>
    </div>
  );
};

export default PetList;

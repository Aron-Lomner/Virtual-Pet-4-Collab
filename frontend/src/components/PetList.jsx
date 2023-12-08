import React, { useState, useEffect } from "react";
// this is a comment
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
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;

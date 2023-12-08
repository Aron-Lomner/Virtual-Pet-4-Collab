const PetInfo = ({ pet }) => {
  return (
    <div className="pet-info">
      <div className="pet-name">{pet.name}</div>
      <div className="pet-type">{pet.petType}</div>
      <div className="pet-age">{pet.age}</div>
    </div>
  );
};

export default PetInfo;

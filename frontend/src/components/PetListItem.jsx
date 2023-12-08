const PetListItem = ({ pet }) => {
  return (
    <div className="pet-list-item">
      <div className="pet-name">{pet.name}</div>
      <div className="pet-type">{pet.petType}</div>
      <div className="pet-age">{pet.age}</div>
    </div>
  )
};

export default PetListItem;

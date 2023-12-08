const PetListItem = ({ pet }) => {
  return (
    <div className="pet-item">
      <div className="pet-name">{pet.name}</div>
    </div>
  );
};

export default PetListItem;

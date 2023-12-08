import PetInfo from "./PetInfo";
const PetListItem = ({ pet, setActivePet, active }) => {
  const clicked = () => {
    if (active == pet.id) {
      setActivePet(null);
    } else {
      setActivePet(pet.id);
    }
  };
  return (
    <div className="pet-item" onClick={clicked}>
      {active != pet.id ? (
        <div className="pet-name">{pet.name}</div>
      ) : (
        <PetInfo pet={pet} />
      )}
    </div>
  );
};

export default PetListItem;

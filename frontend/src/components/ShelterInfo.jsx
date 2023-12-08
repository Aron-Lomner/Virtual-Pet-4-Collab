const PetListItem = ({ shelter }) => {
  return (
    <div className="pet-list-item">
      <div className="shelter-name">{shelter.name}</div>
      <div className="shelter-phone">{shelter.phone}</div>
      <div className="shelter-email">{shelter.email}</div>
    </div>
  );
};

export default PetListItem;

const ShelterInfo = ({ shelter }) => {
  return (
    <div className="shelter-lis-item">
      <div className="shelter-name">{shelter.name}</div>
      <div className="shelter-phone">{shelter.phone}</div>
      <div className="shelter-email">{shelter.email}</div>
    </div>
  );
};

export default ShelterInfo;

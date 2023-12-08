import { useEffect, useState } from "react";
import { ShelterInfo } from "./ShelterInfo";

const ShelterList = () => {
  const [shelters, setShelters] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/shelter")
      .then((response) => response.json())
      .then((data) => setShelters(data))
      .catch((error) => console.error("Error fetching data: ", error));
  });
  return (
    <div>
      <ul className="shelter-list">
        {shelters.map((shelter) => {
          <ShelterInfo shelter={shelter} />;
          console.log(shelter);
        })}
      </ul>
    </div>
  );
};
export default ShelterList;

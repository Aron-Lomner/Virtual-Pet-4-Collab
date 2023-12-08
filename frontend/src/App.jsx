import { useState } from "react";
import PetList from "./components/PetList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PetList />
    </div>
  );
}

export default App;

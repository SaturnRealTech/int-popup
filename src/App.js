import "./App.css";
import Model from "./Model";
import { useState } from "react";
function App() {
  const [showModel, setShowModel] = useState(false);

  return (
    <div>
      <button
        className="p-4 my-4 w-full bg-gray-700 rounded-lg  text-white m-2"
        onClick={() => setShowModel(true)}
      >
        OPEN
      </button>
      {showModel && <Model />}
    </div>
  );
}

export default App;

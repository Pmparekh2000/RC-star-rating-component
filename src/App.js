import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(3);
  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating);
  };

  return (
    <div className="App">
      <h2>Star Rating</h2>
      <StarRating
        size={5}
        rating={currentRating}
        onChange={handleRatingChange}
      />
      <p>Current Rating : {currentRating}</p>
    </div>
  );
}

export default App;

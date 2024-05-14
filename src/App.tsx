import "./App.css";
import { useState } from "react";

function App() {
  const [erteuli, setErteuli] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const regex = /^(?:\d+, )*\d+(?:,\s?)?$/;

    if (regex.test(text)) {
      setErteuli(text);
    } else {
      // Handle the case when the input is invalid
      // You can show an error message or reset the input value
      console.log("Invalid input");
    }
  };

  return (
    <div>
      <div>
        <text>წინა ერთეულები</text>
        <input
          type="text"
          value={erteuli}
          onChange={handleInputChange}
          placeholder="Enter numbers or commas"
        />
      </div>
    </div>
  );
}

export default App;

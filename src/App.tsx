import "./App.css";
import { useState } from "react";

function App() {
  const [mricxveli, setMricxveli] = useState<string>("");
  const [erteuli, setErteuli] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    const regex = /^(?:\d+,\s*)*\d+(?:,\s*)?$/;
    if (regex.test(text)) {
      setErteuli(text);
    } else {
      console.log("Invalid input");
    }
  };

  const handleMricxveliChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const number = event.target.value;
    const regex = /^[0-9]+(?:,[0-9]+)*$/;
    if (regex.test(number)) {
      setMricxveli(number);
    } else {
      console.log("Invalid input");
    }
  };

  const handleButtonClick = () => {
    const pairs = erteuli.split(", ");
    let succeededCount = 0;
    let failedCount = 0;
    pairs.forEach((eachNumber) => {
      console.log(eachNumber);
      if (eachNumber == mricxveli) {
        succeededCount++;
        console.log(succeededCount);
      } else {
        failedCount++;
        console.log(failedCount);
      }
    });

    const positiveResult = succeededCount > 0 ? `+ ${succeededCount}` : "";
    const negativeResult = failedCount > 0 ? `- ${failedCount}` : "";

    return setResult(`${positiveResult} ${negativeResult}`.trim());
  };

  return (
    <div className="container">
      <div className="erteuli">
        <text>მრიცხველი</text>
        <input
          type="number"
          value={mricxveli}
          onChange={handleMricxveliChange}
          placeholder="Enter a number"
        />
      </div>
      <div className="erteuli">
        <text>წინა ერთეულები</text>
        <input
          type="text"
          value={erteuli}
          onChange={handleInputChange}
          placeholder="Enter numbers separated by a comma and exactly one space, with an optional trailing comma and optional space"
        />
      </div>
      <button onClick={handleButtonClick}>Compare</button>
      <div>{result}</div>
    </div>
  );
}

export default App;

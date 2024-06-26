import "./App.css";
import { useState } from "react";

function App() {
  const [mricxveli, setMricxveli] = useState<string>("");
  const [erteuli, setErteuli] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [showBtn, setshowBtn] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    const regex = /^(?:\d+,\s*)*\d+(?:,\s*)?$/;
    if (regex.test(text)) {
      setErteuli(text);
      setshowBtn(false);
    } else {
      console.log("Invalid input");
    }
  };

  const handleMricxveliChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const number = event.target.value;
    const regex = /^\d+(, \d+)*$/;
    if (regex.test(number)) {
      setMricxveli(number);
      setshowBtn(false);
    } else {
      console.log("Invalid input");
    }
  };

  const handleButtonClick = () => {
    const pairs = erteuli.split(", ");
    let succeededCount = 0;
    let failedCount = 0;

    pairs.forEach((eachNumber) => {
      if (eachNumber === mricxveli) {
        succeededCount++;
      } else if (
        eachNumber === mricxveli &&
        eachNumber !== "" &&
        mricxveli !== ""
      ) {
        return "";
      } else {
        failedCount++;
      }
    });
    const positiveResult = succeededCount >= 0 ? `${succeededCount}` : "";
    const negativeResult = failedCount >= 0 ? `${failedCount}` : "";
    setResult(
      `ემთხვევა ${positiveResult} | არ ემთხვევა ${negativeResult}`.trim()
    );
    setshowBtn(true);
  };

  return (
    <div className="container">
      <div className="mricxveliContainer">
        <text>მრიცხველი</text>
        <input
          type="text"
          value={mricxveli}
          onChange={handleMricxveliChange}
          placeholder="ჩაწერე"
        />
      </div>
      <div className="mnishveliContainer">
        <text>წინა ერთეულები</text>
        <textarea
          value={erteuli}
          onChange={handleInputChange}
          placeholder="34, 54, 54...."
        />
      </div>
      <button onClick={handleButtonClick}>შედარება</button>
      {result &&
      mricxveli !== "" &&
      erteuli.split(", ")[0] !== "" &&
      showBtn ? (
        <div className="result">{result}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

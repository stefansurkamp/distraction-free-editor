import { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");

  const keyWasPressed = (e) => {
    if (e.key === "Enter") {
      setText(text + e.target.value + "\n");
      setWord("");
      document.querySelector(".CompleteTextWrapper").scroll({
        top: document.querySelector(".CompleteTextWrapper").scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const textHasChanged = (e) => {
    if (e.nativeEvent.data === " ") {
      setText(text + e.target.value);
      setWord("");
      document.querySelector(".CompleteTextWrapper").scroll({
        top: document.querySelector(".CompleteTextWrapper").scrollHeight,
        behavior: "smooth",
      });
    } else {
      setWord(e.target.value);
    }
  };

  return (
    <div className="App">
      <a href={`data:text/plain;charset=utf-8,${text}`} download="freewrite.txt">
        <div className="Download"></div>
      </a>
      <div className="CompleteTextWrapper">
        <div className="CompleteText">
          {text.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="WordInput">
        <input
          type="text"
          onChange={textHasChanged}
          onKeyDown={keyWasPressed}
          value={word}
          autoFocus
          tabIndex="0"
        ></input>
      </div>
    </div>
  );
};

export default App;

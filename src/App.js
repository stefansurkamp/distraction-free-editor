import { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState(
    "lel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd aslel k asd asas asd asd asd asd asd asd asd asd a3rqefwl fjoiqwej fioqwjf iowjfiweojv dkjweiofjoi wjfoiw jfoiw3jf oiwjfoiwj foiwjfoi j32fioj 3owifjoiw3f jo3ijf oi3jf iow3jfoi3jf ioj3f io now im curious w ow ici hchqiow"
  );
  const [word, setWord] = useState("");

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
      <div className="CompleteTextWrapper">
        <div className="CompleteText">{text}</div>
      </div>
      <div className="WordInput">
        <input type="text" onChange={textHasChanged} value={word} autofocus></input>
      </div>
    </div>
  );
};

export default App;

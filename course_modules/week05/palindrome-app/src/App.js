import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [reverse, setReverse] = useState("");

  function findReverse() {
    return setReverse(word.split("").reverse().join(""));
  }

  return (
    <div className="App">
      <input onChange={(e) => setWord(e.target.value)} />

      <button onClick={findReverse}>find reverse</button>

      <p>{word}</p>
      <p>{reverse}</p>
    </div>
  );

  //alternative solution
  /* const [name, setName] = useState("")
  const [showInfo, setShowInfo] = useState(false)
  function palindrome(word) {
    setName(word)
    if (word.length > 2 && word === word.split("").reverse().join("")) {
      console.log("bu kelime polindrom")
      setShowInfo(true)
    }else {
      setShowInfo(false)
    }
  }
  return (
    <div className="App">
      <input onChange={(e) => palindrome(e.target.value)}></input>
      { showInfo &&
        <p>bu kelime polindromdur{name}</p>
        }
    </div>
  ); */
}

export default App;

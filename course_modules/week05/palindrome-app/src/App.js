import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [reverse, setReverse] = useState("");
  const [showReverse, setShowReverse] = useState(false);

  function findReverse() {
    return setReverse(word.split("").reverse().join(""));
  }

  function checkPalindrome(parameters) {
    if (word === reverse) {
      console.log("bu kelime polindrom");
      setShowReverse(true);
    } else {
      console.log("bu kelime polindrom degil");
      setShowReverse(false);
    }
  }

  return (
    <div className="App">
      <input onChange={(e) => setWord(e.target.value)} />
      <br />
      <button onClick={findReverse}>find reverse</button>
      <br />
      {reverse}
      <hr />
      <button onClick={checkPalindrome}>check palindrome</button>
      {showReverse ? (
        <div>This is palindrome!</div>
      ) : (
        <div>This is NOT a palindrome!</div>
      )}
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

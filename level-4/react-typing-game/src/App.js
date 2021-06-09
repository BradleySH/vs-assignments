import React from "react"
import useWordGame from "./Hooks/wordGame"
import './App.css';

function App() {
  const {
    timeRemaining, 
    isTimeRunning, 
    handleChange, 
    startClock, 
    textBoxRef, 
    wordCount, 
    text
  } = useWordGame(5)
  return (
    <div>
      <h1>React Typing Game</h1>
      <br />
      <h2>How fast do you type?</h2>
      <textarea
          ref={textBoxRef}
          value={text}
          onChange={handleChange}
          disabled={!isTimeRunning}
        />
        <h4>Time remaining: {timeRemaining}</h4>
        <button onClick={startClock} disabled={isTimeRunning}>{wordCount > 0 ? "Play Again" : "Start"}</button>

        {wordCount > 0 && <h2>Word count: {wordCount}</h2>}
    </div>
  );
}

export default App;

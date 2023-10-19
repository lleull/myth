import React, { useState } from "react";
import EndPage from "./EndPage";
import "./QuizApp.css";
import MainPage from "./MainPage";
import Quiz from "./Quiz";

import { QuizContext } from "./App/Context";

const QuizApp = () => {
  const [startGame, setStartGame] = useState("menu");
  const [score, setScore] = useState(0);
  const [test , setTest ] = useState(true)

  const handleTes =() =>{
    setTimeout(() => {
      alert(`Your Value is  ${test}`)
    }, 1000)
  }

  return (
    <>
      <h1>Quiz</h1>
         <h2>whats your name : {String(test)}</h2>
         <button style={{padding: '10px 40px'}} id="Box" onClick={() => setTest(!test)}>CLiCk</button>
         <button style={{padding: '10px 40px', background: 'red'}} id="Box" onClick={handleTes}>CLiCk</button>

      <div className="App">
        <QuizContext.Provider value={{ startGame, setStartGame, score, setScore }}>
          {startGame === "menu" && <MainPage />}
          {startGame === "quiz" && <Quiz />}
          {startGame === "end" && <EndPage />}
        </QuizContext.Provider>
      </div>
    </>
  );
 
};

export default QuizApp;

import React, { useState } from "react";
import EndPage from "./EndPage";
import "./QuizApp.css";
import MainPage from "./MainPage";
import Quiz from "./Quiz";

import { QuizContext } from "./App/Context";

const QuizApp = () => {
  const [startGame, setStartGame] = useState("menu");
  const [score, setScore] = useState(0);



  
  return (
    <>
      <h1>Quiz</h1>

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

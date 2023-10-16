import React from "react";
import { useContext } from "react";

import Question from "./qbank";
import "./QuizApp.css";
import { QuizContext } from "./App/Context";

const EndPage = () => {
  const { score,  setStartGame } = useContext(QuizContext);
 console.log(score)
// const Restart = () => {
//     setScore(0)
//     setStartGame()
    
//   };

  return (
    <div className="End">
      <h1>End Quiz</h1>
      <h1>
        {score} / {Question.length}
      </h1>
      <button  onClick={() => setStartGame()} className="Restart">
        Restart Quiz
      </button>
    </div>
  );
};

export default EndPage;

import React, { useContext, useState } from "react";
import Qbank from "./qbank";
import { QuizContext } from "./App/Context";
import "./QuizApp.css";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [choicenOption, setChoicenOption] = useState("");
  const { score, setScore } = useContext(QuizContext);
  const { setStartGame } = useContext(QuizContext);

  
  const NextQuestion = () => {
    if (Qbank[currQuestion].answer === choicenOption) {
      setScore(score + 1);
      
    }
    setCurrQuestion(currQuestion + 1);
  };

  const Finished = () => {
    if (Qbank[currQuestion].answer === choicenOption) {
      setScore(score + 1);
     
    }
    setStartGame("end");
  };

  return (
    <div className="Quiz">
      <h1>{Qbank[currQuestion].Question}</h1>
      <div className="Options">
        <button id="but" onClick={() => setChoicenOption("A")}>{Qbank[currQuestion].OptionA}</button>
        <button id="but" onClick={() => setChoicenOption("B")}>{Qbank[currQuestion].OptionB}</button>
        <button id="but" onClick={() => setChoicenOption("C")}>{Qbank[currQuestion].OptionC}</button>
        <button id="but" onClick={() => setChoicenOption("D")}>{Qbank[currQuestion].OptionD}</button>
      </div>

      {currQuestion === Qbank.length - 1 ? (
        <button className="Unis" onClick={Finished}>
          Finish
        </button>
      ) : (
        <button className="Uni" onClick={NextQuestion}>
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;

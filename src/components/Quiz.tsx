import React from "react";
import { useState } from "react";

import QUESTIONS from "../Questions";

type Props = {};

const Quiz = (props: Props) => {
  const [userAnswers, setUserAnswers] = useState([] as string[]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer: string) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;

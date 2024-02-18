import quizComplete from "../assets/quiz-complete.png";
import { useState, useCallback } from "react";

import QUESTIONS from "../Questions";
import QuestionTimer from "./QuestionTimer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([] as string[]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: string) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null as unknown as ""),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
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

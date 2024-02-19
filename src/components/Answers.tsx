import { useRef } from "react";

type AnswersProps = {
  answers: string[];
  selectedAnswer: string;
  answerState: string;
  onSelect: (selectedAnswer: string) => void;
};

const Answers = ({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: AnswersProps) => {
  const shuffledAnswers = useRef([] as string[]);

  if (!shuffledAnswers.current.length) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button className={cssClasses} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

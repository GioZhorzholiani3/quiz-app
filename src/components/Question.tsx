import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

type QuestionProps = {
  questionText: string;
  answers: string[];
  onSelectAnswer: (selectedAnswer: string) => void;
  selectedAnswer: string;
  answerState: string;
  handleSkipAnswer: () => void;
};

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  handleSkipAnswer,
}: QuestionProps) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;

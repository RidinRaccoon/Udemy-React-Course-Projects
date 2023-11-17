import * as React from 'react';
import './Quiz.css';
import { QUESTIONS } from '../data/questions';
import { Question } from './Question';
import { QuizResults } from './QuizResults';

/** Renders the quiz \
 * [`QuizApp`] */
export function Quiz(props: {
  //
  changeScreen(state: string): void;
}) {
  const { changeScreen } = props;
  const [userAnswers, setUserAnswers] = React.useState<(number)[]>([]);
  const numQuestions = QUESTIONS.length;
  const currentQuestion = userAnswers.length;
  const hasNextQuestion = currentQuestion < numQuestions;

  const onAnswer = (answer: number) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (
    <section className="game-board">
      {hasNextQuestion ? (
        <Question question={QUESTIONS[currentQuestion]} onAnswer={onAnswer} />
      ) : (
        <QuizResults
          questions={QUESTIONS}
          userAnswers={userAnswers}
          changeScreen={changeScreen}
        />
      )}
    </section>
  );
}

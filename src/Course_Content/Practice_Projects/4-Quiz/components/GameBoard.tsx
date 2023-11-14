import * as React from 'react';
import './GameBoard.css';
import { QUESTIONS } from '../data/questions';
import { Question } from './Question';
import { QuizResults } from './QuizResults';

/** Renders the quiz \
 * [`QuizApp`] */
export function GameBoard() {
  const [userAnswers, setUserAnswers] = React.useState<number[]>([]);
  const numQuestions = QUESTIONS.length;
  const currentQuestion = userAnswers.length + 1;
  const hasNextQuestion = currentQuestion < numQuestions;


  console.log(userAnswers);

  const onAnswer = (answer: number) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    // if (hasNextQuestion) setCurrentQuestion((prevState) => prevState + 1);
  };

  return (
    <section className="game-board">
      {hasNextQuestion ? (
        <Question question={QUESTIONS[currentQuestion]} onAnswer={onAnswer} />
      ) : (
        <QuizResults questions={QUESTIONS} userAnswers={userAnswers} />
      )}
    </section>
  );
}

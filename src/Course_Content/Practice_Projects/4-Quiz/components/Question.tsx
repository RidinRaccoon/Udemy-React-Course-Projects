import * as React from 'react';
import { TQuestion } from '../data/questions';

const ANSWER_KEYS = 'ABCDEFGH';
const QUESTION_TIME = 15 * 1000;

/** Renders Quiz question and choices \
 * [`QuizApp`] */
export function Question(props: {
  //
  question: TQuestion;
  onAnswer(answer:number): void;
}) {
  const { question, onAnswer } = props;
  const { title, answers } = question;
  const handleAnswer = (number: number) => () => onAnswer(number);

  return (
    <section>
      <h2 className="question">{title}</h2>
      <ol className="answers">
        {answers.map((answer, i) => (
          <button key={ANSWER_KEYS[i]} type="button" onClick={handleAnswer(i)}>
            {answer}
          </button>
        ))}
      </ol>
      <progress
        className="progress-bar"
        max={QUESTION_TIME}
        value={70000}
      />
    </section>
  );
}

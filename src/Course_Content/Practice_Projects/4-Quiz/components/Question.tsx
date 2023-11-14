import * as React from 'react';
import { TQuestion } from '../data/questions';
import { QuestionTimer } from './QuestionTimer';

const ANSWER_KEYS = 'ABCDEFGH';
const QUESTION_TIME = 15 * 1000;

/** Renders Quiz question and choices \
 * [`QuizApp`] */
export function Question(props: {
  //
  question: TQuestion;
  onAnswer(answer: number | null): void;
}) {
  const { question, onAnswer } = props;
  const { id, title, answers } = question;
  const handleAnswer = (number: number) => () => {
      
    onAnswer(number)
  };

  const onTimeout = React.useCallback((answer: number | null) => {
    onAnswer(answer);
  }, []);

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
      <QuestionTimer key={id} time={QUESTION_TIME} onTimeout={onTimeout} />
    </section>
  );
}

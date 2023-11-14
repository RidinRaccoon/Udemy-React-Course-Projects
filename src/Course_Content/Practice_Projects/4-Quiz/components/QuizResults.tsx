import React from 'react';
import './QuizResults.css';
import { TQuestion } from '../data/questions';

function calculateCorrectAnswers(
  questions: TQuestion[],
  userAnswers: number[],
) {
  function reducer(accu: number, question: TQuestion, i: number) {
    if (question.solution === userAnswers[i]) return accu + 1;
    return accu;
  }
  return questions.reduce(reducer, 0);
}

function getAnswerClass(answer: number, solution: number) {
  return answer === solution ? 'correct' : 'wrong';
}

/** Displays the quiz results \
 * [`QuizApp`]
 */
export function QuizResults(props: {
  //
  questions: TQuestion[];
  userAnswers: number[];
}) {
  const { questions, userAnswers } = props;
  const numQuestions = questions.length;
  const correctAnswers = calculateCorrectAnswers(questions, userAnswers);
  const score = `${correctAnswers}/${numQuestions}`;

  return (
    <section className="quiz-results">
      <button type="button">Return to Start Screen</button>
      <h2 className="score">
        <span>Score:</span> {score}
      </h2>
      <ul>
        {questions.map((question, i) => {
          const { title, id, answers, solution } = question;
          const answerClass = getAnswerClass(userAnswers[i], solution);
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p className={answerClass}>{answers[userAnswers[i]]}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

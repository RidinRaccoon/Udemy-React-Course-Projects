import React from 'react';
import './QuizResults.css';
import { TQuestion } from '../data/questions';

/** Returns the number of correct answers */
function calculateCorrectAnswers(
  questions: TQuestion[],
  userAnswers: (number | null)[],
) {
  function reducer(accu: number, question: TQuestion, i: number) {
    if (question.solution === userAnswers[i]) return accu + 1;
    return accu;
  }
  return questions.reduce(reducer, 0);
}

function getAnswerClass(answer: number | null, solution: number) {
  return answer === solution ? 'correct' : 'wrong';
}

/** Displays the quiz results \
 * [`QuizApp`]
 */
export function QuizResults(props: {
  //
  questions: TQuestion[];
  userAnswers: (number)[];
  changeScreen(state: string): void;
}) {
  const { questions, userAnswers, changeScreen } = props;
  const numQuestions = questions.length;
  const correctAnswers = calculateCorrectAnswers(questions, userAnswers);
  const score = `${correctAnswers}/${numQuestions}`;

  // Save Highscore to localStorage

  return (
    <section className="quiz-results">
      <button type="button" onClick={() => changeScreen('startMenu')}>
        Return to Start Screen
      </button>
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
              {/* TODO FIX BUG ANSWER = null, fix types */}
              <p className={answerClass}>{answers[userAnswers[i]]}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import { useEffect, useState } from "react";
import { decode } from "html-entities";
import { shuffle } from "./utils";
import "./Question.css";

export default function Question(props) {
  const { item, id, name, handleChange, correctAnswer, isDone, isCorrect } =
    props;

  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setChoices(shuffle([...item.incorrect_answers, item.correct_answer]));
  }, [item]);

  const answerElements = choices.map((choice) => {
    const isCorrectAnswer = item.correct_answer === choice;
    return (
      <div key={choice}>
        <input
          type="radio"
          value={choice}
          id={`${choice}${id}`}
          name={name}
          hidden
          onChange={handleChange}
          disabled={isDone}
        ></input>
        <label
          htmlFor={`${choice}${id}`}
          className={
            isDone
              ? isCorrectAnswer
                ? "correct-answer"
                : "incorrect-answer"
              : ""
          }
        >
          {decode(choice)}
        </label>
      </div>
    );
  });

  return (
    <div className="question-container">
      <h3 className="question">{decode(item.question)}</h3>
      <div className="answers">{answerElements}</div>
    </div>
  );
}

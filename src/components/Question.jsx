import { useEffect, useState } from "react";
import { decode } from "html-entities";
import { shuffle } from "./utils";
import "./Question.css";

export default function Question(props) {
  const { item, id, name, handleChange, correctAnswer, isDone, isCorrect } =
    props;

  const [choices, setChoices] = useState(
    shuffle([...item.incorrect_answers, item.correct_answer])
  );

  const answerElements = choices.map((choice) => {
    return (
      <div key={choice} className="not-answered">
        <input
          type="radio"
          value={choice}
          id={`${choice}${id}`}
          name={name}
          hidden
          onChange={handleChange}
          disabled={isDone}
        ></input>
        <label htmlFor={`${choice}${id}`}>{decode(choice)}</label>
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

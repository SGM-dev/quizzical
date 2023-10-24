import { useState } from "react";
import { decode } from "html-entities";
import { shuffle } from "./utils";
import "./Question.css";

export default function Question(props) {
  const [choices, setChoices] = useState(
    shuffle([...props.item.incorrect_answers, props.item.correct_answer])
  );

  const [formData, setFormData] = useState({ [props.name]: "" });

  const answerElements = choices.map((choice) => {
    return (
      <div key={choice} className="not-answered">
        <input
          type="radio"
          value={choice}
          id={`${choice}${props.id}`}
          name={props.name}
          hidden
        ></input>
        <label htmlFor={`${choice}${props.id}`}>{decode(choice)}</label>
      </div>
    );
  });

  return (
    <div className="question-container">
      <h3 className="question">{decode(props.item.question)}</h3>
      <div className="answers">{answerElements}</div>
    </div>
  );
}

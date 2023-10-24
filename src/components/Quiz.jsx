import "./Quiz.css";
import Question from "./Question";
import { useEffect, useState } from "react";

export default function Quiz(props) {
  const [formData, setFormData] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});


  useEffect(() => {
    props.questions.forEach((item, index) =>
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [`choice${index}`]: item.correct_answer,
      }))
    );
  }, [props.questions]);

  function handleChange(e) {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const questionElements = props.questions.map((item, index) => {
    return (
      <Question
        item={item}
        id={index}
        key={index}
        name={`choices${index}`}
        handleChange={handleChange}
        correctAnswer={correctAnswers[`choice${index}`]}
      />
    );
  });

  return <div className="quiz-container">{questionElements}</div>;
}

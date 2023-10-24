import "./Quiz.css";
import Question from "./Question";
import { useEffect, useState } from "react";

export default function Quiz(props) {
  const { questions, isDone } = props;
  const [formData, setFormData] = useState({});
  const [correctAnswers, setCorrectAnswers] = useState({});

  useEffect(() => {
    questions.forEach((item, index) =>
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [`choice${index}`]: item.correct_answer,
      }))
    );
  }, [questions]);

  function handleChange(e) {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const questionElements = questions.map((item, index) => {
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

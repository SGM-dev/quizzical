import "./Quiz.css";
import Question from "./Question";
import { useState, useTransition } from "react";

export default function Quiz(props) {
  const questionElements = props.questions.map((item, index) => {
    return (
      <Question
        item={item}
        id={index}
        key={index}
        name={`choices${index}`}
        handleChange={handleChange}
      />
    );
  });

  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  return <form className="quiz-container">{questionElements}</form>;
}

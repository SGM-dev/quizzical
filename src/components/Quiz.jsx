import "./Quiz.css";
import Question from "./Question";
import { useEffect, useState } from "react";

export default function Quiz(props) {
  const {
    questions,
    isDone,
    formData,
    setFormData,
    correctAnswers,
    setCorrectAnswers,
    isCorrect,
    setIsCorrect,
    setScore,
    score,
  } = props;

  function handleChange(e) {
    e.stopPropagation();
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  useEffect(() => {
    if (isDone) {
      Object.keys(formData).forEach((key) =>
        setIsCorrect((prevIsCorrect) => ({
          ...prevIsCorrect,
          [key]: formData[key] == correctAnswers[key],
        }))
      );
    }
  }, [isDone]);

  useEffect(() => {
    if (isDone) {
      const newScore = Object.keys(isCorrect).reduce(
        (total, key) => (isCorrect[key] ? total + 1 : total),
        0
      );
      setScore(newScore);
    }
  }, [isDone, isCorrect]);

  const questionElements = questions.map((item, index) => {
    return (
      <Question
        item={item}
        id={index}
        key={index}
        name={`choices${index}`}
        handleChange={handleChange}
        correctAnswer={correctAnswers[`choices${index}`]}
        isDone={isDone}
        isCorrect={isCorrect}
      />
    );
  });

  return <div className="quiz-container">{questionElements}</div>;
}

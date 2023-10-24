import "./Quiz.css";
import Question from "./Question";

export default function Quiz(props) {
  const questionElements = props.questions.map((item, index) => {
    return (
      <Question item={item} id={index} key={index} name={`choices${index}`} />
    );
  });

  return <div className="quiz-container">{questionElements}</div>;
}

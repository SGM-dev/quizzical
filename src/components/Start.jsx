import "./Start.css";

export default function Start(props) {
  return (
    <div className="start-container">
      <h1 className="title">Quizzical</h1>
      <p className="desc">Some description if needed</p>
      <button className="start-quiz" onClick={() => props.setQuiz(true)}>
        Start quiz
      </button>
    </div>
  );
}

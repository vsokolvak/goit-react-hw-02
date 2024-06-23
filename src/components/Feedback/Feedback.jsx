import style from "./Feedback.module.css";

function Feedback({ feedback: { good, neutral, bad } }) {

  const total = good + neutral + bad

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.el}>Good: {good}</li>
        <li className={style.el}>Neutral: {neutral}</li>
        <li className={style.el}>Bad: {bad}</li>
        <li className={style.el}>Total: {total}</li>
        <li className={style.el}>
          Positive: {Math.round((good / total) * 100) || '0'}%
        </li>
      </ul>
    </div>
  );
}

export default Feedback;
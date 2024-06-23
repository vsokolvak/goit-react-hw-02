import style from "./Options.module.css";

function Options({ changeFeedback, totalFeedback }) {
  return (
    <div className={style.wrapper}>
      <button onClick={() => changeFeedback("good")} className={style.button}>
        Good
      </button>
      <button
        onClick={() => changeFeedback("neutral")}
        className={style.button}
      >
        Neutral
      </button>
      <button onClick={() => changeFeedback("bad")} className={style.button}>
        Bad
      </button>
      {Boolean(totalFeedback) && (
        <button
          onClick={() => changeFeedback("reset")}
          className={style.button}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
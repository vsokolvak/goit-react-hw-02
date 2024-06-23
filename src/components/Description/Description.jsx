import style from "./Description.module.css";

function Description() {
  return (
    <header>
      <div className={style.wrapper}>
        <h1 className={style.title}>Sip Happens Café</h1>
        <p className={style.description}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </header>
  );
}

export default Description;
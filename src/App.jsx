import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  //set state feedback
  const [feedback, setFeedback] = useState(() => {
    const feedback = localStorage.getItem("feedback");
    if (feedback) return JSON.parse(feedback);
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  });

  //feedback set to localstorage 
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  let totalFeedback = 0;

  for (const key in feedback) {
    totalFeedback += feedback[key];
  }

  const changeFeedback = (type) => {
    switch (type) {
      case "good":
        setFeedback({ ...feedback, good: feedback.good + 1 });
        break;
      case "neutral":
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
        break;
      case "bad":
        setFeedback({ ...feedback, bad: feedback.bad + 1 });
        break;
      case "reset":
        setFeedback({
          good: 0,
          neutral: 0,
          bad: 0,
        });
        break;
    }
  };

  return (
    <>
      <Description />
      <main>
        <Options
          changeFeedback={changeFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback ? <Feedback feedback={feedback} /> : <Notification />}
      </main>
    </>
  );
}

export default App;

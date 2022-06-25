import { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);   //app level state 
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList  feedback={feedback}/>
      </div>
    </>
  );
}

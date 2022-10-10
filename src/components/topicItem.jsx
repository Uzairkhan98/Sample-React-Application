import React from "react";
import "./topicItem.css";

export const TopicItem = ({ data }) => {
  const { answer, answeredBy } = data;
  console.log(answer, answeredBy);
  return (
    <div className="topic">
      <p>{answer}</p>
      <h2>{answeredBy}</h2>
    </div>
  );
};

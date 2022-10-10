import "./topics.css";
import { useState, useEffect } from "react";
import { TopicItem } from "../components/topicItem";
import { useLocation } from "react-router-dom";

export default function Topics() {
  const [content, setContent] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const fetchData = () => {
      return fetch(
        "https://run.mocky.io/v3/edd6040f-8188-459d-827b-3f1302678de1"
      )
        .then((res) => res.json())
        .then((res) => setContent(res))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div className="topicsPage">
      <div className="header">
        <h1>Hi, {state}</h1>
        <h3>Here is what we have found for you</h3>
      </div>
      <div className="topicList">
        {content ? (
          content.answers.map((element, index) => (
            <TopicItem key={index} data={element} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

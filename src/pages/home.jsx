import React from "react";
import "./home.css";
import { InputForm } from "../components/inputForm";

export const Home = () => {
  return (
    <>
      <div className="purple">
        <h1>Community</h1>
      </div>
      <div className="content">
        <h1>support</h1>
        <p>Please tell us how we can help you</p>
        <InputForm link="topics" />
      </div>
    </>
  );
};

import React from "react";
import "./inputForm.css";
import arrowLogo from "../assets/arrow.svg";

const NameInput = () => {
  return <input type="text" id="fname" name="fname" placeholder="Your Name" />;
};

const QuestionInput = () => {
  return (
    <textarea name="question" rows={5} cols={5} placeholder="Your Question" />
  );
};

const SubmitButton = () => (
  <button className="submitButton">
    <div className="buttonFlex">
      <p>Access Support Topics</p>
      <img src={arrowLogo} alt="Arrow Logo" />
    </div>
  </button>
);

const TextInput = () => {
  return (
    <form>
      <div className="FormFields">
        <NameInput />
        <QuestionInput />
        <SubmitButton />
      </div>
    </form>
  );
};

export { TextInput };

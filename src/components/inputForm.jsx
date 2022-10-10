import React from "react";
import "./inputForm.css";
import arrowLogo from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const formSubmit = (event) => {
  event.preventDefault();
  console.log("comiong here");
};

const NameInput = () => {
  return (
    <input
      type="text"
      id="fname"
      name="fname"
      placeholder="Your Name"
      required
      minLength="3"
      maxLength="30"
    />
  );
};

const QuestionInput = () => {
  return (
    <textarea
      name="question"
      rows={5}
      cols={5}
      placeholder="Your Question"
      required
      minLength="3"
      maxLength="300"
    />
  );
};

const SubmitButton = ({ link }) => (
  <button className="submitButton" type="submit" onClick={formSubmit}>
    <Link to={`${link}`}>
      <div className="buttonFlex">
        <p>Access Support Topics</p>
        <img src={arrowLogo} alt="Arrow Logo" />
      </div>
    </Link>
  </button>
);

const InputForm = ({ link }) => {
  return (
    <form>
      <div className="FormFields">
        <NameInput />
        <QuestionInput />
        <SubmitButton link={link} />
      </div>
    </form>
  );
};

export { InputForm };

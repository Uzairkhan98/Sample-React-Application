import React, { useState } from "react";
import "./inputForm.css";
import arrowLogo from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const NameInput = ({ changeName }) => {
  const handleChange = (event) => {
    changeName(event.target.value);
  };
  return (
    <input
      type="text"
      // id="fname"
      // name="fname"
      placeholder="Your Name"
      required
      minLength="3"
      maxLength="30"
      onChange={handleChange}
    />
  );
};

const QuestionInput = ({ changeQuestion }) => {
  const handleChange = (event) => {
    changeQuestion(event.target.value);
  };
  return (
    <textarea
      name="question"
      rows={5}
      placeholder="Your Question"
      required
      minLength="3"
      maxLength="300"
      onChange={handleChange}
    />
  );
};

const SubmitButton = () => {
  return (
    <button className="submitButton" type="submit">
      <div className="buttonFlex">
        <p>Access Support Topics</p>
        <img src={arrowLogo} alt="Arrow Logo" />
      </div>
    </button>
  );
};

const InputForm = ({ link }) => {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const navigate = useNavigate();
  const formSubmit = () => {
    navigate(link, { state: name });
  };

  const changeName = (data) => {
    setName(data);
  };

  const changeQuestion = (data) => {
    setQuestion(data);
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="FormFields">
        <NameInput changeName={changeName} />
        <QuestionInput changeQuestion={changeQuestion} />
        <SubmitButton />
      </div>
    </form>
  );
};

export { InputForm };

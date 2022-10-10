import React from "react";
import "./textInput.css";

const NameInput = () => {
  return <input type="text" id="fname" name="fname" placeholder="Your Name" />;
};

const QuestionInput = () => {
  return (
    <textarea name="question" rows={8} cols={5} placeholder="Your Question" />
  );
};

const TextInput = () => {
  return (
    <form>
      <div className="FormFields">
        <NameInput />
        <QuestionInput />
      </div>
    </form>
  );
};

export { TextInput };

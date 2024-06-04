import React, { useState } from "react";
import "./ExpenseForm.css";
import Form from "./Form";

const ExpenseForm = ({ formFunction }) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [displayForm, setDisplayForm] = useState(false);

  function handleTitle(e) {
    // console.log(e.target.value);
    setUserInput((prev) => {
      return {
        ...prev,
        enteredTitle: e.target.value,
      };
    });
  }

  function handleAmount(e) {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredAmount: e.target.value,
      };
    });
  }

  function handleDate(e) {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredDate: e.target.value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    const newUserInput = {
      title: userInput.enteredTitle,
      price: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    formFunction(newUserInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    setDisplayForm(false);
  }

  function setDisplayFormTrue() {
    setDisplayForm(true);
  }
  function setDisplayFormFalse() {
    setDisplayForm(false);
  }

  return (
    <Form
      submitFunc={onSubmit}
      userInput={userInput}
      handleTitle={handleTitle}
      handleAmount={handleAmount}
      handleDate={handleDate}
      trueHandler={setDisplayFormTrue}
      falseHandler={setDisplayFormFalse}
      displayForm={displayForm}
    />
  );
};

export default ExpenseForm;
